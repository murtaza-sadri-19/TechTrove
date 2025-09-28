#!/bin/bash

# Development Setup Script for TechTrove
set -e

echo "🚀 Setting up TechTrove development environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Setup environment variables
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local from .env.example..."
    cp .env.example .env.local
    echo "⚠️  Please update .env.local with your actual environment variables"
else
    echo "✅ .env.local already exists"
fi

# Setup Git hooks
echo "🪝 Setting up Git hooks..."
npx husky install

# Run type checking
echo "🔍 Running type checking..."
npm run type-check

# Run linting
echo "🧹 Running linting..."
npm run lint

echo "✅ Development environment setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env.local with your AI API keys (if needed)"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Visit http://localhost:3000 to see your portfolio"
echo ""
echo "Happy coding! 🎉"