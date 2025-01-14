import { Metadata } from 'next';

// Add metadata for SEO
export const metadata: Metadata = {
  title: 'Contact Us - Vigyan Darshan',
  description: 'Get in touch with Vigyan Darshan. We\'d love to hear from you and answer any questions you may have.',
}

export default function Contactus() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: "url('/bg-pattern.png')",
          backgroundSize: '200px 200px'
        }}
      />
      <div className="container mx-auto px-4 py-24 sm:py-32 relative">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-8 sm:mb-12">
          Contact Us
        </h1>
        <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
          Have questions? We&apos;d love to hear from you and help you explore the fascinating world of science, 
          philosophy, and spirituality together!
        </p>

        <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition duration-300">
          <form action="#" method="POST" className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-lg text-white font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-gray-700/70"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg text-white font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-gray-700/70"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-lg text-white font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-gray-700/70"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center py-4 px-6 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg font-semibold"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
