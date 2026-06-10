export const personalData = {
  name: "Priyanshu Roy",
  title: "Backend Engineer",
  tagline:
    "Building scalable microservices and high-performance financial systems",
  description:
    "Backend engineer with 2+ years of experience architecting and implementing scalable microservices using Java and Spring Boot. Specialized in system design, API optimization, and DevOps practices. Proven track record of delivering enterprise-grade financial platforms with 99.9% uptime and significant performance improvements.",
  email: "roy1.priyanshu@gmail.com",
  phone: "+91-7561992426",
  github: "https://github.com/priyanshuroy",
  linkedin: "https://linkedin.com/in/roypriyanshu",
  resume: "/resume.pdf",
};

export const heroContent = {
  mainHeading: "Backend Engineer",
  subHeading: "Crafting scalable systems at enterprise scale",
  description:
    "I build high-performance microservices and financial platforms. 2+ years of experience with Java, Spring Boot, and system design. Every line of code optimized for performance and reliability.",
  cta: {
    primary: { text: "View Work", link: "#projects" },
    secondary: { text: "Get in Touch", link: "#contact" },
  },
};

export const aboutContent = {
  heading: "About Me",
  paragraphs: [
    "I'm a backend engineer passionate about building systems that scale. What started as a curiosity about how large-scale applications work has evolved into a deep expertise in microservices architecture, API optimization, and distributed systems.",
    "At Virtusa Consulting Services, I've contributed to building enterprise-grade financial platforms from the ground up. I focus on writing code that not only works, but scales elegantly under pressure. When your system processes thousands of transactions per second, every optimization matters.",
    "My engineering philosophy: measure everything, optimize ruthlessly, and never compromise on reliability. I believe great software is invisible to end users—it just works, consistently and predictably.",
    "Beyond coding, I'm fascinated by system design, performance optimization, and the engineering decisions that separate good systems from great ones. I enjoy mentoring junior engineers and sharing what I've learned about building production-grade systems.",
  ],
  stats: [
    { label: "Years of Experience", value: "2+" },
    { label: "Enterprise Applications Built", value: "5+" },
    { label: "API Latency Reduction", value: "30%" },
    { label: "Test Coverage Achievement", value: "85%+" },
  ],
};

export const experienceData = [
  {
    id: 1,
    role: "Associate Engineer",
    company: "Virtusa Consulting Services",
    period: "Jan 2024 – Present",
    duration: "6 months",
    description:
      "Leading backend development for enterprise-scale financial platforms. Architecting microservices that handle complex trade finance workflows with guaranteed reliability.",
    achievements: [
      {
        metric: "30%",
        title: "API Latency Reduction",
        description:
          "Optimized REST API endpoints through intelligent caching, query optimization, and microservice architecture redesign",
      },
      {
        metric: "35%",
        title: "Database Performance",
        description:
          "Improved query response time through strategic indexing, query refactoring, and connection pooling optimization",
      },
      {
        metric: "99.9%",
        title: "Uptime Achievement",
        description:
          "Implemented robust error handling, circuit breakers, and comprehensive monitoring for enterprise reliability",
      },
      {
        metric: "85%+",
        title: "Unit Test Coverage",
        description:
          "Achieved high test coverage using JUnit and Mockito, ensuring code quality and preventing regressions",
      },
      {
        metric: "5+",
        title: "Enterprise Applications",
        description:
          "Developed backend services across multiple financial and enterprise applications",
      },
      {
        metric: "25%",
        title: "Performance Improvement",
        description:
          "Optimized application performance through API redesign, caching strategies, and code-level optimizations",
      },
      {
        metric: "20%",
        title: "CI/CD Optimization",
        description:
          "Automated deployment pipelines reducing release cycles from weeks to days",
      },
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Jenkins",
      "Microservices",
      "REST APIs",
      "System Design",
    ],
  },
  {
    id: 2,
    role: "Software Development Intern",
    company: "Virtusa Consulting Services",
    period: "May 2023 – Sept 2023",
    duration: "4 months",
    description:
      "Contributed to backend development of high-transaction financial systems. Built production-grade REST APIs handling significant transaction volume.",
    achievements: [
      {
        metric: "2000+",
        title: "Daily Transactions Handled",
        description:
          "Built REST APIs capable of processing 2000+ daily transactions with reliability and performance",
      },
      {
        metric: "Optimized",
        title: "Database Queries",
        description:
          "Improved query efficiency and system performance through optimization techniques",
      },
      {
        metric: "Increased",
        title: "System Reliability",
        description:
          "Enhanced reliability through comprehensive unit testing using JUnit",
      },
    ],
    technologies: ["Java", "Spring Boot", "SQL", "REST APIs", "JUnit"],
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Trade Finance Platform",
    category: "Enterprise",
    description:
      "Greenfield microservices platform for managing complex trade finance workflows at enterprise scale.",
    longDescription:
      "A comprehensive trade finance platform built from scratch using microservices architecture. Handles complex workflows including letter of credit management, payment processing, compliance verification, and transaction reconciliation.",
    problem:
      "Financial institutions needed a modern, scalable platform to replace legacy monolithic systems. The system had to handle complex workflows, ensure 99.9% uptime, and process thousands of transactions daily.",
    solution:
      "Designed and implemented a distributed microservices architecture using Java and Spring Boot. Each service handles a specific domain (payments, compliance, settlement) and communicates through well-defined APIs.",
    architecture: {
      frontend: "React with TypeScript",
      backend: "Java Spring Boot Microservices",
      database: "PostgreSQL with read replicas",
      cache: "Redis for high-frequency queries",
      queue: "Apache Kafka for async processing",
      deployment: "Docker containers on Kubernetes",
      monitoring: "ELK Stack with Prometheus",
    },
    challenges: [
      {
        title: "Consistency in Distributed System",
        solution:
          "Implemented event sourcing and saga pattern for maintaining consistency across services",
      },
      {
        title: "High Transaction Throughput",
        solution:
          "Optimized database queries, implemented connection pooling, and used async processing for non-critical operations",
      },
      {
        title: "99.9% Uptime Requirement",
        solution:
          "Circuit breakers, comprehensive monitoring, automated rollbacks, and graceful degradation",
      },
    ],
    features: [
      "Multi-tenant support",
      "Compliance workflows",
      "Real-time transaction processing",
      "Automated reconciliation",
      "Audit trails and reporting",
      "Role-based access control",
    ],
    metrics: {
      latencyReduction: "30%",
      transactionsPerDay: "2000+",
      systemUptime: "99.9%",
      testCoverage: "85%+",
    },
    techStack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Docker",
      "Kubernetes",
      "Jenkins",
    ],
    github: "https://github.com/priyanshuroy",
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: "PII Data Masking Platform",
    category: "Security",
    description:
      "Secure system for detecting, masking, and encrypting personally identifiable information with compliance support.",
    longDescription:
      "A comprehensive data privacy platform that detects sensitive information in data streams, applies masking policies, and ensures compliance with regulations like GDPR and CCPA. Built to protect customer data at enterprise scale.",
    problem:
      "Organizations struggle to ensure data privacy compliance while maintaining data usability for analytics and testing. Manual data masking is error-prone and expensive.",
    solution:
      "Built an automated detection and masking system using advanced pattern matching and ML-based entity recognition. Policies are configurable per organization and audit logs track all transformations.",
    architecture: {
      frontend: "FastAPI for APIs",
      backend: "Python with async processing",
      database: "MongoDB for flexible schemas",
      detection: "Pattern matching + ML models",
      deployment: "Docker on cloud infrastructure",
    },
    challenges: [
      {
        title: "Detection Accuracy",
        solution:
          "Implemented rule-based and ML-based detection with manual review workflows",
      },
      {
        title: "Performance at Scale",
        solution:
          "Async processing, batch operations, and streaming data handling",
      },
    ],
    features: [
      "PII detection (credit cards, SSN, email, phone)",
      "Configurable masking policies",
      "Audit logging",
      "Compliance reporting",
      "Custom detection rules",
      "Batch and real-time processing",
    ],
    metrics: {
      detectionAccuracy: "98%",
      processingThroughput: "10K records/sec",
      falsPositiveRate: "<1%",
    },
    techStack: ["Python", "FastAPI", "MongoDB", "Scikit-learn", "Docker"],
    github: "https://github.com/priyanshuroy",
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: "Movie Rating Microservice",
    category: "Microservices",
    description:
      "Scalable microservice for movie ratings and reviews with external API integration and caching.",
    longDescription:
      "A scalable microservice that aggregates movie ratings from multiple sources, provides user reviews, and serves personalized recommendations. Designed as a standalone service that can be integrated into larger platforms.",
    problem:
      "Movie platforms needed a dedicated service for ratings management that could scale independently without impacting the main application.",
    solution:
      "Built a Spring Boot microservice with external API integration, intelligent caching, and eventual consistency patterns for distributed systems.",
    architecture: {
      backend: "Java Spring Boot",
      database: "PostgreSQL",
      cache: "Redis",
      externalAPIs: "OMDB/TMDB integration",
    },
    features: [
      "Rate limiting",
      "Response caching",
      "User review management",
      "Aggregated ratings",
      "Recommendation engine",
    ],
    metrics: {
      responseTime: "<100ms",
      cacheHitRate: "85%",
      rps: "5000+",
    },
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "REST APIs"],
    github: "https://github.com/priyanshuroy",
    demo: null,
    featured: false,
  },
];

export const skillsData = {
  backend: [
    "Java",
    "Spring Boot",
    "REST APIs",
    "Microservices",
    "System Design",
    "API Optimization",
  ],
  frontend: ["JavaScript", "React", "TypeScript", "Tailwind CSS"],
  databases: ["PostgreSQL", "Oracle", "MySQL", "MS SQL", "MongoDB", "Redis"],
  cloud: ["Docker", "Kubernetes", "AWS", "CI/CD Pipelines"],
  devops: ["Jenkins", "Docker", "Git", "Maven", "Apache Kafka"],
  testing: ["JUnit", "Mockito", "Integration Testing", "Performance Testing"],
  tools: ["Git", "Maven", "Swagger", "Postman", "IntelliJ IDEA", "Jira"],
  concepts: [
    "Data Structures",
    "OOP",
    "System Design",
    "Distributed Systems",
    "Database Optimization",
    "Performance Tuning",
    "Agile/Scrum",
  ],
};

export const certificationsData = [
  {
    id: 1,
    title: "Oracle Certified Associate (Java SE 8)",
    issuer: "Oracle",
    date: "2023",
    description:
      "Certified expertise in Java programming and object-oriented design principles",
    icon: "award",
  },
  {
    id: 2,
    title: "Pega Certified Business Architect",
    issuer: "Pegasystems",
    date: "2023",
    description:
      "Certified proficiency in enterprise application architecture and design",
    icon: "award",
  },
];

export const educationData = [
  {
    id: 1,
    degree: "B.Tech in Computer Science",
    institution: "Netaji Subhash Engineering College",
    year: "2019 – 2023",
    gpa: "9.18/10",
    highlights: [
      "Strong foundation in data structures and algorithms",
      "Focus on distributed systems",
    ],
  },
];

export const achievementsData = [
  {
    label: "Years of Experience",
    value: "2+",
    description: "Building scalable backend systems",
  },
  {
    label: "Enterprise Applications",
    value: "5+",
    description: "Production systems deployed",
  },
  {
    label: "API Performance",
    value: "30%",
    description: "Latency reduction achieved",
  },
  {
    label: "Test Coverage",
    value: "85%+",
    description: "Unit test achievement",
  },
  {
    label: "System Uptime",
    value: "99.9%",
    description: "Reliability maintained",
  },
  {
    label: "Performance Improvements",
    value: "25%",
    description: "Through optimization",
  },
];
