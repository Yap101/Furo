const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Support .cjs files from ethers and other Node-compatible packages
config.resolver.sourceExts.push('cjs');

// Do NOT enable unstable_enablePackageExports - it can break some packages
// that don't fully support the exports field
// config.resolver.unstable_enablePackageExports = true;

module.exports = config;
