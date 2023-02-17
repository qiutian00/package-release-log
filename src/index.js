const fetch = require('cross-fetch');
const fs = require('fs');

// const owner = 'umijs';
// const repo = 'umi';
// const startVersion = 'v3.5';
let owner, repo, startVersion;

async function getMajorReleases(packageName) {
  const url = `https://api.github.com/repos/${owner}/${repo}/releases?per_page=1000`;
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

    const logPath = './release-log'
    if (!fs.existsSync(logPath)) {
      console.log('log目录不存在，需要创建')
      fs.mkdirSync(logPath)
      console.log('log目录创建成功')
    } else {
      console.log('log目录已存在')
    }
    fs.writeFile(`${logPath}/${filePath}`, logData, { encoding: 'utf8' }, (err) => {
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

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please Enter owner：', (answer) => {
  owner = answer;
  rl.question('Please Enter repo：', (answer) => {
    repo = answer;
    rl.question('Please Enter startVersion：', (answer) => {
      startVersion = answer;
      console.log(`owner: ${owner}, repo: ${repo}, startVersion: ${startVersion}`);
      rl.close();
      console.log('Get release info ...')
      const filePath = `${repo}-${startVersion}-releases.md`;
      writeReleaseLog(repo, filePath);
    });
  });
});

// const packageName = 'react';

