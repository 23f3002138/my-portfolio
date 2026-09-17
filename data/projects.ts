export interface ProjectLink {
  github?: string;
  kaggle?: string;
  isPrivate?: boolean;
  privateLabel?: string;
  isTeam?: boolean;
}

export interface ArchitectureNode {
  title: string;
  sub: string;
  icon?: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'Software Engineering' | 'Data Science & ML' | 'Data Analytics' | 'Interactive / XR';
  subtitle: string;
  shortDescription: string;
  fullOverview: string;
  problemStatement?: string;
  approach?: string;
  technologies: string[];
  links: ProjectLink;
  badge: string;
  accentColor: 'cyan' | 'emerald' | 'violet' | 'amber' | 'rose' | 'indigo';
  keyFeatures: { title: string; detail: string }[];
  architectureFlow?: ArchitectureNode[];
  resultsAndFindings?: string[];
  metrics?: { label: string; value: string }[];
  privacyNote?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'may2026-team-006',
    number: '01',
    title: 'Software Engineering Team Platform',
    category: 'Software Engineering',
    subtitle: 'Modular Full-Stack Web Application & Team Software Architecture',
    shortDescription: 'Enterprise software engineering team project built using modern Agile methodologies, modular component architecture, and clean API boundaries.',
    fullOverview: 'A full-stack software engineering application developed as a team project. It demonstrates enterprise software engineering standards, including modular feature organization, clean REST API contracts, database schema design, automated unit testing, and collaborative Git workflow management.',
    problemStatement: 'Designing a scalable, modular web application that coordinates multiple features across frontend and backend services while maintaining strict version control and code quality in a team environment.',
    approach: 'Implemented modular component design, decoupled API routes, structured relational data schema, pull request code reviews, and structured sprint cycles.',
    technologies: ['TypeScript', 'React', 'Node.js', 'REST APIs', 'SQL', 'Git Workflow'],
    links: {
      github: 'https://github.com/agarwal-muskan/MAY2026-Team-006',
      isTeam: true,
    },
    badge: 'Software Engineering Team Project',
    accentColor: 'cyan',
    keyFeatures: [
      {
        title: 'Modular Full-Stack Architecture',
        detail: 'Clean separation of frontend UI, RESTful endpoints, and relational database persistence models.'
      },
      {
        title: 'Agile & Team Git Workflow',
        detail: 'Collaborative development leveraging feature branching, structured PR code reviews, and issue tracking.'
      },
      {
        title: 'Data Validation & Error Resilience',
        detail: 'End-to-end data schema validation, sanitized request handling, and synchronized client state management.'
      }
    ],
    architectureFlow: [
      { title: 'Frontend Layer', sub: 'React & Modular UI Components' },
      { title: 'API Gateway', sub: 'RESTful Route Controllers' },
      { title: 'Application Logic', sub: 'Business Rules & Validation' },
      { title: 'Database Layer', sub: 'Relational Schema Persistence' }
    ],
    resultsAndFindings: [
      'Successfully delivered a modular, full-stack application following Agile sprint cycles.',
      'Maintained high code consistency through automated linting and structured code review standards.'
    ]
  },
  {
    id: 'hospital-management-v2',
    number: '02',
    title: 'Hospital Management System V2',
    category: 'Software Engineering',
    subtitle: 'Asynchronous Vue 3 & Flask Healthcare Platform with Celery Beat & Redis',
    shortDescription: 'Enterprise healthcare platform featuring role-based authentication, Celery async background processing, Redis caching, daily automated appointment reminders, and monthly doctor reports.',
    fullOverview: 'A comprehensive healthcare management application built with a Vue 3 Single Page Application (SPA) frontend and a Flask RESTful API backend. Celery and Redis powers asynchronous background task processing, avoiding API blocking during heavy operations such as PDF/CSV treatment history exports, while Celery Beat manages daily automated email reminders and monthly doctor activity reports.',
    problemStatement: 'Traditional web applications freeze client connections when generating massive treatment history CSV/PDF exports or dispatching batch email reminders to hundreds of patients.',
    approach: 'Decoupled heavy computation from Flask API request threads by offloading background tasks to Celery workers using Redis as the message broker, combined with Celery Beat cron scheduling for automated emails.',
    technologies: ['Vue 3', 'Vue Router', 'Vuex', 'Flask', 'Flask-SQLAlchemy', 'Celery', 'Redis', 'Bootstrap 5', 'Flask-JWT-Extended', 'xhtml2pdf'],
    links: {
      github: 'https://github.com/23f3002138/Hospital_Management_App_V2_23f3002138',
    },
    badge: 'Flask + Celery + Redis',
    accentColor: 'emerald',
    metrics: [
      { label: 'Task Queue Broker', value: 'Redis 5.0' },
      { label: 'Async Engine', value: 'Celery Beat' },
      { label: 'Frontend Stack', value: 'Vue 3 + Vuex' }
    ],
    keyFeatures: [
      {
        title: 'Asynchronous Background Jobs',
        detail: 'Heavy export tasks like patient treatment history CSV generation run asynchronously via Celery without blocking the main Web API.'
      },
      {
        title: 'Celery Beat Automated Scheduler',
        detail: 'Cron-scheduled tasks send daily email reminders at 8:00 AM for appointments and monthly activity reports on the 1st of every month to doctors.'
      },
      {
        title: 'Role-Based Security & JWT Auth',
        detail: 'Multi-tier access control separating Patient, Doctor, and Admin workflows with encrypted JWT tokens and password hashing.'
      }
    ],
    architectureFlow: [
      { title: 'Vue 3 SPA', sub: 'Reactive Frontend & Vuex State' },
      { title: 'Flask REST API', sub: 'JWT Authentication & Controllers' },
      { title: 'Database', sub: 'Flask-SQLAlchemy Models' },
      { title: 'Redis Broker', sub: 'Message Queue & Result Backend' },
      { title: 'Celery Workers', sub: 'Async CSV/PDF Exports & Email Tasks' },
      { title: 'Celery Beat', sub: 'Daily & Monthly Cron Scheduling' }
    ],
    resultsAndFindings: [
      'Eliminated request timeout latency for report generation by moving tasks to background Celery workers.',
      'Automated daily patient engagement through scheduled SMTP email notifications.'
    ]
  },
  {
    id: 'quiz-master-app',
    number: '03',
    title: 'Quiz Master Platform',
    category: 'Software Engineering',
    subtitle: 'Interactive Assessment Engine & Admin Management System',
    shortDescription: 'Full-featured quiz creation and evaluation system built with Flask, featuring admin subject/chapter management, timed quiz attempts, and user performance analytics.',
    fullOverview: 'Quiz Master is an interactive web platform engineered for educational assessment management. Administrators can organize subjects into chapters, configure customizable quizzes with timed limits and customized question banks, while users take quizzes in real-time with instant score tracking.',
    problemStatement: 'Creating a seamless assessment environment with role-based permissions, dynamic subject-chapter hierarchy, real-time score computation, and historical performance tracking.',
    approach: 'Designed a structured relational database schema utilizing Flask-SQLAlchemy, implemented Flask-Login for session security, and created dynamic assessment templates with real-time time-taken tracking.',
    technologies: ['Flask', 'Flask-SQLAlchemy', 'Flask-Login', 'Jinja2', 'SQLite', 'Werkzeug Security', 'HTML5/CSS3'],
    links: {
      github: 'https://github.com/23f3002138/quiz_master_23f3002138',
    },
    badge: 'Flask Assessment System',
    accentColor: 'violet',
    keyFeatures: [
      {
        title: 'Admin Subject & Chapter Hierarchy',
        detail: 'Hierarchical content management supporting Subjects → Chapters → Quizzes → Multiple-Choice Questions with customizable point values.'
      },
      {
        title: 'Real-Time Assessment Engine',
        detail: 'Interactive quiz submission flow with auto-scoring, time-taken metric tracking, and immediate performance feedback.'
      },
      {
        title: 'User Analytics & Score History',
        detail: 'Personalized dashboard displaying historical quiz attempts, total scores, completion timestamps, and subject progress.'
      }
    ],
    architectureFlow: [
      { title: 'Jinja2 UI', sub: 'Dynamic Frontend Templates' },
      { title: 'Flask Core', sub: 'Route Handlers & Session Auth' },
      { title: 'SQLAlchemy Models', sub: 'Users, Quizzes, Questions, Scores' },
      { title: 'SQLite DB', sub: 'Relational Data Storage' }
    ],
    resultsAndFindings: [
      'Engineered an intuitive RBAC flow separating Administrator quiz management from Student quiz attempts.',
      'Implemented accurate time-taken logging and automated real-time score calculation.'
    ]
  },
  {
    id: 'bdm-capstone',
    number: '04',
    title: 'Business Data Analytics & Decision Optimization',
    category: 'Data Analytics',
    subtitle: 'RFM Customer Segmentation, ABC Classification & Time-Series Demand Forecasting',
    shortDescription: 'Capstone business analytics project applying behavioral RFM customer segmentation, ABC inventory matrixing, SARIMA time-series forecasting, and margin scenario modeling.',
    fullOverview: 'A comprehensive Business Data Management capstone project focused on converting operational sales data into actionable strategic insights. Combines customer purchasing behavior analysis via RFM, inventory optimization through ABC demand classification, seasonal demand forecasting using SARIMA and Holt Linear Trend algorithms, and cost/pricing margin sensitivity modeling.',
    problemStatement: 'Unstructured sales data lacks customer segmentation clarity, leading to stockouts of key SKUs and inefficient marketing spend.',
    approach: 'Applied RFM (Recency, Frequency, Monetary) clustering to identify high-value customer personas, classified product SKUs via ABC revenue analysis, and modeled seasonal demand curves using statsmodels SARIMA algorithms.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Statsmodels (SARIMA)', 'Holt Linear Trend', 'Jupyter', 'Excel'],
    links: {
      github: 'https://github.com/23f3002138/BDM-Capstone-Data-Analysis',
    },
    badge: 'Data Analytics Capstone',
    accentColor: 'amber',
    privacyNote: 'Strictly sanitized data analytics framework — zero raw business data or private customer information exposed.',
    metrics: [
      { label: 'Segmentation', value: 'RFM Clusters' },
      { label: 'Inventory Model', value: 'ABC Matrix' },
      { label: 'Forecasting', value: 'SARIMA & Holt' }
    ],
    keyFeatures: [
      {
        title: 'RFM Behavioral Customer Segmentation',
        detail: 'Calculated Recency, Frequency, and Monetary metrics to segment customers into actionable purchasing behavioral tiers.'
      },
      {
        title: 'ABC Inventory Classification',
        detail: 'Classified inventory SKUs based on cumulative revenue contribution (A: top revenue drivers, B: moderate, C: long-tail).'
      },
      {
        title: 'SARIMA & Holt Time-Series Demand Forecasting',
        detail: 'Built predictive time-series models capturing seasonality patterns and trends for stock planning.'
      },
      {
        title: 'Profitability & Pricing Scenario Modeling',
        detail: 'Simulated pricing adjustments and cost variations to quantify gross margin sensitivity and optimize product profitability.'
      }
    ],
    architectureFlow: [
      { title: 'Data Cleaning', sub: 'Handling Outliers & Preprocessing' },
      { title: 'RFM Segmentation', sub: 'Customer Behavioral Clusters' },
      { title: 'ABC Matrix', sub: 'SKU Demand & Revenue Tiers' },
      { title: 'Time-Series Engine', sub: 'SARIMA & Holt Forecasting' },
      { title: 'Scenario Modeling', sub: 'Profitability Sensitivity Insights' }
    ],
    resultsAndFindings: [
      'Identified top revenue-generating customer cohorts through RFM score segmentation.',
      'Optimized inventory allocation recommendations using ABC demand matrixing and SARIMA time-series curves.'
    ]
  },
  {
    id: 'cinema-forecasting',
    number: '05',
    title: 'Cinema Audience Forecasting',
    category: 'Data Science & ML',
    subtitle: 'Kaggle Machine Learning Competition — Time-Series GBDT Visitor Prediction',
    shortDescription: 'Machine learning forecasting system predicting theater audience attendance using booking trend dynamics, temporal lag variables, rolling statistics, and LightGBM / CatBoost ensembles.',
    fullOverview: 'Developed for a Kaggle time-series forecasting competition, this project predicts cinema visitor turnout for given theaters and dates. By merging multi-source datasets (POS bookings, online visits, theater metadata, calendar features), the model captures temporal patterns and theater-level booking momentum using Gradient Boosted Decision Trees.',
    problemStatement: 'Cinema attendance fluctuates significantly based on day-of-week, theater location, release schedules, and historical booking trends, making simple statistical averages inadequate.',
    approach: 'Engineered lag features (7-day, 14-day, 28-day), rolling mean and standard deviation windows, booking velocity signals, and day-of-week indicators, followed by LightGBM and CatBoost model training.',
    technologies: ['Python', 'LightGBM', 'CatBoost', 'Random Forest', 'Pandas', 'NumPy', 'Scikit-Learn', 'Google Colab', 'Kaggle'],
    links: {
      github: 'https://github.com/23f3002138/cinema-audience-forecasting',
    },
    badge: 'Kaggle ML Competition',
    accentColor: 'rose',
    metrics: [
      { label: 'Leaderboard Score', value: '0.27 Kaggle Score' },
      { label: 'Core Algorithms', value: 'LightGBM + CatBoost' },
      { label: 'Feature Engineering', value: 'Lags + Rolling Windows' }
    ],
    keyFeatures: [
      {
        title: 'Multi-Source Dataset Merging',
        detail: 'Integrated POS booking logs, online visit records, theater identifiers, and date metadata into unified time-series tabular data.'
      },
      {
        title: 'Temporal & Rolling Lag Feature Pipeline',
        detail: 'Created rolling 7-day and 30-day visit window statistics, lag variables, day-of-week indicators, and theater historical signals.'
      },
      {
        title: 'Gradient Boosting Ensemble (LightGBM & CatBoost)',
        detail: 'Trained and tuned LightGBM and CatBoost regressors engineered to handle non-linear temporal interactions and sparse booking data.'
      }
    ],
    architectureFlow: [
      { title: 'Raw Ingestion', sub: 'POS Bookings & Online Visits CSVs' },
      { title: 'Feature Pipeline', sub: 'Lag Variables & Rolling Statistics' },
      { title: 'Model Training', sub: 'LightGBM & CatBoost Regressors' },
      { title: 'Validation', sub: 'Time-Series Cross-Validation' },
      { title: 'Leaderboard Score', sub: '0.27 Competition Evaluation' }
    ],
    resultsAndFindings: [
      'Achieved a verified Kaggle leaderboard score of 0.27 using gradient boosting ensemble modeling.',
      'Demonstrated that incorporating 7-day rolling statistics and booking momentum significantly reduced prediction RMSE.'
    ]
  },
  {
    id: 'rehax-xr',
    number: '06',
    title: 'RehaX — Interactive XR Rehabilitation Technology',
    category: 'Interactive / XR',
    subtitle: 'Internship Project · Immersive Medical Rehabilitation System',
    shortDescription: 'Interactive medical rehabilitation technology platform combining real-time motion tracking, bio-mechanical feedback loops, and interactive therapeutic exercise environments.',
    fullOverview: 'RehaX is an internship project exploring interactive XR technology designed for physical therapy and medical rehabilitation. The system integrates intuitive physical movement tracking, bio-mechanical feedback visualization, and interactive exercises to enhance patient engagement and recovery tracking.',
    problemStatement: 'Traditional physical rehabilitation exercises often suffer from low patient adherence due to repetitive routines and a lack of real-time movement accuracy feedback.',
    approach: 'Engineered an interactive 3D virtual environment with responsive motion tracking algorithms that guide patients through therapeutic exercise regimens while capturing bio-mechanical trajectory data.',
    technologies: ['XR Technology', 'Interactive 3D', 'Motion Tracking', 'Bio-mechanics', 'Real-Time Physics'],
    links: {
      isPrivate: true,
      privateLabel: 'Private Project · Internship Project',
    },
    badge: 'Internship Project · Private',
    accentColor: 'indigo',
    privacyNote: 'Private repository — source code and internal repository details remain strictly confidential.',
    keyFeatures: [
      {
        title: 'Real-Time Motion & Trajectory Tracking',
        detail: 'Precision body movement tracking tailored for physical therapy joint angle monitoring.'
      },
      {
        title: 'Bio-Feedback Visual Cues',
        detail: 'Dynamic visual indicators guiding patients through target movement ranges with real-time accuracy scoring.'
      },
      {
        title: 'Interactive Therapy Environment',
        detail: 'Gamified physical exercise routines engineered to maximize patient adherence and motivation.'
      }
    ],
    architectureFlow: [
      { title: 'Motion Capture', sub: 'Sensor & Pose Signal Input' },
      { title: 'Bio-Kinematic Engine', sub: 'Real-time Angle & Trajectory Math' },
      { title: 'XR Interactive UI', sub: 'Immersive 3D Visual Feedback' },
      { title: 'Progress Telemetry', sub: 'Session Compliance Metrics' }
    ],
    resultsAndFindings: [
      'Developed responsive motion tracking routines tailored for physical rehabilitation exercises.',
      'Created intuitive bio-feedback HUD elements for real-time trajectory guidance.'
    ]
  }
];
