const https = require('https');
const fs = require('fs');

// Name of the NPM package to retrieve release information for
const packageName = 'axios';

// GitHub API endpoint for retrieving releases
const endpoint = `https://api.github.com/repos/npm/${packageName}/releases`;

// GitHub API headers with authentication token
const headers = {
  'User-Agent': 'node.js',
  'Authorization': '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',
};

https.get(endpoint, { headers }, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const releases = JSON.parse(data);
    console.log('releases:', releases)
    const latestRelease = releases[0];

    // Get the release notes for the latest major version
    const majorVersion = parseInt(latestRelease.tag_name.split('.')[0]);
    const majorReleaseNotes = latestRelease.body.split(`# ${majorVersion}.`)[1].trim();

    // Write the release notes to a text file
    const fileName = `release-notes-${packageName}.txt`;
    fs.writeFile(fileName, majorReleaseNotes, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Release notes for major version ${majorVersion} of ${packageName} written to file ${fileName}`);
    });
  });
}).on('error', (err) => {
  console.error(err);
});
