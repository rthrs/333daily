# Deployment Guide

## Netlify Deployment

This project is configured for easy deployment on Netlify.

### Files Added for Netlify Compatibility

1. **`netlify.toml`** - Netlify configuration file
2. **`.npmrc`** - npm configuration for consistent behavior
3. **Updated `package.json`** - Added postinstall script

### Build Process

The build process has been optimized to avoid platform-specific issues:

```bash
# Clean install (removes platform-specific lock files)
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Build for production
npm run build
```

### Netlify Settings

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 22

### Common Issues Fixed

1. **Rollup Platform Binaries**: The original error was caused by platform-specific Rollup binaries. This has been resolved by:
    - Using `--legacy-peer-deps` flag
    - Adding proper npm configuration
    - Regenerating package-lock.json

2. **Tailwind CSS Purging**: Dynamic class names are preserved using regex patterns in `tailwind.config.js`

### Local Testing

To test the build locally:

```bash
npm run build
npm run preview
```

The built files will be in the `dist/` directory.
