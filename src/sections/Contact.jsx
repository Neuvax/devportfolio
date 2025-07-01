import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    // Validación básica
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      setIsLoading(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result);
      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. I'll get back to you soon!",
      });

      // Limpiar formulario después del envío exitoso
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again or contact me directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };
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

                <form
                  className="space-y-6"
                  ref={formRef}
                  onSubmit={handleSubmit}
                >
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
                      value={formData.name}
                      onChange={handleChange}
                      required
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
                      value={formData.email}
                      onChange={handleChange}
                      required
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
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black-300 border border-gray-700 rounded-lg text-white placeholder-white-50 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  {/* Status Message */}
                  {status.message && (
                    <div
                      className={`p-4 rounded-lg text-sm ${
                        status.type === "success"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-red-500/20 text-red-400 border border-red-500/30"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Experience - Right Side */}
            <div className="xl:col-span-6 col-span-1 h-full">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
