import React from 'react';

// Skill categories with icons
const SKILLS_DATA = {
  Languages: [
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'HTML/CSS', icon: '🌐' }
  ],
  Libraries: [
    { name: 'Pandas', icon: '🐼' },
    { name: 'NumPy', icon: '🔢' },
    { name: 'Matplotlib', icon: '📊' },
    { name: 'Sklearn', icon: '🤖' },
    { name: 'PyTorch', icon: '🔥' }
  ],
  Frameworks: [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Flask', icon: '🍶' },
    { name: 'JUnit', icon: '🧪' }
  ],
  Tools: [
    { name: 'GitHub', icon: '💻' },
    { name: 'VS Code', icon: '🧠' },
    { name: 'Jupyter Notebook', icon: '📓' },
    { name: 'Google Colab', icon: '🧪' },
    { name: 'Postman', icon: '📬' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Notion', icon: '🗂️' }
  ],
  Concepts: [
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'Data Visualization', icon: '📊' },
    { name: 'REST APIs', icon: '🌐' },
    { name: 'Research Methods', icon: '🔬' },
    { name: 'Time Series Forecasting', icon: '📈' },
    { name: 'Model Evaluation', icon: '📏' }
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center text-pink-600 dark:text-pink-400">Technical Skills</h2>
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 transition-colors flex flex-col gap-8">
        {Object.entries(SKILLS_DATA).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4 text-pink-500 dark:text-pink-400 glow-text">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <div
                  key={skill.name}
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 text-md font-medium text-gray-800 dark:text-gray-200 flex items-center gap-2 tech-tag"
                >
                  <span className="text-lg">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
