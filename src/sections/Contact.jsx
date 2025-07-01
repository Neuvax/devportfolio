import React from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Let's Get In Touch" sub="Contact Me" />

        <div className="mt-16">
          <div className="grid-12-cols items-stretch">
            {/* Contact Form - Left Side */}
            <div className="xl:col-span-6 col-span-1">
              <div className="card-border rounded-xl p-8 h-full">
                <h3 className="text-white text-2xl font-semibold mb-6">
                  Ready to work together?
                </h3>
                <p className="text-white-50 text-lg leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities and
                  collaborate on innovative projects. Whether you have a
                  specific project in mind or just want to connect, I'd love to
                  hear from you.
                </p>

                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-black-300 border border-gray-700 rounded-lg text-white placeholder-white-50 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-black-300 border border-gray-700 rounded-lg text-white placeholder-white-50 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-black-300 border border-gray-700 rounded-lg text-white placeholder-white-50 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Experience - Right Side */}
            <div className="xl:col-span-6 col-span-1 h-full bg-[#cd7c2e] rounded-xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
