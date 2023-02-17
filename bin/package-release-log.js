#! /usr/bin/env node
const shell = require('shelljs');
const { spawn } = require('child_process');

shell.echo('Please enter owner, repo, and start version:');
const child = spawn('node', ['src/index.js'], { stdio: 'inherit' });

child.on('exit', () => {
  console.log('All done!');
});

