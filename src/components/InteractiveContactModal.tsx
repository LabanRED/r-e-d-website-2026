import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Star } from 'lucide-react';

interface InteractiveContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InteractiveContactModal({ isOpen, onClose }: InteractiveContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Frontend Engineering');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsLoading(true);
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setProjectType('Frontend Engineering');
    setMessage('');
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-neutral-100 bg-white p-8 text-neutral-900 shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 rounded-full p-1.5 text-neutral-400 hover:bg-neutral-50 hover:text-neutral-800 transition-colors duration-200 font-poppins font-medium lowercase"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-[#1ca3c4] mb-3 select-none">
                    <Star className="h-3 w-3 fill-[#1ca3c4] text-[#1ca3c4]" />
                    <span>R-E-D LEAD DESK</span>
                  </div>
                  <h3 className="font-sans text-2xl font-semibold tracking-tight text-neutral-900">Get in touch with us</h3>
                  <p className="font-sans text-sm text-neutral-500 mt-1.5">
                    Submit your details and we will formulate a tailor-made digital marketing roadmap for your brand.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold tracking-wider text-neutral-500 uppercase font-mono">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Jane Doe"
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-[#1ca3c4] focus:outline-none focus:ring-1 focus:ring-[#1ca3c4] transition-colors duration-200"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold tracking-wider text-neutral-500 uppercase font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. jane@company.com"
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-[#1ca3c4] focus:outline-none focus:ring-1 focus:ring-[#1ca3c4] transition-colors duration-200"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold tracking-wider text-neutral-500 uppercase font-mono">
                      Core Objective
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 focus:border-[#1ca3c4] focus:outline-none focus:ring-1 focus:ring-[#1ca3c4] transition-colors duration-200"
                    >
                      <option>Lead Generation & Funnels</option>
                      <option>Social Media Marketing</option>
                      <option>Google Advertising</option>
                      <option>Website Development & Maintenance</option>
                      <option>Full Scale Marketing Support</option>
                      <option>PostX Platform</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold tracking-wider text-neutral-500 uppercase font-mono">
                      Brief Description
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your brand or requirements..."
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:border-[#1ca3c4] focus:outline-none focus:ring-1 focus:ring-[#1ca3c4] transition-colors duration-200 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-black hover:bg-[#1ca3c4] py-3.5 text-sm text-white shadow-lg shadow-[#1ca3c4]/10 active:scale-[0.98] transition-all duration-300 disabled:opacity-50 font-poppins font-medium lowercase"
                >
                  {isLoading ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <span>Submit Details</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-8 space-y-6"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1ca3c4]/10 text-[#1ca3c4] border border-[#1ca3c4]/20">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-sans text-2xl font-semibold tracking-tight text-neutral-900">Details Received!</h3>
                  <p className="font-sans text-sm text-neutral-500 max-w-sm leading-relaxed">
                    Thank you <span className="font-semibold text-neutral-900">{name}</span>. Your enquiry for <span className="font-semibold text-neutral-900">{projectType}</span> has been received. Our team will follow up at <span className="font-semibold text-neutral-900">{email}</span>.
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="rounded-full bg-black hover:bg-[#1ca3c4] px-8 py-3 text-sm text-white transition-all duration-300 shadow-md shadow-[#1ca3c4]/10 font-poppins font-medium lowercase"
                >
                  Return to Site
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
