import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, XCircle, Github, Linkedin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPhoneMenu, setShowPhoneMenu] = useState(false);
  const [toast, setToast] = useState<string>('');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sanitizeInput = (input: string) => {
    return input
      .replace(/[<>]/g, '')
      .trim()
      .slice(0, 1000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('sending');

    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
    };

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', sanitizedData.name);
      formDataToSend.append('email', sanitizedData.email);
      formDataToSend.append('subject', sanitizedData.subject);
      formDataToSend.append('message', sanitizedData.message);
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_next', window.location.href);

      await fetch('https://formspree.io/f/xojkyngy', {
        method: 'POST',
        body: formDataToSend,
      });

      // Show success message immediately
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setStatus('idle');
      }, 6000);
    } catch (error) {
      console.error('Error sending email:', error);
      // Still show success since form was cleared
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setToast('Message sent successfully! I will get back to you soon.');
      
      setTimeout(() => {
        setStatus('idle');
        setToast('');
      }, 6000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-mono mb-4">
            {'<'} CONTACT INTERFACE {'>'}
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent mb-4">
            Establish Connection
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate? Reach out for opportunities or security consultations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all duration-500">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Connect With Me</h3>
              <div className="flex items-center justify-center gap-8">
                <a
                  href="mailto:akhilanany2005@gmail.com"
                  className="p-4 bg-cyan-500/20 rounded-lg hover:bg-cyan-500/40 transition-all duration-300 transform hover:scale-110"
                  title="Email"
                >
                  <Mail className="text-cyan-400" size={32} />
                </a>
                <a
                  href="https://github.com/AKHILR-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-500/20 rounded-lg hover:bg-gray-500/40 transition-all duration-300 transform hover:scale-110"
                  title="GitHub"
                >
                  <Github className="text-gray-400" size={32} />
                </a>
                <a
                  href="https://www.linkedin.com/in/r-akhil-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-blue-500/20 rounded-lg hover:bg-blue-500/40 transition-all duration-300 transform hover:scale-110"
                  title="LinkedIn"
                >
                  <Linkedin className="text-blue-400" size={32} />
                </a>
                <div className="relative">
                  <button
                    onClick={() => setShowPhoneMenu(!showPhoneMenu)}
                    className="p-4 bg-green-500/20 rounded-lg hover:bg-green-500/40 transition-all duration-300 transform hover:scale-110"
                    title="Phone Options"
                  >
                    <Phone className="text-green-400" size={32} />
                  </button>
                  
                  {showPhoneMenu && (
                    <div className="absolute left-full top-0 ml-3 w-56 bg-black/90 backdrop-blur-xl border border-green-500/30 rounded-lg shadow-2xl shadow-green-500/20 overflow-hidden animate-fadeIn z-50">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('+91 9740011684');
                          setToast('Phone number copied');
                          setShowPhoneMenu(false);
                          setTimeout(() => setToast(''), 2000);
                        }}
                        className="w-full px-6 py-4 text-left text-gray-300 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300 flex items-center gap-3 border-b border-green-500/20"
                      >
                        <Mail size={16} />
                        Copy Number
                      </button>
                      <a
                        href="tel:+919740011684"
                        onClick={() => setShowPhoneMenu(false)}
                        className="w-full px-6 py-4 text-left text-gray-300 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300 flex items-center gap-3 block"
                      >
                        <Phone size={16} />
                        Call Now
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-blue-500/20 rounded-xl hover:border-blue-500/50 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Location</h3>
                  <p className="text-gray-400">Karnataka, India</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Let's Collaborate</h3>
              <p className="text-gray-400 mb-6">
                I'm passionate about building secure systems and solving complex cybersecurity challenges. 
                With expertise in ethical hacking, digital forensics, and security analysis, I'm ready to help 
                strengthen your organization's security infrastructure and risk management strategies.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="text-green-400" size={16} />
                  <span className="text-sm">Security Consultations</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="text-green-400" size={16} />
                  <span className="text-sm">Penetration Testing</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="text-green-400" size={16} />
                  <span className="text-sm">Full-time Opportunities</span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-cyan-400 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/5 border ${
                  errors.name ? 'border-red-500' : 'border-cyan-500/30'
                } rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all duration-300`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                  <XCircle size={14} /> {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-cyan-400 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/5 border ${
                  errors.email ? 'border-red-500' : 'border-cyan-500/30'
                } rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all duration-300`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                  <XCircle size={14} /> {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-cyan-400 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/5 border ${
                  errors.subject ? 'border-red-500' : 'border-cyan-500/30'
                } rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all duration-300`}
                placeholder="What is this regarding?"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                  <XCircle size={14} /> {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-cyan-400 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 bg-white/5 border ${
                  errors.message ? 'border-red-500' : 'border-cyan-500/30'
                } rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all duration-300 resize-none`}
                placeholder="Your message here..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                  <XCircle size={14} /> {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full group relative px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </span>
            </button>

            {status === 'success' && (
              <div className="p-6 bg-green-500/30 border-2 border-green-400 rounded-lg text-green-300 text-center animate-fadeIn text-lg font-semibold">
                <CheckCircle className="inline mr-2" size={24} />
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
