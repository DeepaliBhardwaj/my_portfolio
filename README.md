# Portfolio Website - Deepali Bhardwaj

A modern, responsive portfolio website built with React, showcasing professional experience, projects, skills, and achievements. Features smooth animations, dark/light theme toggle, and a fully responsive design.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations powered by Framer Motion
- **Dark/Light Theme**: Toggle between dark and light modes with persistent theme preference
- **Fully Responsive**: Mobile-first design that works seamlessly across all devices
- **Smooth Scrolling**: Section-based navigation with active section highlighting
- **Interactive Components**: Built with shadcn/ui components for a polished user experience
- **Performance Optimized**: Fast load times and optimized animations
- **Accessible**: Built with accessibility best practices in mind

## 📋 Sections

1. **Hero**: Introduction with call-to-action buttons
2. **About**: Professional summary and key achievements
3. **Skills**: Technical skills organized by category (Frontend, Backend, Databases, Tools, APIs, Design)
4. **Projects**: Showcase of completed projects with technologies used
5. **Experience**: Professional work experience
6. **Contact**: Contact information and social links

## 🛠️ Tech Stack

### Core
- **React 19**: Latest version of React for building user interfaces
- **React Router DOM**: Client-side routing
- **JavaScript (ES6+)**: Modern JavaScript features

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components built on Radix UI
- **Radix UI**: Unstyled, accessible component primitives
- **Framer Motion**: Animation library for React
- **Lucide React**: Beautiful icon library

### Build Tools
- **CRACO**: Create React App Configuration Override
- **PostCSS**: CSS processing
- **Autoprefixer**: Automatic vendor prefixing

### Form Handling & Validation
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Validation resolvers

### Additional Libraries
- **Axios**: HTTP client for API requests
- **date-fns**: Date utility library
- **next-themes**: Theme management
- **Sonner**: Toast notifications

## 📁 Project Structure

```
my_portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── App.js           # Main application component
│   ├── App.css          # Application styles
│   ├── index.js         # Application entry point
│   └── index.css        # Global styles
├── plugins/             # Custom webpack plugins
├── components.json      # shadcn/ui configuration
├── craco.config.js      # CRACO configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v16 or higher
- **npm** or **yarn**: Package manager
- **Git**: Version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my_portfolio
   ```

2. **Install dependencies**
   
   Using npm:
   ```bash
   npm install
   ```
   
   Using yarn (recommended):
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📜 Available Scripts

### `npm start` or `yarn start`
Runs the app in development mode. The page will reload when you make changes. You may also see lint errors in the console.

### `npm test` or `yarn test`
Launches the test runner in interactive watch mode.

### `npm run build` or `yarn build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and filenames include hashes. Your app is ready to be deployed!

## 🎨 Customization

### Updating Personal Information

Edit `src/App.js` to update:
- **Personal details**: Name, title, location
- **Contact information**: Email, phone, LinkedIn
- **Skills**: Modify the `skills` object
- **Projects**: Update the `projects` array
- **Experience**: Edit the experience section
- **Achievements**: Modify the `achievements` array

### Styling

- **Colors**: Edit CSS variables in `src/App.css` for theme colors
- **Fonts**: Update font imports in `src/App.css` (currently using Space Grotesk and Inter)
- **Tailwind**: Customize `tailwind.config.js` for additional styling options

### Adding New Sections

1. Add a new section component in `src/App.js`
2. Add the section ID to the `navItems` array
3. Update the scroll handler to include the new section

## 🔧 Configuration

### CRACO Configuration

The project uses CRACO to customize the Create React App build. Configuration options in `craco.config.js`:
- Path aliases (`@/` for `src/`)
- Custom webpack plugins
- Visual editing support (optional)
- Health check endpoints (optional)

### Environment Variables

Create a `.env` file in the root directory for optional features:
```env
DISABLE_HOT_RELOAD=false
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
```

## 📦 Dependencies

### Production Dependencies
- React 19.0.0
- React Router DOM 7.5.1
- Framer Motion 12.23.24
- Tailwind CSS 3.4.17
- Radix UI components
- And more (see `package.json` for complete list)

### Development Dependencies
- CRACO 7.1.0
- ESLint 9.23.0
- PostCSS 8.4.49
- Autoprefixer 10.4.20

## 🌐 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build` folder.

### Deploy to Popular Platforms

- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the `build` folder or connect via Git
- **GitHub Pages**: Use `gh-pages` package to deploy
- **AWS S3**: Upload the `build` folder to an S3 bucket

## 🎯 Key Features Implementation

- **Theme Toggle**: Implemented using React state and CSS variables
- **Smooth Scrolling**: Native CSS scroll-behavior with JavaScript enhancement
- **Active Section Detection**: Scroll event listener tracks current section
- **Responsive Navigation**: Mobile menu with animation using Framer Motion
- **Component Library**: shadcn/ui components for consistent design

## 📝 License

This project is private and proprietary.

## 👤 Author

**Deepali Bhardwaj**
- Email: dips21201@gmail.com
- Phone: +91 6266244955
- Location: Indore, MP, India
- LinkedIn: [Deepali Bhardwaj](https://www.linkedin.com/in/deepali-bhardwaj-884215217)

## 🙏 Acknowledgments

- [Create React App](https://github.com/facebook/create-react-app)
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for icons

---

Built with ❤️ using React and modern web technologies.
