#!/bin/bash

# Portfolio Setup Script
# This script initializes the portfolio project for development

set -e

echo "🚀 Priyanshu Roy's Developer Portfolio"
echo "======================================"
echo ""

# Check Node version
NODE_VERSION=$(node -v)
echo "✓ Node.js version: $NODE_VERSION"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "✗ npm is not installed. Please install Node.js and npm."
    exit 1
fi

echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔧 Setting up environment variables..."
if [ ! -f .env.local ]; then
    cp .env.example .env.local
    echo "✓ Created .env.local"
    echo "  → Update EMAIL_USER and EMAIL_PASSWORD with your Gmail credentials"
else
    echo "✓ .env.local already exists"
fi

echo ""
echo "✓ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env.local with your email credentials"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:3000"
echo ""
echo "For more details, see README.md"
