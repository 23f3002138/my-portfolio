import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yaswanth Vaddi | Mechanical Engineering & Data Science Portfolio',
  description: 'Personal portfolio of Yaswanth Vaddi showcasing Mechanical Engineering, Data Science (IIT Madras BS), Celery & Redis Flask web applications, Kaggle Machine Learning competitions, and RFM/ABC Data Analytics.',
  keywords: [
    'Yaswanth Vaddi',
    'Portfolio',
    'Mechanical Engineering',
    'Data Science',
    'IIT Madras',
    'Flask Celery Redis',
    'Vue 3',
    'Kaggle ML',
    'RFM Customer Segmentation',
    'SARIMA Demand Forecasting'
  ],
  authors: [{ name: 'Yaswanth Vaddi' }],
  openGraph: {
    title: 'Yaswanth Vaddi | Mechanical Engineering & Data Science Portfolio',
    description: 'Engineering robust software architecture, GBDT machine learning, and time-series data analytics.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} scroll-smooth dark`}>
      <body className="bg-[#07090e] text-zinc-100 font-sans antialiased min-h-screen selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
