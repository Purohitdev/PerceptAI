import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AnimatedNewsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <motion.div
          className="bg-gray-900 p-8 rounded-lg border border-gray-800"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-300">
            Get Valuable Insights!
          </h2>
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative mb-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full px-3 py-2 bg-gray-800 text-gray-300 placeholder-gray-500 border-b border-gray-700 focus:outline-none focus:border-gray-500 transition-colors duration-300"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium py-2 px-4 rounded flex items-center justify-center group transition-colors duration-300"
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-2">Subscribe</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center text-gray-300"
              >
                <p className="text-xl font-semibold mb-2">You're subscribed</p>
                <p className="text-gray-500">We'll keep you updated on PerceptAI</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.p
          className="mt-4 text-center text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          PerceptAI — Coming soon
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AnimatedNewsletter;