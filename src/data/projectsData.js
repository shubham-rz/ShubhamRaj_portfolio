export const projects = [
  {
    id: 1,
    title: 'Extramarks Learning & Assessment Platform',
    description:
      'Production-grade React platform combining student learning dashboards and teacher assessment systems, enabling course consumption, assessment management, and data-driven workflows through scalable, modular UI architecture.',
    features: [
      'Designed and built responsive dashboards for both students and teachers using React and Ant Design with reusable, theme-consistent components',
  
      'Integrated REST APIs to handle courses, modules, subscriptions, assessments, question banks, and results with robust loading, empty, and error states',
  
      'Implemented Redux Toolkit for managing complex state including course data, filters, user progress, assessments, and bulk actions across multiple modules',
  
      'Built reusable table, filter, and form components supporting complex workflows, debounced search, and paginated data views',
  
      'Optimized performance using memoization, route-based code splitting, API caching, and virtualized lists for handling large datasets',
  
      'Enhanced UX with sticky headers, responsive layouts, and smooth handling of dense data tables for teacher-facing workflows',
    ],
    tech: ['React', 'Ant Design', 'Redux Toolkit', 'REST APIs', 'CSS Modules'],
    github: '',
    live: 'https://www.extramarks.com/',
    image: null,
  },
  {
    id: 2,
    title: 'The Heritage Landing Page',
    description:
      'Modern, visually engaging landing page focused on heritage storytelling, built with responsive layouts, smooth animations, and performance-optimized frontend architecture.',
    features: [
      'Designed and developed a pixel-perfect, responsive UI ensuring seamless experience across mobile, tablet, and desktop devices',
  
      'Built modular, reusable components to maintain scalable and clean frontend architecture',
  
      'Implemented smooth animations and scroll-based interactions to enhance user engagement and visual storytelling',
  
      'Optimized performance by reducing asset size, improving load time, and minimizing unnecessary re-renders',
  
      'Ensured cross-browser compatibility and applied accessibility best practices for consistent user experience',
  
      'Deployed the project using GitHub Pages with version-controlled workflow for continuous updates',
    ],
    tech: ['React', 'JavaScript', 'CSS3', 'Framer Motion', 'GitHub Pages'],
    github: 'https://github.com/shubham-rz/the-heritage',
    live: 'https://shubham-rz.github.io/the-heritage/',
    image: null,
  },
  {
    id: 3,
    title: 'Weather Forecast Application',
    description:
      'Dynamic weather forecasting application that provides real-time weather data for any city using API integration, featuring responsive UI, clean data visualization, and optimized user interactions.',
    features: [
      'Integrated OpenWeatherMap API to fetch and display real-time weather data including temperature, humidity, wind speed, and conditions',
  
      'Implemented dynamic city-based search functionality with input validation and error handling for invalid or empty queries',
  
      'Designed a clean, responsive UI ensuring seamless experience across mobile and desktop devices',
  
      'Handled asynchronous API calls with proper loading, success, and error states to improve user experience',
  
      'Structured code into modular, maintainable components with clear separation of concerns',
  
      'Optimized performance by minimizing unnecessary DOM updates and improving data rendering efficiency',
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3', 'REST API', 'OpenWeatherMap API'],
    github: 'https://github.com/shubham-rz/Weather-Forecast',
    live: 'https://shubham-rz.github.io/Weather-Forecast/',
    image: null,
  }
];

export const timelineData = [
    {
      year: '2025 - Present',
      role: 'Software Engineer',
      company: 'Quarks Technosoft',
      points: [
        "Engineered scalable React.js applications using modular, reusable components and clean architecture principles",
  
        "Integrated RESTful APIs and managed complex asynchronous data flows to deliver seamless, data-driven user experiences",
  
        "Optimized frontend performance by minimizing re-renders, refining rendering logic, and improving load efficiency",
  
        "Designed and developed interactive UI systems including dashboards and dynamic components to enhance user engagement",
  
        "Customized and extended Ant Design components to ensure design consistency across scalable applications",
  
        "Collaborated with cross-functional teams to deliver robust, scalable, and user-centric frontend solutions",
  
        "Identified and resolved critical UI and performance bottlenecks using React DevTools and modern debugging techniques",
  
        "Leveraged AI-powered tools like GitHub Copilot and Cursor AI to accelerate development and improve code quality"
      ]
    },
    {
      year: '2022 — 2025',
      role: 'Frontend Developer',
      company: 'Publicis Sapient',
      points: [
        "Developed scalable, high-performance React.js interfaces, enhancing user experience and reducing UI defects",
  
        "Improved application performance using lazy loading, code splitting, and optimized state management techniques",
  
        "Built reusable component systems to maintain UI consistency and accelerate feature development",
  
        "Architected maintainable frontend solutions using React Hooks, Context API, and Redux",
  
        "Collaborated in Agile teams to deliver scalable and high-quality frontend features",
  
        "Integrated REST APIs and managed efficient data flow for dynamic and responsive user interfaces",
  
        "Debugged and resolved complex UI issues, significantly improving rendering performance and responsiveness"
      ]
    }
  
];
export const skills = {
  'Frontend Engineering': [
    { name: 'React', level: 95 },
    { name: 'JavaScript ES6+', level: 92 },
    { name: 'HTML5 & CSS3', level: 90 },
    { name: 'TypeScript', level: 78 },
    { name: 'Next.js', level: 72 },
    { name: 'Twig', level: 70 },
  ],
  'Performance & Architecture': [
    { name: 'Component Architecture', level: 93 },
    { name: 'Performance Optimization', level: 88 },
    { name: 'State Management', level: 90 },
    { name: 'REST API Integration', level: 92 },
    { name: 'System Design Thinking', level: 80 },
  ],
  'Tooling & Workflow': [
    { name: 'Vite / Webpack', level: 85 },
    { name: 'Git & GitHub', level: 90 },
    { name: 'CSS Modules / Bootstrap', level: 90 },
    { name: 'CSS Modules / Tailwind', level: 88 },
    { name: 'Framer Motion / GSAP', level: 75 },
    { name: 'Testing (Jest / RTL)', level: 70 },
  ],
};

export const socialLinks = {
  github: 'https://github.com/shubham-rz',
  linkedin: 'https://www.linkedin.com/in/shubhamrz/',
  email: 'shubhamrai4u@gmail.com',
  resume: 'https://drive.google.com/file/d/1AISfVqtLwxS7JiCdhk940z4zfDEEdhpQ/view?usp=sharing',
};
