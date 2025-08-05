import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://formspree.io/f/xzzgalpp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  return (
    <section id="contact" className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8 text-center text-pink-400">Contact</h2>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className={`px-4 py-2 rounded border transition ${
            errors.name 
              ? 'border-red-500 focus:ring-red-400' 
              : 'border-gray-300 dark:border-gray-700 focus:ring-pink-400'
          } bg-transparent focus:outline-none focus:ring-2`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className={`px-4 py-2 rounded border transition ${
            errors.email 
              ? 'border-red-500 focus:ring-red-400' 
              : 'border-gray-300 dark:border-gray-700 focus:ring-pink-400'
          } bg-transparent focus:outline-none focus:ring-2`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Your Message"
          required
          className={`px-4 py-2 rounded border transition ${
            errors.message 
              ? 'border-red-500 focus:ring-red-400' 
              : 'border-gray-300 dark:border-gray-700 focus:ring-pink-400'
          } bg-transparent focus:outline-none focus:ring-2`}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>

        {submitStatus === 'success' && (
          <p className="text-green-600 dark:text-green-400 text-center mt-2">
            Message sent successfully! I'll get back to you soon.
          </p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-600 dark:text-red-400 text-center mt-2">
            Failed to send message. Please try again or email me directly.
          </p>
        )}
      </form>

      <div className="flex justify-center gap-6 mt-8">
        <a
          href="https://www.linkedin.com/in/nish-methuku"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-500 hover:text-pink-500 transition-colors text-2xl"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        <a
          href="https://github.com/nishmethuku"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-500 hover:text-pink-500 transition-colors text-2xl"
        >
          <i className="fab fa-github"></i>
        </a>

        <a
          href="mailto:srinishmet@gmail.com"
          aria-label="Email"
          className="text-gray-500 hover:text-pink-500 transition-colors text-2xl"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
}
