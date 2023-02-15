const fetch = require('cross-fetch');
const fs = require('fs');

const owner = 'facebook';
const repo = 'react';
const startVersion = 'v18';

async function getMajorReleases(packageName) {
  const url = `https://api.github.com/repos/${owner}/${repo}/releases?per_page=100`;
  const response = await fetch(url);
  const data = await response.json();
  const majorReleases = data.filter((release) => {
    // console.log('release:', release);
    const tagName = release.tag_name;
    return tagName.startsWith(startVersion);
  });
  return majorReleases;
}

async function writeReleaseLog(packageName, filePath) {
  try {
    const majorReleases = await getMajorReleases(packageName);
    if (majorReleases.length === 0) {
      console.log('No major releases found for package:', packageName);
      return;
    }
    const logData = majorReleases.map((release) => {
      const tagName = release.tag_name;
      const publishedAt = release.published_at;
      const changelogUrl = release.html_url;
      return `## ${tagName} - ${publishedAt} - ${changelogUrl} \n${release.body}`;
    }).join('\n');
    fs.writeFile(filePath, logData, { encoding: 'utf8' }, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Release log written to ${filePath}`);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

// const packageName = 'react';
const filePath = `${repo}-${startVersion}-releases.md`;
writeReleaseLog(repo, filePath);
