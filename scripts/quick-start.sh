#!/bin/bash

# Quick Start Script for TechTrove
set -e

echo "🚀 Quick Start - TechTrove Developer Portfolio"
echo "=============================================="
echo ""

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local from template..."
    cp .env.example .env.local
    echo ""
    echo "⚠️  IMPORTANT: Please update .env.local with your actual API keys:"
    echo "   - Firebase configuration"
    echo "   - OpenAI API key"
    echo "   - Hugging Face API key"
    echo "   - Pinecone API key"
    echo ""
    echo "   You can start with demo values for development, but some features"
    echo "   will require real API keys to function properly."
    echo ""
else
    echo "✅ Environment file exists"
fi

echo "🏗️  Building the project..."
npm run build

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env.local with your API keys"
echo "2. Run 'npm run dev' to start development server"
echo "3. Visit http://localhost:3000"
echo ""
echo "Available commands:"
echo "  npm run dev      - Start development server"
echo "  npm run build    - Build for production"
echo "  npm run lint     - Run linting"
echo "  npm run test     - Run tests"
echo ""
echo "📚 Documentation: ./docs/"
echo "🔧 Configuration: Check next.config.js, tailwind.config.js"
echo ""
echo "Happy coding! ✨"