import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const skills = [
  {
    name: 'React',
    logo: 'https://cdn.simpleicons.org/react',
    category: 'Frontend',
    level: 'Expert',
    description: 'JavaScript library for building user interfaces',
  },
  {
    name: 'Angular',
    logo: 'https://cdn.simpleicons.org/angular/white',
    category: 'Frontend',
    level: 'Advanced',
    description: 'Platform for building web applications',
  },
  {
    name: 'Vue.js',
    logo: 'https://cdn.simpleicons.org/vuedotjs',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Progressive JavaScript framework',
  },
  {
    name: 'Next.js',
    logo: 'https://cdn.simpleicons.org/nextdotjs/white',
    category: 'Frontend',
    level: 'Expert',
    description: 'React framework for production',
  },
  {
    name: 'Svelte',
    logo: 'https://cdn.simpleicons.org/svelte',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Compiler for building user interfaces',
  },
  {
    name: 'Redux',
    logo: 'https://cdn.simpleicons.org/redux',
    category: 'Frontend',
    level: 'Advanced',
    description: 'State management for JavaScript apps',
  },
  {
    name: 'MobX',
    logo: 'https://cdn.simpleicons.org/mobx',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Simple, scalable state management',
  },
  {
    name: 'Nuxt.js',
    logo: 'https://cdn.simpleicons.org/nuxtdotjs',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Vue.js framework for server-side rendering',
  },
  {
    name: 'Ember.js',
    logo: 'https://cdn.simpleicons.org/emberdotjs',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Framework for ambitious web developers',
  },
  {
    name: 'Alpine.js',
    logo: 'https://cdn.simpleicons.org/alpinedotjs',
    category: 'Frontend',
    level: 'Beginner',
    description: 'Lightweight JavaScript framework',
  },
  {
    name: 'Lit',
    logo: 'https://cdn.simpleicons.org/lit',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Simple library for building web components',
  },
  {
    name: 'Astro',
    logo: 'https://cdn.simpleicons.org/astro',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Static site builder for the modern web',
  },
  {
    name: 'Gatsby',
    logo: 'https://cdn.simpleicons.org/gatsby',
    category: 'Frontend',
    level: 'Advanced',
    description: 'React-based framework for building websites and apps',
  },
  {
    name: 'Framer Motion',
    logo: 'https://cdn.simpleicons.org/framer',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Production-ready motion library for React',
  },
  {
    name: 'React Hook Form',
    logo: 'https://cdn.simpleicons.org/reacthookform',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Performant, flexible and extensible forms with easy-to-use validation',
  },
  {
    name: 'Storybook',
    logo: 'https://cdn.simpleicons.org/storybook',
    category: 'Frontend',
    level: 'Advanced',
    description: 'Tool for building UI components and pages in isolation',
  },
  {
    name: 'Vite',
    logo: 'https://cdn.simpleicons.org/vite',
    category: 'Build Tools',
    level: 'Intermediate',
    description: 'Next generation frontend tooling',
  },
  {
    name: 'Remix',
    logo: 'https://cdn.simpleicons.org/remix',
    category: 'Full Stack',
    level: 'Advanced',
    description: 'Full stack web framework based on React',
  },
  {
    name: 'Electron',
    logo: 'https://cdn.simpleicons.org/electron',
    category: 'Desktop',
    level: 'Advanced',
    description: 'Framework for creating native applications with web technologies',
  },
  {
    name: 'jQuery',
    logo: 'https://cdn.simpleicons.org/jquery',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Fast, small, and feature-rich JavaScript library',
  },
  {
    name: 'Backbone.js',
    logo: 'https://cdn.simpleicons.org/backbonedotjs',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Give structure to web applications with models, views, and collections',
  },
  {
    name: 'Solid',
    logo: 'https://cdn.simpleicons.org/solid',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Declarative, efficient, and flexible JavaScript library for building user interfaces',
  },
  {
    name: 'Preact',
    logo: 'https://cdn.simpleicons.org/preact',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Fast 3kB alternative to React with the same modern API',
  },
  {
    name: 'Qwik',
    logo: 'https://cdn.simpleicons.org/qwik',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Resumable JavaScript framework for building instant web applications',
  },
  {
    name: 'Stimulus',
    logo: 'https://cdn.simpleicons.org/stimulus',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Modest JavaScript framework for the HTML you already have',
  },
  {
    name: 'Aurelia',
    logo: 'https://cdn.simpleicons.org/aurelia',
    category: 'Frontend',
    level: 'Advanced',
    description: 'JavaScript client framework for mobile, desktop and web',
  },
  {
    name: 'WebAssembly',
    logo: 'https://cdn.simpleicons.org/webassembly',
    category: 'Performance',
    level: 'Expert',
    description: 'Binary instruction format for a stack-based virtual machine',
  },
  {
    name: 'AssemblyScript',
    logo: 'https://cdn.simpleicons.org/assemblyscript',
    category: 'Language',
    level: 'Advanced',
    description: 'TypeScript-like language that compiles to WebAssembly',
  },
  {
    name: 'Module Federation',
    logo: 'https://cdn.simpleicons.org/webpack',
    category: 'Frontend',
    level: 'Expert',
    description: 'Advanced webpack 5 feature enabling sharing of architecture',
  },
  {
    name: 'Hugo',
    logo: 'https://cdn.simpleicons.org/hugo',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Fast and flexible static site generator built with Go',
  },
  {
    name: 'Eleventy',
    logo: 'https://cdn.simpleicons.org/eleventy',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Simpler static site generator for a more elegant web',
  },
  {
    name: 'react-i18next',
    logo: 'https://cdn.simpleicons.org/i18next',
    category: 'Frontend',
    level: 'Intermediate',
    description: 'Internationalization framework for React / React Native',
  },
  {
    name: 'D3.js',
    logo: 'https://cdn.simpleicons.org/d3dotjs',
    category: 'Data Visualization',
    level: 'Expert',
    description: 'JavaScript library for producing dynamic, interactive data visualizations',
  },
  {
    name: 'Chart.js',
    logo: 'https://cdn.simpleicons.org/chartdotjs',
    category: 'Data Visualization',
    level: 'Intermediate',
    description: 'Simple yet flexible JavaScript charting for designers & developers',
  },
  {
    name: 'SMACSS',
    logo: 'https://cdn.simpleicons.org/css3',
    category: 'CSS',
    level: 'Advanced',
    description: 'Scalable and Modular Architecture for CSS',
  },
  {
    name: 'BEM',
    logo: 'https://cdn.simpleicons.org/bem',
    category: 'CSS',
    level: 'Intermediate',
    description: 'Block Element Modifier methodology',
  },
  {
    name: 'CSS-in-JS',
    logo: 'https://cdn.simpleicons.org/css3',
    category: 'CSS',
    level: 'Advanced',
    description: 'Styling approach that abstracts CSS to the component level',
  },
  {
    name: 'Webpack',
    logo: 'https://cdn.simpleicons.org/webpack',
    category: 'Build Tools',
    level: 'Advanced',
    description: 'Static module bundler for modern JavaScript applications',
  },
  {
    name: 'Rollup',
    logo: 'https://cdn.simpleicons.org/rollupdotjs',
    category: 'Build Tools',
    level: 'Intermediate',
    description: 'Module bundler for JavaScript',
  },
  {
    name: 'Snowpack',
    logo: 'https://cdn.simpleicons.org/snowpack',
    category: 'Build Tools',
    level: 'Intermediate',
    description: 'Lightning-fast frontend build tool, designed for the modern web',
  },
  {
    name: 'XState',
    logo: 'https://cdn.simpleicons.org/xstate',
    category: 'Frontend',
    level: 'Advanced',
    description: 'State machines and statecharts for the modern web',
  },
  {
    name: 'Jest',
    logo: 'https://cdn.simpleicons.org/jest',
    category: 'Testing',
    level: 'Advanced',
    description: 'Delightful JavaScript Testing Framework',
  },
  {
    name: 'Testing Library',
    logo: 'https://cdn.simpleicons.org/testinglibrary',
    category: 'Testing',
    level: 'Advanced',
    description: 'Simple and complete testing utilities for React',
  },
  {
    name: 'Vitest',
    logo: 'https://cdn.simpleicons.org/vitest',
    category: 'Testing',
    level: 'Intermediate',
    description: 'Blazing Fast Unit Test Framework',
  },
  {
    name: 'Lighthouse',
    logo: 'https://cdn.simpleicons.org/lighthouse',
    category: 'Performance',
    level: 'Advanced',
    description: 'Automated tool for improving the quality of web pages',
  },
  {
    name: 'CSS',
    logo: 'https://cdn.simpleicons.org/css3',
    category: 'Frontend',
    level: 'Expert',
    description: 'Styling language for web documents',
  },
  {
    name: 'Sass',
    logo: 'https://cdn.simpleicons.org/sass',
    category: 'CSS',
    level: 'Advanced',
    description: 'CSS preprocessor scripting language',
  },
  {
    name: 'Less',
    logo: 'https://cdn.simpleicons.org/less',
    category: 'CSS',
    level: 'Intermediate',
    description: 'Backwards-compatible language extension for CSS',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://cdn.simpleicons.org/tailwindcss',
    category: 'CSS',
    level: 'Advanced',
    description: 'Utility-first CSS framework',
  },
  {
    name: 'Bootstrap',
    logo: 'https://cdn.simpleicons.org/bootstrap',
    category: 'CSS',
    level: 'Advanced',
    description: 'Popular CSS framework for responsive design',
  },
  {
    name: 'Bulma',
    logo: 'https://cdn.simpleicons.org/bulma',
    category: 'CSS',
    level: 'Intermediate',
    description: 'Modern CSS framework based on Flexbox',
  },
  {
    name: 'Styled Components',
    logo: 'https://cdn.simpleicons.org/styledcomponents',
    category: 'CSS',
    level: 'Advanced',
    description: 'CSS-in-JS library for React',
  },
  {
    name: 'CSS Modules',
    logo: 'https://cdn.simpleicons.org/cssmodules',
    category: 'CSS',
    level: 'Intermediate',
    description: 'Locally scoped CSS for component-based development',
  },
  {
    name: 'Chakra UI',
    logo: 'https://cdn.simpleicons.org/chakraui',
    category: 'UI',
    level: 'Intermediate',
    description: 'Simple, modular and accessible component library for React',
  },
  {
    name: 'Material-UI',
    logo: 'https://cdn.simpleicons.org/mui',
    category: 'UI',
    level: 'Advanced',
    description: "React components that implement Google's Material Design",
  },
  {
    name: 'Ant Design',
    logo: 'https://cdn.simpleicons.org/antdesign',
    category: 'UI',
    level: 'Advanced',
    description: 'A design system for enterprise-level products',
  },
  {
    name: 'Semantic UI',
    logo: 'https://cdn.simpleicons.org/semanticuireact',
    category: 'UI',
    level: 'Intermediate',
    description: 'Development framework that helps create beautiful, responsive layouts',
  },
  {
    name: 'Stylus',
    logo: 'https://cdn.simpleicons.org/stylus',
    category: 'CSS',
    level: 'Intermediate',
    description: 'Expressive, dynamic, robust CSS preprocessor',
  },
  {
    name: 'Radix UI',
    logo: 'https://cdn.simpleicons.org/radixui',
    category: 'UI',
    level: 'Advanced',
    description: 'Unstyled, accessible components for building high‑quality design systems',
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.simpleicons.org/typescript',
    category: 'Language',
    level: 'Advanced',
    description: 'Typed superset of JavaScript that compiles to plain JavaScript',
  },
  {
    name: 'Python',
    logo: 'https://cdn.simpleicons.org/python',
    category: 'Language',
    level: 'Expert',
    description: 'Interpreted, high-level, general-purpose programming language',
  },
  {
    name: 'Java',
    logo: 'https://cdn.simpleicons.org/java',
    category: 'Language',
    level: 'Advanced',
    description: 'Object-oriented programming language used for building large-scale applications',
  },
  {
    name: 'C++',
    logo: 'https://cdn.simpleicons.org/cplusplus',
    category: 'Language',
    level: 'Intermediate',
    description: 'General-purpose programming language with high performance and efficiency',
  },
  {
    name: 'Ruby',
    logo: 'https://cdn.simpleicons.org/ruby',
    category: 'Language',
    level: 'Intermediate',
    description: 'Dynamic, object-oriented programming language focused on simplicity and productivity',
  },
  {
    name: 'Go',
    logo: 'https://cdn.simpleicons.org/go',
    category: 'Language',
    level: 'Intermediate',
    description: 'Statically typed, compiled language designed for simplicity and efficiency',
  },
  {
    name: 'Rust',
    logo: 'https://cdn.simpleicons.org/rust',
    category: 'Language',
    level: 'Beginner',
    description: 'Systems programming language focused on safety, concurrency, and performance',
  },
  {
    name: 'Kotlin',
    logo: 'https://cdn.simpleicons.org/kotlin',
    category: 'Language',
    level: 'Intermediate',
    description: 'Modern programming language that makes developers happier',
  },
  {
    name: 'Swift',
    logo: 'https://cdn.simpleicons.org/swift',
    category: 'Language',
    level: 'Intermediate',
    description: 'Powerful and intuitive programming language for iOS, macOS, and more',
  },
  {
    name: 'PHP',
    logo: 'https://cdn.simpleicons.org/php',
    category: 'Language',
    level: 'Advanced',
    description: 'Server-side scripting language designed for web development',
  },
  {
    name: 'C#',
    logo: 'https://cdn.simpleicons.org/csharp',
    category: 'Language',
    level: 'Advanced',
    description: 'Multi-paradigm programming language for developing various applications',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.simpleicons.org/nodedotjs',
    category: 'Backend',
    level: 'Expert',
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
  },
  {
    name: 'Express.js',
    logo: 'https://cdn.simpleicons.org/express',
    category: 'Backend',
    level: 'Advanced',
    description: 'Fast, unopinionated, minimalist web framework for Node.js',
  },
  {
    name: 'Django',
    logo: 'https://cdn.simpleicons.org/django',
    category: 'Backend',
    level: 'Intermediate',
    description: 'High-level Python web framework that encourages rapid development',
  },
  {
    name: 'Ruby on Rails',
    logo: 'https://cdn.simpleicons.org/rubyonrails',
    category: 'Backend',
    level: 'Intermediate',
    description: 'Server-side web application framework written in Ruby',
  },
  {
    name: 'Spring Boot',
    logo: 'https://cdn.simpleicons.org/springboot',
    category: 'Backend',
    level: 'Advanced',
    description: 'Java-based framework used to create stand-alone, production-grade applications',
  },
  {
    name: 'Flask',
    logo: 'https://cdn.simpleicons.org/flask',
    category: 'Backend',
    level: 'Intermediate',
    description: 'Lightweight WSGI web application framework for Python',
  },
  {
    name: 'Laravel',
    logo: 'https://cdn.simpleicons.org/laravel',
    category: 'Backend',
    level: 'Advanced',
    description: 'PHP web application framework with expressive, elegant syntax',
  },
  {
    name: 'ASP.NET Core',
    logo: 'https://cdn.simpleicons.org/dotnet',
    category: 'Backend',
    level: 'Advanced',
    description: 'Cross-platform, high-performance framework for building modern web applications',
  },
  {
    name: 'GraphQL',
    logo: 'https://cdn.simpleicons.org/graphql',
    category: 'API',
    level: 'Intermediate',
    description: 'Query language for APIs and a runtime for executing those queries',
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.simpleicons.org/mongodb',
    category: 'Database',
    level: 'Advanced',
    description: 'Document-oriented NoSQL database used in many modern web applications',
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.simpleicons.org/postgresql',
    category: 'Database',
    level: 'Advanced',
    description: 'Powerful, open source object-relational database system',
  },
  {
    name: 'MySQL',
    logo: 'https://cdn.simpleicons.org/mysql',
    category: 'Database',
    level: 'Advanced',
    description: 'Open-source relational database management system',
  },
  {
    name: 'Redis',
    logo: 'https://cdn.simpleicons.org/redis',
    category: 'Database',
    level: 'Intermediate',
    description: 'In-memory data structure store, used as a database, cache, and message broker',
  },
  {
    name: 'Elasticsearch',
    logo: 'https://cdn.simpleicons.org/elasticsearch',
    category: 'Database',
    level: 'Intermediate',
    description: 'Distributed, RESTful search and analytics engine',
  },
  {
    name: 'Docker',
    logo: 'https://cdn.simpleicons.org/docker',
    category: 'DevOps',
    level: 'Advanced',
    description: 'Platform for developing, shipping, and running applications in containers',
  },
  {
    name: 'Kubernetes',
    logo: 'https://cdn.simpleicons.org/kubernetes',
    category: 'DevOps',
    level: 'Advanced',
    description: 'Open-source system for automating deployment, scaling, and management of containerized applications',
  },
  {
    name: 'Git',
    logo: 'https://cdn.simpleicons.org/git',
    category: 'DevOps',
    level: 'Expert',
    description: 'Distributed version control system for tracking changes in source code',
  },
  {
    name: 'Jenkins',
    logo: 'https://cdn.simpleicons.org/jenkins',
    category: 'DevOps',
    level: 'Intermediate',
    description: 'Open source automation server for building, deploying, and automating projects',
  },
  {
    name: 'AWS',
    logo: 'https://cdn.simpleicons.org/amazonaws',
    category: 'Cloud',
    level: 'Advanced',
    description: 'On-demand cloud computing platforms and APIs provided by Amazon',
  },
  {
    name: 'Google Cloud',
    logo: 'https://cdn.simpleicons.org/googlecloud',
    category: 'Cloud',
    level: 'Intermediate',
    description: 'Suite of cloud computing services offered by Google',
  },
  {
    name: 'Azure',
    logo: 'https://cdn.simpleicons.org/microsoftazure',
    category: 'Cloud',
    level: 'Intermediate',
    description: 'Cloud computing service created by Microsoft for building, testing, deploying, and managing applications',
  },
  {
    name: 'Firebase',
    logo: 'https://cdn.simpleicons.org/firebase',
    category: 'Cloud',
    level: 'Advanced',
    description: 'Platform developed by Google for creating mobile and web applications',
  },
  {
    name: 'Heroku',
    logo: 'https://cdn.simpleicons.org/heroku',
    category: 'Cloud',
    level: 'Intermediate',
    description: 'Cloud platform as a service supporting several programming languages',
  },
  {
    name: 'TensorFlow',
    logo: 'https://cdn.simpleicons.org/tensorflow',
    category: 'AI/ML',
    level: 'Intermediate',
    description: 'Open source platform for machine learning and artificial intelligence',
  },
  {
    name: 'PyTorch',
    logo: 'https://cdn.simpleicons.org/pytorch',
    category: 'AI/ML',
    level: 'Beginner',
    description: 'Open source machine learning library based on the Torch library',
  },
  {
    name: 'Scikit-learn',
    logo: 'https://cdn.simpleicons.org/scikitlearn',
    category: 'AI/ML',
    level: 'Intermediate',
    description: 'Machine learning library for Python programming language',
  },
  {
    name: 'Pandas',
    logo: 'https://cdn.simpleicons.org/pandas',
    category: 'Data Science',
    level: 'Advanced',
    description: 'Software library written for data manipulation and analysis in Python',
  },
  {
    name: 'NumPy',
    logo: 'https://cdn.simpleicons.org/numpy',
    category: 'Data Science',
    level: 'Advanced',
    description: 'Library for the Python programming language, adding support for large, multi-dimensional arrays and matrices',
  },
  {
    name: 'shadcn/ui',
    logo: 'https://avatars.githubusercontent.com/u/124599?s=200&v=4',
    category: 'UI',
    level: 'Advanced',
    description: 'Re-usable components built using Radix UI and Tailwind CSS',
  },
  {
    name: 'Deno',
    logo: 'https://cdn.simpleicons.org/deno',
    category: 'Backend',
    level: 'Intermediate',
    description: 'A secure runtime for JavaScript and TypeScript built with V8, Rust, and Tokio',
  },
  {
    name: 'Bun',
    logo: 'https://cdn.simpleicons.org/bun',
    category: 'Backend',
    level: 'Beginner',
    description: 'All-in-one JavaScript runtime & toolkit designed for speed, complete with bundler, test runner, and Node.js-compatible package manager',
  },
  {
    name: 'Tauri',
    logo: 'https://cdn.simpleicons.org/tauri',
    category: 'Desktop',
    level: 'Intermediate',
    description: 'Framework for building tiny, blazing fast binaries for all major desktop platforms',
  },
  {
    name: 'Supabase',
    logo: 'https://cdn.simpleicons.org/supabase',
    category: 'Backend',
    level: 'Intermediate',
    description: 'Open source Firebase alternative with a Postgres database, Authentication, instant APIs, and Realtime subscriptions',
  },
  {
    name: 'tRPC',
    logo: 'https://cdn.simpleicons.org/trpc',
    category: 'Full Stack',
    level: 'Advanced',
    description: 'End-to-end typesafe APIs made easy',
  },
  {
    name: 'Nx',
    logo: 'https://cdn.simpleicons.org/nx',
    category: 'DevOps',
    level: 'Advanced',
    description: 'Smart, fast and extensible build system with first class monorepo support',
  },
  {
    name: 'Rome',
    logo: 'https://cdn.simpleicons.org/rome',
    category: 'DevOps',
    level: 'Intermediate',
    description: 'Unified developer tools for JavaScript, TypeScript, and the web',
  },
  {
    name: 'Prisma',
    logo: 'https://cdn.simpleicons.org/prisma',
    category: 'Backend',
    level: 'Advanced',
    description: 'Next-generation ORM for Node.js and TypeScript',
  },
  {
    name: 'Svelte Kit',
    logo: 'https://cdn.simpleicons.org/svelte',
    category: 'Full Stack',
    level: 'Intermediate',
    description: 'The fastest way to build Svelte apps',
  },
  {
    name: 'Turborepo',
    logo: 'https://cdn.simpleicons.org/turborepo',
    category: 'DevOps',
    level: 'Advanced',
    description: 'High-performance build system for JavaScript and TypeScript codebases',
  },
  {
    name: 'Playwright',
    logo: 'https://cdn.simpleicons.org/playwright',
    category: 'Testing',
    level: 'Advanced',
    description: 'Framework for Web Testing and Automation',
  },
  {
    name: 'Cypress',
    logo: 'https://cdn.simpleicons.org/cypress',
    category: 'Testing',
    level: 'Advanced',
    description: 'JavaScript End to End Testing Framework',
  },
  {
    name: 'WebdriverIO',
    logo: 'https://cdn.simpleicons.org/webdriverio',
    category: 'Testing',
    level: 'Intermediate',
    description: 'Next-gen browser and mobile automation test framework for Node.js',
  },
  {
    name: 'Capacitor',
    logo: 'https://cdn.simpleicons.org/capacitor',
    category: 'Mobile',
    level: 'Intermediate',
    description: 'Cross-platform native runtime for web apps',
  },
  {
    name: 'Flutter',
    logo: 'https://cdn.simpleicons.org/flutter',
    category: 'Mobile',
    level: 'Advanced',
    description: "Google's UI toolkit for building natively compiled applications",
  },
  {
    name: 'React Native',
    logo: 'https://cdn.simpleicons.org/react',
    category: 'Mobile',
    level: 'Advanced',
    description: 'Framework for building native apps using React',
  },
  {
    name: 'Expo',
    logo: 'https://cdn.simpleicons.org/expo',
    category: 'Mobile',
    level: 'Intermediate',
    description: 'Open-source platform for making universal native apps for Android, iOS, and the web',
  },
  {
    name: 'NativeScript',
    logo: 'https://cdn.simpleicons.org/nativescript',
    category: 'Mobile',
    level: 'Intermediate',
    description: 'Open source framework for building truly native mobile apps',
  },
  {
    name: 'Neutralino',
    logo: 'https://cdn.simpleicons.org/neutralinojs',
    category: 'Desktop',
    level: 'Intermediate',
    description: 'Lightweight and native desktop application development framework',
  },
  {
    name: 'Three.js',
    logo: 'https://cdn.simpleicons.org/threedotjs',
    category: 'Graphics',
    level: 'Advanced',
    description: 'JavaScript 3D library',
  },
  {
    name: 'WebGL',
    logo: 'https://cdn.simpleicons.org/webgl',
    category: 'Graphics',
    level: 'Expert',
    description: 'JavaScript API for rendering interactive 2D and 3D graphics',
  },
  {
    name: 'Babylon.js',
    logo: 'https://cdn.simpleicons.org/babylondotjs',
    category: 'Graphics',
    level: 'Advanced',
    description: 'Powerful, beautiful, simple, and open game and rendering engine',
  },
  {
    name: 'WebGPU',
    logo: 'https://cdn.simpleicons.org/w3c',
    category: 'Graphics',
    level: 'Expert',
    description: 'Next generation graphics API for the Web',
  },
  {
    name: 'REST',
    logo: 'https://cdn.simpleicons.org/openapiinitiative',
    category: 'API',
    level: 'Expert',
    description: 'Architectural style for distributed hypermedia systems',
  },
  {
    name: 'gRPC',
    logo: 'https://cdn.simpleicons.org/grpc',
    category: 'API',
    level: 'Advanced',
    description: 'High performance, open-source universal RPC framework',
  },
  {
    name: 'WebRTC',
    logo: 'https://cdn.simpleicons.org/webrtc',
    category: 'Web',
    level: 'Advanced',
    description: 'Real-Time Communications for the web',
  },
  {
    name: 'WebSockets',
    logo: 'https://cdn.simpleicons.org/socketdotio',
    category: 'Web',
    level: 'Advanced',
    description: 'Protocol providing full-duplex communication channels over a single TCP connection',
  },
  {
    name: 'PWA',
    logo: 'https://cdn.simpleicons.org/pwa',
    category: 'Web',
    level: 'Advanced',
    description: 'Progressive Web Apps - web apps that use modern web capabilities to deliver an app-like experience',
  },
  {
    name: 'Web Components',
    logo: 'https://cdn.simpleicons.org/webcomponents',
    category: 'Web',
    level: 'Advanced',
    description: 'Suite of different technologies allowing you to create reusable custom elements',
  },
  {
    name: 'esbuild',
    logo: 'https://cdn.simpleicons.org/esbuild',
    category: 'Build Tools',
    level: 'Intermediate',
    description: 'An extremely fast JavaScript bundler',
  },
  {
    name: 'Parcel',
    logo: 'https://cdn.simpleicons.org/parcel',
    category: 'Build Tools',
    level: 'Intermediate',
    description: 'Zero configuration web application bundler',
  },
  {
    name: 'GitHub Actions',
    logo: 'https://cdn.simpleicons.org/githubactions',
    category: 'DevOps',
    level: 'Intermediate',
    description: 'Automate, customize, and execute your software development workflows in your GitHub repository',
  },
  {
    name: 'GitLab CI/CD',
    logo: 'https://cdn.simpleicons.org/gitlab',
    category: 'DevOps',
    level: 'Intermediate',
    description: 'Continuous Integration and Deployment platform integrated with GitLab',
  },
  {
    name: 'Terraform',
    logo: 'https://cdn.simpleicons.org/terraform',
    category: 'DevOps',
    level: 'Advanced',
    description: 'Infrastructure as Code software tool for building, changing, and versioning infrastructure safely and efficiently',
  },
  {
    name: 'Ansible',
    logo: 'https://cdn.simpleicons.org/ansible',
    category: 'DevOps',
    level: 'Intermediate',
    description: 'Automation tool for configuring and managing computers',
  },
  {
    name: 'Prometheus',
    logo: 'https://cdn.simpleicons.org/prometheus',
    category: 'DevOps',
    level: 'Intermediate',
    description: 'Open-source systems monitoring and alerting toolkit',
  },
  {
    name: 'Grafana',
    logo: 'https://cdn.simpleicons.org/grafana',
    category: 'DevOps',
    level: 'Intermediate',
    description: 'Open source analytics and interactive visualization web application',
  },
  {
    name: 'ELK Stack',
    logo: 'https://cdn.simpleicons.org/elasticstack',
    category: 'DevOps',
    level: 'Advanced',
    description: 'Set of open-source products for search, analysis, and visualization of data',
  },
  {
    name: 'Serverless',
    logo: 'https://cdn.simpleicons.org/serverless',
    category: 'Cloud',
    level: 'Advanced',
    description: 'Cloud computing execution model where the cloud provider dynamically manages the allocation of machine resources',
  },
  {
    name: 'DigitalOcean',
    logo: 'https://cdn.simpleicons.org/digitalocean',
    category: 'Cloud',
    level: 'Intermediate',
    description: 'Cloud infrastructure provider focused on simplifying web infrastructure for software developers',
  },
  {
    name: 'Vercel',
    logo: 'https://cdn.simpleicons.org/vercel/white',
    category: 'Cloud',
    level: 'Intermediate',
    description: 'Cloud platform for static sites and Serverless Functions',
  },
  {
    name: 'HTML',
    logo: 'https://cdn.simpleicons.org/html5',
    category: 'Frontend',
    level: 'Expert',
    description: 'Standard markup language for creating web pages',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.simpleicons.org/javascript',
    category: 'Language',
    level: 'Expert',
    description: 'High-level, interpreted programming language for web development',
  },
]

async function downloadImage(url, filepath) {
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'image/*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.startsWith('image/')) {
      throw new Error(`Invalid content-type: ${contentType}`)
    }

    const extension = contentType.split('/')[1].split('+')[0]
    const filepathWithExt = filepath.replace(/\.[^/.]+$/, `.${extension}`)

    const buffer = await response.arrayBuffer()
    await fs.writeFile(filepathWithExt, Buffer.from(buffer))
    console.log(`Downloaded: ${filepathWithExt}`)

    return { success: true, filepath: filepathWithExt }
  } catch (error) {
    console.error(`Failed to download ${url}: ${error.message}`)
    return { success: false, filepath: null }
  }
}

async function main() {
  const skillsFolder = path.join(__dirname, 'skills')

  try {
    await fs.mkdir(skillsFolder, { recursive: true })
  } catch (error) {
    console.error(`Failed to create skills folder: ${error.message}`)
    return
  }

  let successful = 0
  let failed = 0

  for (const skill of skills) {
    const imageUrl = skill.logo
    const filename = `${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.png`
    const filepath = path.join(skillsFolder, filename)

    const { success, filepath: downloadedFilepath } = await downloadImage(imageUrl, filepath)
    if (success) {
      successful++
      // Update the skill's logo URL to point to the local file
      skill.logo = `/public/skills/${path.basename(downloadedFilepath)}`
    } else {
      failed++
    }

    await new Promise((resolve) => setTimeout(resolve, 100))
  }

  console.log(`\nDownload Summary:`)
  console.log(`Successfully downloaded: ${successful} images`)
  console.log(`Failed to download: ${failed} images`)

  // Write the updated skills array to a new file
  const updatedSkillsFile = path.join(__dirname, 'updated-skills.js')
  const updatedSkillsContent = `export const skills = ${JSON.stringify(skills, null, 2)};`

  try {
    await fs.writeFile(updatedSkillsFile, updatedSkillsContent)
    console.log(`\nUpdated skills array written to: ${updatedSkillsFile}`)
  } catch (error) {
    console.error(`Failed to write updated skills file: ${error.message}`)
  }
}

main().catch((error) => console.error('An error occurred:', error))
