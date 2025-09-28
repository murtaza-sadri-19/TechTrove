# 🚀 TechTrove - AI-Powered Developer Portfolio

A cutting-edge developer portfolio showcasing the seamless integration of modern web technologies with advanced AI capabilities. Built with Next.js 15, styled with Tailwind CSS, with AI integrations from OpenAI, Hugging Face, and Pinecone.

![TechTrove Banner](https://via.placeholder.com/1200x400/3B82F6/FFFFFF?text=TechTrove)

## ✨ Features

- **🎨 Modern UI/UX**: Beautiful, responsive design with Tailwind CSS and Framer Motion animations
- **🤖 AI Integration**: Powered by OpenAI GPT-4, Hugging Face models, and Pinecone vector database

- **⚡ Next.js 14**: Latest features including App Router, Server Components, and optimizations
- **📱 Responsive Design**: Mobile-first approach with seamless device compatibility
- **🔒 Secure**: Proper authentication, security rules, and environment variable management
- **🚀 Performance**: Optimized for speed with lazy loading, image optimization, and caching
- **📊 Analytics**: Built-in analytics and monitoring capabilities

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

### Backend


### AI/ML Services
- **OpenAI GPT-4** - Language model for intelligent features
- **Hugging Face** - Pre-trained ML models
- **Pinecone** - Vector database for embeddings

### Development Tools
- **ESLint & Prettier** - Code quality and formatting
- **Husky** - Git hooks
- **Jest** - Testing framework
- **GitHub Actions** - CI/CD pipeline

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

- OpenAI API key
- Hugging Face API key
- Pinecone account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/murtaza-sadri-19/TechTrove.git
   cd TechTrove
   ```

2. **Run the setup script**
   ```bash
   ./scripts/dev/setup.sh
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API keys and configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env


# AI Services
OPENAI_API_KEY=sk-your_openai_key
HUGGINGFACE_API_KEY=hf_your_huggingface_token
PINECONE_API_KEY=your_pinecone_key
```


2. Enable Firestore, Authentication, and Storage
3. Add your domain to authorized domains
4. Download service account key for admin operations

## 📁 Project Structure

```
TechTrove/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── providers.tsx      # Context providers
├── frontend/              # Frontend components and logic
│   ├── components/        # React components
│   │   ├── sections/      # Page sections
│   │   ├── layout/        # Layout components
│   │   └── ui/            # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Frontend utilities
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Helper functions
├── backend/               # Backend configuration

│   ├── rules/             # Security rules
│   └── schemas/           # Data schemas
├── config/                # Configuration files

│   ├── ai/                # AI service configuration
│   └── env/               # Environment configuration
├── public/                # Static assets
│   ├── images/            # Images and graphics
│   ├── icons/             # Icons and favicons
│   └── assets/            # Other static files
├── docs/                  # Documentation
│   ├── api/               # API documentation
│   ├── deployment/        # Deployment guides
│   └── development/       # Development guides
├── scripts/               # Utility scripts
│   ├── build/             # Build scripts
│   ├── deploy/            # Deployment scripts
│   └── dev/               # Development scripts
└── package.json           # Dependencies and scripts
```

## 🔨 Development

### Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
npm run type-check       # TypeScript type checking

# Testing
npm run test             # Run tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Generate coverage report

# Deployment
npm run deploy           # Build for production
npm run deploy:functions # Deploy only functions
npm run deploy:hosting   # Deploy only hosting

# Utilities
npm run clean            # Clean build artifacts
npm run analyze          # Analyze bundle size
```

### Development Workflow

1. **Feature Development**
   ```bash
   git checkout -b feature/your-feature
   npm run dev
   # Make your changes
   npm run lint && npm run type-check
   git commit -m "feat: your feature description"
   ```

2. **Testing**
   ```bash
   npm run test
   npm run test:coverage
   ```

3. **Building**
   ```bash
   npm run build
   npm run start
   ```

## 🚀 Deployment

### Firebase Hosting

1. **Setup Firebase CLI**
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. **Initialize Firebase (if not done)**
   ```bash
   firebase init
   ```

3. **Deploy**
   ```bash
   npm run deploy
   # or use the script
   ./scripts/deploy/firebase.sh
   ```

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

## 🤖 AI Features

### OpenAI Integration
- GPT-4 for intelligent content generation
- Embeddings for semantic search
- DALL-E for image generation

### Hugging Face Models
- Text classification and sentiment analysis
- Image recognition and captioning
- Translation and summarization

### Pinecone Vector Database
- Semantic search capabilities
- Content recommendations
- Similar project matching

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: Optimized with code splitting

## 🔒 Security


- Environment variable validation
- CORS configuration
- XSS and CSRF protection
- Rate limiting on API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run linting and tests
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Murtaza Sadri**
- GitHub: [@murtaza-sadri-19](https://github.com/murtaza-sadri-19)
- LinkedIn: [Murtaza Sadri](https://linkedin.com/in/murtaza-sadri)
- Email: contact@techtrove.dev

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

- [OpenAI](https://openai.com/) for AI capabilities
- [Vercel](https://vercel.com/) for deployment platform

---

**⭐ If you found this project helpful, please consider giving it a star!**