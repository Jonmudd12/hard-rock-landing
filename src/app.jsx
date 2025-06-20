const { useState } = React;

// Header Component
const Header = () => (
  <header className="bg-red-600 text-white py-4">
    <div className="container mx-auto flex justify-between items-center px-4">
      <h1 className="text-2xl font-bold">Hard Rock Exacavtion, Septic & Landscape LLC</h1>
      <nav>
        <a href="#services" className="mx-2 hover:underline">Services</a>
        <a href="#testimonials" className="mx-2 hover:underline">Testimonials</a>
        <a href="#contact" className="mx-2 hover:underline">Contact</a>
      </nav>
    </div>
  </header>
);

// Hero Component
const Hero = () => (
  <section className="bg-red-100 py-20 text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-4">Septic Pumping in Mid-Missouri</h2>
      <p className="text-lg mb-6">Hard Rock Excavation, Septic & Landscape serves Mid-Missouri. Schedule now with eco-friendly septic solutions.</p>
      <a href="#contact" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700">Schedule Now</a>
    </div>
  </section>
);

// Services Component
const Services = () => (
  <section id="services" className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Septic Pumping</h3>
          <p>Regular pumping to keep your septic system running smoothly in Mid-Missouri.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Inspections</h3>
          <p>Thorough inspections for home sales or maintenance in Mid-Missouri.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Emergency Services</h3>
          <p>24/7 response for septic backups in Mid-Missouri.</p>
        </div>
      </div>
    </div>
  </section>
);

// Testimonials Component
const Testimonials = () => (
  <section id="testimonials" className="bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <p className="italic mb-4">"Hard Rock Excavation, Septic & Landscape saved the day with fast service in Jefferson City!"</p>
          <p className="font-semibold">– Jane D., Homeowner</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <p className="italic mb-4">"Professional and eco-friendly septic services at the Lake of the Ozarks."</p>
          <p className="font-semibold">– Mark S., Property Manager</p>
        </div>
      </div>
    </div>
  </section>
);

// Contact Component with Netlify Forms
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="max-w-lg mx-auto">
          <form name="contact" method="POST" data-netlify="true" className="space-y-4">
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-red-600 text-white py-6">
    <div className="container mx-auto px-4 text-center">
      <p>© 2025 Hard Rock Enterprises, Inc. All rights reserved.</p>
      <p className="mt-2">Phone: (660) 888-2306 | Email: info@hresl.com</p>
      <div className="mt-2">
        <a href="#" className="mx-2 hover:underline">Facebook</a>
        <a href="#" className="mx-2 hover:underline">Twitter</a>
        <a href="#" className="mx-2 hover:underline">Instagram</a>
      </div>
    </div>
  </footer>
);

// Schema Markup
const Schema = () => (
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Hard Rock Excavation, Septic & Landscape LLC.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "27174 Hard Rock Rd",
        "addressLocality": "Barnett",
        "addressRegion": "Missouri",
        "postalCode": "65011"
      },
      "telephone": "(660) 888-2306",
      "url": "https://hresl.com"
    })}
  </script>
);

// Main App Component
const App = () => (
  <div>
    <Header />
    <Hero />
    <Services />
    <Testimonials />
    <Contact />
    <Footer />
    <Schema />
  </div>
);

// Render the App
ReactDOM.render(<App />, document.getElementById('root'));
