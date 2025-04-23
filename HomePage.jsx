
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', number: '', email: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && /\S+@\S+\.\S+/.test(formData.email)) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <header className="bg-white shadow p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Trivertise</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-2 px-4 space-y-2">
            <a href="#about" className="block hover:text-blue-600">About</a>
            <a href="#services" className="block hover:text-blue-600">Services</a>
            <a href="#contact" className="block hover:text-blue-600">Contact</a>
          </div>
        )}
      </header>

      <section className="text-center py-24 px-6 bg-white shadow-md rounded-xl mx-4 mt-10">
        <h2 className="text-4xl font-bold mb-4 text-blue-700">Bring Your Brand to Life</h2>
        <p className="text-lg text-gray-600 mb-6">
          We help your business stand out with cutting-edge digital marketing and branding strategies.
        </p>
        <a
          href="#services"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Explore Services
        </a>
      </section>

      <section id="about" className="py-20 bg-gray-50 text-center px-6">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">About Trivertise</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At Trivertise, we believe creativity meets strategy. Our team crafts personalized marketing solutions that connect you with your audience and drive results.
        </p>
      </section>

      <section id="services" className="py-20 px-6 bg-white text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-10">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Video Editing & Content",
              desc: "We edit raw videos for campaigns, reels, ads and help you craft compelling video content that engages.",
            },
            {
              title: "Design & Graphics",
              desc: "We design eye-catching static creatives, infographics, and campaign visuals that drive impact.",
            },
            {
              title: "Content Creation",
              desc: "We write scripts, captions, and content tailored for digital platforms to boost brand presence.",
            },
            {
              title: "SMO & Digital Marketing",
              desc: "We manage and optimize your social media presence to build audience and engagement.",
            },
            {
              title: "Campaign Management",
              desc: "We run, monitor, and optimize your campaigns to meet your KPIs and business goals.",
            },
            {
              title: "Programmatic Solutions (PMP & PG Deals)",
              desc: "Leverage premium inventory with data-driven programmatic strategies including PMP and PG deals to maximize campaign performance.",
            },
            {
              title: "Full Funnel Strategy",
              desc: "We offer end-to-end execution from content to results, so you can focus on growing your brand.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-blue-700 mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-100 px-6 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
        <p className="text-gray-600 mb-8">Ready to elevate your brand? Let’s start a conversation.</p>
        <a
          href="mailto:advertise@trivertise.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
        <p className="mt-6 text-gray-600">Email us directly at <strong>advertise@trivertise.com</strong></p>

        <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto bg-white p-6 rounded-xl shadow">
          <div className="mb-4 text-left">
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 border rounded-md" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-4 text-left">
            <label className="block text-sm font-medium mb-1" htmlFor="number">Phone Number</label>
            <input type="tel" id="number" className="w-full px-4 py-2 border rounded-md" value={formData.number} onChange={handleChange} />
          </div>
          <div className="mb-4 text-left">
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 border rounded-md" value={formData.email} onChange={handleChange} required />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Submit
          </button>
        </form>

        {formSubmitted && (
          <p className="mt-4 text-green-600">Thanks for submitting! We'll be in touch soon.</p>
        )}
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Trivertise. All rights reserved.
      </footer>
    </div>
  );
}
