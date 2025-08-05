// Import React since we're using JSX to define a component
import React from 'react';

// Define and export the functional component named About
export default function About() {
  return (
    // This is the outer <section> element that wraps the whole "About Me" content.
    // It has an ID for navigation linking and Tailwind classes for layout:
    // - max-w-3xl: max width of the section
    // - mx-auto: centers the section horizontally
    // - px-4: horizontal padding
    // - py-16: vertical padding
    <section id="about" className="max-w-3xl mx-auto px-4 py-16">
      
      {/* This is the inner content box (card) that contains your text.
          It has:
          - bg-white: white background for light mode
          - dark:bg-gray-900: dark background for dark mode
          - rounded-xl: large rounded corners
          - shadow-lg: large shadow effect
          - p-8: padding on all sides
          - transition-colors: smooth transition when theme changes
          - glow-card: your custom glow effect class */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transition-colors glow-card">
        
        {/* Header for the About section.
            - text-2xl: font size
            - font-bold: bold weight
            - mb-4: margin-bottom for spacing */}
        <h2 className="text-2xl font-bold mb-4">About Me</h2>

        {/* First paragraph: academic background and goals.
            - mb-4: margin-bottom to separate from next paragraph */}
        <p className="mb-4">
          Hi, I'm Nish Methuku — a sophomore Computer Science major with a Biology minor at UMass Amherst.
          I'm fascinated by the intersection of technology and healthcare, and I plan to use both fields to create meaningful impact.
        </p>

        {/* Second paragraph: personality traits and mindset */}
        <p className="mb-4">
          I’m curious, self-aware, and driven by a desire for freedom, authenticity, and present-moment living.
          I’m constantly learning and adapting, whether that’s through research, leadership, or just exploring what excites me.
        </p>

        {/* Third paragraph: hobbies and life philosophy */}
        <p className="mb-4">
          Outside of academics, I love traveling, creating, and connecting with people who inspire me.
          I try not to take life too seriously and believe in going with the flow.
        </p>

      </div>
    </section>
  );
}
