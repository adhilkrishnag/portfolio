/**
 * Build-time script to refresh static repository metadata from public APIs.
 * Usage: node scripts/refresh-public-metadata.js
 */
const fs = require('fs');
const path = require('path');

const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'github-metadata.json');

async function refreshMetadata() {
  const metadata = {
    repoName: 'adhilkrishnag/dicom_viewer',
    url: 'https://github.com/adhilkrishnag/dicom_viewer',
    pubUrl: 'https://pub.dev/packages/dicom_viewer',
    language: 'Dart',
    license: 'MIT',
    version: 'v0.3.0',
    stars: null,
    forks: null,
    label: 'Repository metadata · Updated from GitHub',
    lastUpdated: new Date().toISOString().split('T')[0]
  };

  try {
    const pubRes = await fetch('https://pub.dev/api/packages/dicom_viewer');
    if (pubRes.ok) {
      const pubData = await pubRes.json();
      if (pubData.latest && pubData.latest.version) {
        metadata.version = `v${pubData.latest.version}`;
      }
    }
  } catch (err) {
    console.warn('Could not refresh pub.dev metadata; using baseline:', err.message);
  }

  try {
    const ghRes = await fetch('https://api.github.com/repos/adhilkrishnag/dicom_viewer', {
      headers: { 'Accept': 'application/vnd.github.v3+json', 'User-Agent': 'portfolio-build' }
    });
    if (ghRes.ok) {
      const ghData = await ghRes.json();
      if (typeof ghData.stargazers_count === 'number') metadata.stars = ghData.stargazers_count;
      if (typeof ghData.forks_count === 'number') metadata.forks = ghData.forks_count;
    }
  } catch (err) {
    console.warn('Could not refresh GitHub metadata; using baseline:', err.message);
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(metadata, null, 2), 'utf8');
  console.log('Successfully updated data/github-metadata.json:', metadata);
}

refreshMetadata();
