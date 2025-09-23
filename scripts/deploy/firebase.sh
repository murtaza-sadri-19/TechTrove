#!/bin/bash

# Deployment Script for TechTrove
set -e

echo "🚀 Deploying TechTrove..."

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI is not installed. Installing..."
    npm install -g firebase-tools
fi

# Login to Firebase (if not already logged in)
if ! firebase projects:list &> /dev/null; then
    echo "🔐 Please login to Firebase..."
    firebase login
fi

# Build the application
echo "🏗️  Building for production..."
npm run build

# Deploy to Firebase
echo "🚀 Deploying to Firebase..."
firebase deploy

echo "✅ Deployment completed successfully!"
echo "🌐 Your app is now live!"