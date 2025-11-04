import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const webhookUrl = 'https://hook.eu2.make.com/4vai330dej3wg6gmt1xhudepea3dg2yi';

            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    timestamp: new Date().toISOString(),
                }),
            });

            if (response.ok) {
                alert('Thank you for your message! We\'ll get back to you soon.');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                alert('Something went wrong. Please try again or email us directly at info@marbansolutions.com');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong. Please try again or email us directly at info@marbansolutions.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                    className="w-full bg-gray-100 dark:bg-brand-light border border-gray-300 dark:border-gray-600 rounded-md py-3 px-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                />
            </div>
            <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    required
                    className="w-full bg-gray-100 dark:bg-brand-light border border-gray-300 dark:border-gray-600 rounded-md py-3 px-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                />
            </div>
            <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full bg-gray-100 dark:bg-brand-light border border-gray-300 dark:border-gray-600 rounded-md py-3 px-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-accent text-white font-bold py-3 px-6 text-lg uppercase hover:bg-red-800 transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
};


const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="bg-white dark:bg-brand-primary py-24 md:py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                        Let's Talk
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-brand-secondary">
                        Tell us about your business and we'll show you how we can help
                    </p>
                </div>
                <div className="mt-12 max-w-xl mx-auto">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;