import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'sonivivek346@gmail.com',
    phone: '+91 7054672275',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Vivek, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/Vivek',
    linkedinProfile: 'https://www.linkedin.com/in/sonivivek346',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/viveksooni' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/sonivivek346' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'HTML5',
            icon: '/logo/html.svg',
        },
        {
            name: 'CSS3',
            icon: '/logo/css.svg',
        },
        {
            name: 'React.js',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux Toolkit',
            icon: '/logo/redux.png',
        },
        {
            name: 'TanStack Query',
            icon: '/logo/tanstack-query.svg',
        },
        {
            name: 'Zustand',
            icon: '/logo/zustand.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'shadcn/ui',
            icon: '/logo/shadcn-ui.svg',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.svg',
        },
        {
            name: 'Vite',
            icon: '/logo/vite.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'Prisma ORM',
            icon: '/logo/prisma.png',
        },
        {
            name: 'Drizzle ORM',
            icon: '/logo/drizzle.svg',
        },
        {
            name: 'Zod',
            icon: '/logo/zod.svg',
        },
        {
            name: 'Redis',
            icon: '/logo/redis.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'GitHub Actions',
            icon: '/logo/github.png',
        },
        {
            name: 'Nginx',
            icon: '/logo/nginx.svg',
        },
        {
            name: 'PM2',
            icon: '/logo/node.png',
        },
        {
            name: 'Webpack',
            icon: '/logo/webpack.png',
        },
        {
            name: 'Turborepo',
            icon: '/logo/turborepo.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'AgroDetect Website & App',
        slug: 'agrodetect',
        liveUrl: 'https://www.agrodetect.in/',
        year: 2026,
        timeline: 'June – August 2026',
        description: `
      A freelance website and Android app project for AgroDetect, a portable pesticide detection platform for agricultural field testing.<br/><br/>
      The website introduces the sensing platform, research services, facilities, and mobile app. The companion app brings the field-testing workflow to a phone, with device scanning, crop and soil modes, pesticide readings, a crop library, real-time data, and result history.
      `,
        role: `
      Freelance Website & App Developer<br/>
      June – end of August 2026
      <ul>
        <li>Designed and built the AgroDetect website to present its technology, services, and research facilities.</li>
        <li>Built the companion Android app for device scanning and viewing pesticide detection results.</li>
        <li>Developed the mobile interface for crop and soil testing, a crop library, real-time readings, and result history.</li>
      </ul>
      `,
        techStack: ['Web Development', 'Android App', 'UI/UX Design'],
        thumbnail: '/projects/images/agrodetect-website.png',
        longThumbnail: '/projects/images/agrodetect-website-full.png',
        images: [
            '/projects/images/agrodetect-website.png',
            '/projects/images/agrodetect-mobile-section.png',
        ],
    },
    {
        title: 'Distributed Task Queue System',
        slug: 'distributed-task-queue',
        year: 2024,
        description: `
      Architected microservices job queue processing 10K+ tasks/hour with priority scheduling and dead-letter queue handling.<br/><br/>
      Deployed on Docker Swarm achieving 99.9% completion rate and 65% faster throughput.
      `,
        role: `
      Backend Architect <br/>
      <ul>
        <li>Implemented Node.js with Redis and Bull for reliable queue processing.</li>
        <li>Set up Docker Swarm for deployment and fault tolerance.</li>
        <li>Architected PostgreSQL database schema for task state management.</li>
      </ul>
      `,
        techStack: [
            'Node.js',
            'Redis',
            'Bull',
            'PostgreSQL',
            'Docker',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
        ],
        sourceCode: 'https://github.com/viveksooni',
    },
    {
        title: 'Real-Time Analytics Dashboard',
        slug: 'real-time-analytics-dashboard',
        year: 2024,
        description: `
      SSE-powered dashboard serving 500+ concurrent users at sub-100ms refresh.<br/><br/>
      Processed 1M+ records at 95% cache hit rate with PostgreSQL materialized views and Redis caching.
      `,
        role: `
      Full Stack Developer <br/>
      <ul>
        <li>Built frontend with Next.js 14, TypeScript and Recharts.</li>
        <li>Implemented SSE (Server-Sent Events) for real-time data streaming.</li>
        <li>Optimized database via PostgreSQL materialized views and Redis.</li>
      </ul>
      `,
        techStack: [
            'Next.js 14',
            'TypeScript',
            'WebSocket',
            'Recharts',
            'Prisma',
            'Redis',
            'PostgreSQL',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
        ],
        sourceCode: 'https://github.com/viveksooni',
    },
    {
        title: 'E-Learning Platform',
        slug: 'e-learning-platform',
        year: 2024,
        description: `
      Developed HLS video streaming platform with progress tracking for 2K+ students across 50+ courses.<br/><br/>
      Implemented type-safe tRPC API with JWT authentication and role-based access control.
      `,
        role: `
      Full Stack Developer <br/>
      <ul>
        <li>Integrated AWS S3 for secure video storage and HLS streaming.</li>
        <li>Built type-safe APIs using tRPC and validated inputs.</li>
        <li>Implemented Stripe for payment processing and subscriptions.</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'TypeScript',
            'tRPC',
            'Prisma',
            'AWS S3',
            'Stripe',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
        ],
        sourceCode: 'https://github.com/viveksooni',
    },
    {
        title: 'Blogging websites',
        slug: 'electro-ev',
        liveUrl: 'https://electroev.co.uk/',
        year: 2025,
        description: `
      A complete agency portfolio platform built for Electro EV to showcase their services, blog content, and product offerings. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🛠️ Service Display System: Interactive service showcase with synchronized sliders</li>
        <li>✍️ Blog Management: SEO-friendly blog with categorization and search</li>
        <li>🛒 Product Catalog: Organized product display with filtering capabilities</li>
        <li>📱 Fully Responsive: Optimized for all device sizes</li>
        <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented complex slider synchronization logic using Swiper.js</li>
        <li>Customized Payload CMS admin panel for intuitive content management</li>
        <li>Developed reusable UI components with shadcn for design consistency</li>
        <li>Configured efficient data fetching strategies in Next.js</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
        <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
        <li>🔄 State Management: Implemented client-side data fetching and caching</li>
        <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
        <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
        <li>🧩 Third-Party Integration: Added Swiper.js for interactive sliders</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Payload CMS',
            'Tailwind CSS',
            'shadcn',
            'Swiper.js',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp',
        ],
    },
    {
        title: 'Chat App2',
        slug: 'epikcart',
        techStack: [
            'React',
            'Redux',
            'React i18n',
            'Tailwind CSS',
            'Framer Motion',
            'debouncing',
            'Api Integration',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
        liveUrl: 'https://demo.epikcart.siphertech.com/',
        year: 2023,
        description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
        role: `As the frontend developer in a team of five, I: <br/>
        - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    },
    {
        title: 'Resume Roaster',
        slug: 'resume-roaster',
        techStack: [
            'GPT-4',
            'Next.js',
            'Postgressql',
            'Prisma',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2023,
        description:
            'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
        role: `As the sole developer and business owner, I:<br/>
        - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
        - Integrated GPT-4 for AI-driven feedback and insights.<br/>
        - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    },
    {
        title: 'Real Estate',
        slug: 'property-pro',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
    {
        title: 'Consulting Finance',
        slug: 'crenotive',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/Vivek/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
    {
        title: 'devLinks',
        slug: 'devLinks',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: 'https://github.com/Vivek/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

            I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Assistant Manager (Full Stack Developer)',
        company: 'Startup Incubation and Innovation Centre, IIT Kanpur',
        duration: 'Aug 2025 - Present',
        description: [
            'Rebuilt SIIC\'s institutional platform with React and Node.js, improving load performance by ~60% and organizing content for 261 startups and 46 programmes; generated 4.1K organic sessions.',
            'Delivered PRISM Pulse Connect for DSIR and a secure 14-module employee portal with biometric attendance, four-level role-based access, and 100+ migrated employee records; maintained 99.8% uptime.',
            'Modernized four programme and event websites, owned testing and production deployment on IIT Kanpur infrastructure, supported a ministerial launch, and mentored a development intern.',
        ],
    },
    {
        title: 'Website & App Developer (Freelance)',
        company: 'AgroDetect',
        duration: 'June 2026 - August 2026',
        description: [
            'Designed and built agrodetect.in to showcase the portable pesticide detection platform, research services, facilities, and companion mobile app.',
            'Built the AgroDetect Android app with device scanning, crop and soil testing interfaces, pesticide readings, a crop library, real-time data, and result history.',
            'Delivered the website and app as a freelance engagement from June through the end of August.',
        ],
    },
    {
        title: 'Frontend Developer (Freelance)',
        company: 'Freelance Projects',
        duration: 'Nov 2024 - July 2025',
        description: [
            'Built 5+ client-facing applications using React and Next.js; achieved 95+ PageSpeed scores across all projects through server-side rendering, code splitting, and Vercel Edge Functions.',
            'Developed full-stack e-commerce platform with Next.js and Stripe integration; reduced infrastructure costs by 40% using serverless architecture with sub-200ms API response times.',
        ],
    },
    {
        title: 'Software Developer',
        company: 'Wipro Limited',
        duration: 'Mar 2023 - Nov 2024',
        description: [
            'Developed EdTech platform frontend using React and TypeScript serving 50K+ monthly active users with 99.5% uptime and sub-2s load time.',
            'Reduced JavaScript bundle size from 2.8MB to 1.5MB (45%) via lazy loading and code splitting, improving Core Web Vitals scores across the application.',
        ],
    },
];

