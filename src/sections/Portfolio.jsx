import React from 'react';

// Array of project objects to map into cards
const PROJECTS = [
  {
    title: 'Crypto Volatility Forecasting (Coming Soon!)',
    image: '/Cryptocurrency Forecasting and Analysis.png',
    description: 'Forecasting Bitcoin and Ethereum price movements and modeling their market volatility using advanced time series techniques. This project combines traditional statistical models (ARIMA, GARCH/EGARCH) and deep learning (LSTM) to predict trends and risk. It includes a real-time data pipeline, a Flask-based prediction API, and an interactive dashboard built with Plotly Dash.',
    tech: ['Python', 'Flask', 'React', 'LSTM Models', 'LSTM', 'ARIMA', 'Time Series Forecasting', 'GARCH' , 'Dash' ],
    github: null,
    demo: null,
    status: 'coming-soon'
  },
  {
    title: 'GlanceProbe',
    image: '/GlanceProbe.png',
    description: 'A UX research project investigating how older and younger adults interpret AI-generated glanceable smartwatch health visualizations. Focused on LLM prompting, visualization benchmarking, and user trust evaluation through metrics like clarity, aesthetics, and recall. Contributed scenario design, question development, and visualization generation.',
    tech: ['Prompt Engineering', 'UX Research', 'Data Visualization', 'Python', 'Figma', 'OpenAI API', 'User Testing', 'Human-Computer Interaction (HCI)'],
    demo: null,
    status: 'coming-soon'
  },
  {
    title: 'Personal Portfolio',
    image: '/Port.png',
    description: 'A sleek, responsive portfolio built from scratch using React and Tailwind CSS, designed to showcase my projects, technical skills, and background. Features include dark/light mode, smooth scroll animations, and custom section transitions. Inspired by modern developer aesthetics, this site reflects my creativity, attention to detail, and ability to turn ideas into clean, interactive web experiences.',
    tech: ['React', 'Tailwind CSS', 'HTML', 'JavaScript', 'Responsive Design', 'Frontend Development', 'UI/UX'],
    status: 'completed'
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="max-w-5xl mx-auto px-4 py-16">
      {/* Section title */}
      <h2 className="text-2xl font-bold mb-8 text-center text-pink-400">Portfolio</h2>

      {/* Grid layout for project cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-2 duration-300 glow-card"
            style={{ animationDelay: `${i * 100}ms` }} // Animate delay for staggered appearance
          >
            {/* Image placeholder / project preview */}
            <div className="h-40 bg-gray-200 dark:bg-gray-800 flex justify-center items-center overflow-hidden">
              {project.image ? (
                <img 
                  src={encodeURI(project.image)}
                  alt={project.title}
                  className="object-cover h-full w-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div className={`${project.image ? 'hidden' : 'flex'} items-center justify-center h-full w-full text-gray-500 dark:text-gray-400`}>
                <span className="text-2xl">📱</span>
              </div>
            </div>

            {/* Project content section */}
            <div className="p-6 flex-1 flex flex-col">
              {/* Title with status badge */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg">
                  {project.title === 'Crypto Volatility Forecasting (Coming Soon!)' ? (
                    'Crypto Volatility Forecasting'
                  ) : (
                    project.title
                  )}
                </h3>
                {project.status === 'coming-soon' && (
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-md text-xs font-medium">
                    Coming Soon
                  </span>
                )}
              </div>

              {/* Description text */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
                {project.description || '[No description yet]'}
              </p>

              {/* Technology tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="inline-block px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-md text-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub and Demo Links */}
              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-pink-500 transition-colors underline flex items-center gap-1"
                  >
                    <i className="fab fa-github"></i>
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-pink-500 transition-colors underline flex items-center gap-1"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
