export interface Achievement {
  id: string;
  title: string;
  category: 'Academic' | 'Kaggle' | 'Competitions' | 'Certifications' | 'Projects' | 'Milestones' | 'Software Engineering';
  date: string;
  organization: string;
  description: string;
  highlightMetric?: string;
  badgeText?: string;
  iconName?: 'award' | 'trophy' | 'book' | 'code' | 'star';
}

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'iit-madras-bs',
    title: 'BS Degree in Data Science & Applications',
    category: 'Academic',
    date: '2023 – Present',
    organization: 'Indian Institute of Technology Madras (IIT Madras)',
    description: 'Pursuing a specialized degree combining data science, machine learning algorithms, computational statistics, and software engineering.',
    highlightMetric: 'IIT Madras',
    badgeText: 'Academic Milestone',
    iconName: 'book'
  },
  {
    id: 'kaggle-cinema-forecasting',
    title: 'Kaggle Leaderboard Score 0.27 — Cinema Audience Forecasting',
    category: 'Kaggle',
    date: '2025',
    organization: 'Kaggle Competition',
    description: 'Achieved an evaluation score of 0.27 on Kaggle using GBDT ensembles (LightGBM & CatBoost) with 7-day rolling statistics and lag feature engineering.',
    highlightMetric: 'Score: 0.27',
    badgeText: 'Top Competition Result',
    iconName: 'trophy'
  },
  {
    id: 'bdm-capstone-honors',
    title: 'Business Data Management Capstone Project',
    category: 'Projects',
    date: '2025',
    organization: 'Academic Capstone',
    description: 'Developed an end-to-end data analytics and forecasting framework integrating RFM customer segmentation, ABC inventory classification, and SARIMA time-series models.',
    highlightMetric: 'Capstone Project',
    badgeText: 'Data Analytics',
    iconName: 'award'
  },
  {
    id: 'flask-celery-hms',
    title: 'Asynchronous Hospital Management Architecture',
    category: 'Software Engineering',
    date: '2025',
    organization: 'Software Systems Architecture',
    description: 'Designed and deployed an enterprise Vue 3 + Flask architecture powered by Celery worker pools and Redis broker for asynchronous background processing.',
    highlightMetric: 'Celery + Redis',
    badgeText: 'Systems Architecture',
    iconName: 'code'
  }
];
