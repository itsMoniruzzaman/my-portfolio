import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    // Replace these with your actual EmailJS credentials
    const serviceId = "service_26v2uva";
    const templateId = "template_edzzrml";
    const userId = "V0-1c7d-CNKFptmzn";

    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      () => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          requirements: "",
        });
      },
      () => {
        setIsSubmitting(false);
        setIsError(true);
      }
    );
  };

  return (
    <div className="my-2 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-red-600 mb-4">
          Contact Me
        </h2>
        <p className="text-lg text-gray-600">
          Have a project in mind? Let me know, and I'll get back to you as soon
          as possible.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-[#f9f9f9] p-8 rounded-lg shadow-md">
        {isSuccess && (
          <div className="bg-green-500 text-white text-center py-2 mb-4 rounded-md">
            Message sent successfully!
          </div>
        )}
        {isError && (
          <div className="bg-red-500 text-white text-center py-2 mb-4 rounded-md">
            Oops, something went wrong. Please try again.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900"
            placeholder="Subject"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="requirements"
            className="block text-gray-700 mb-2">
            Requirements / Message
          </label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900"
            placeholder="Tell me about your project or requirements"
            required></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${
              isSubmitting ? "bg-gray-400" : "bg-red-600"
            } text-white py-3 px-6 rounded-lg font-semibold`}>
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
