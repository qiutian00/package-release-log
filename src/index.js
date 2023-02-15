const fs = require('fs');
const request = require('request');
const registryAuthToken = require('registry-auth-token');

// Set the package name and the major version you are interested in
const packageName = 'umi';
const majorVersion = 3;

// Get the user's authentication token for the npm registry
const authToken = registryAuthToken('https://registry.npmjs.org/', { recursive: true });

// Construct the URL for the package's metadata
const metadataUrl = `https://registry.npmjs.org/${packageName}`;

// Send a request to the npm registry to get the package's metadata
request({
  url: metadataUrl,
  json: true,
  auth: {
    bearer: authToken.token
  }
}, (err, res, body) => {
  if (err) {
    console.error(err);
  } else if (res.statusCode !== 200) {
    console.error(`Unexpected status code: ${res.statusCode}`);
  } else {
    // Find the release notes for the major version
    const versions = Object.keys(body.versions).sort((a, b) => {
      // Compare two semver version strings and return -1, 0, or 1 depending on their order
      const versionCompare = (x, y) => {
        const [xMajor, xMinor, xPatch] = x.split('.');
        const [yMajor, yMinor, yPatch] = y.split('.');
        if (xMajor > yMajor) {
          return 1;
        } else if (xMajor < yMajor) {
          return -1;
        } else if (xMinor > yMinor) {
          return 1;
        } else if (xMinor < yMinor) {
          return -1;
        } else if (xPatch > yPatch) {
          return 1;
        } else if (xPatch < yPatch) {
          return -1;
        } else {
          return 0;
        }
      };
      return versionCompare(a, b);
    }).reverse();
    for (const version of versions) {
      const [major, minor, patch] = version.split('.');
      if (major === majorVersion.toString()) {
        const releaseNotes = body.versions[version].dist.tarball;
        const fileName = `${packageName}-v${version}-release-notes.txt`;
        fs.writeFile(fileName, releaseNotes, (err) => {
          if (err) {
            console.error(`Error writing release notes to ${fileName}: ${err.message}`);
          } else {
            console.log(`Release notes for version ${version} written to ${fileName}`);
          }
        });
        return;
      }
    }
    console.error(`Major version ${majorVersion} not found`);
  }
});