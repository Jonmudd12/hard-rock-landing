const { useState } = React;

// Header Component
const Header = () => (
  <header className="bg-red-600 text-white py-4">
    <div className="container mx-auto flex justify-between items-center px-4">
      <h1 className="text-2xl font-bold">Hard Rock Excavation, Septic and Landscape LLC</h1>
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
      <h2 className="text-4xl font-bold mb-4">Comprehensive Outdoor services in Mid-Missouri</h2>
      <p className="text-lg mb-6">Hard Rock Excavation, Septic and Landscape LLC serves Mid-Missouri with all outdoor solutions.</p>
      <a href="#contact" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700">Schedule Now</a>
    </div>
  </section>
);

// Services Component
const Services = () => (
  <section id="services" className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Excavation */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <img src="images/placeholder-excavation.jpg" alt="Excavation Service Placeholder" className="w-full h-48 object-cover mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Excavation</h3>
          <ul className="list-disc pl-5 text-left">
            <li>Land Clearing</li>
            <li>Site Grading</li>
            <li>Driveway Grading</li>
            <li>Debris Haul-Off</li>
          </ul>
        </div>
        {/* Septic Services */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <img src="images/placeholder-septic.jpg" alt="Septic Service Placeholder" className="w-full h-48 object-cover mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Septic Services</h3>
          <ul className="list-disc pl-5 text-left">
            <li>Maintenance</li>
            <li>New Installations</li>
            <li>Repairs</li>
            <li>Inspections</li>
          </ul>
        </div>
        {/* Mowing and Landscaping */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <img src="images/placeholder-landscaping.jpg" alt="Landscaping Service Placeholder" className="w-full h-48 object-cover mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Landscaping</h3>
          <ul className="list-disc pl-5 text-left">
            <li>Lawn Maintenance (Mowing, Trimming, Edging, Blowing)</li>
            <li>Tree Pruning and Removal</li>
            <li>Aeration and Overseeding</li>
            <li>Chemical Applications</li>
            <li>Erosion Control</li>
            <li>Debris Clean-Up</li>
          </ul>
        </div>
        {/* Delivery */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <img src="images/placeholder-delivery.jpg" alt="Delivery Service Placeholder" className="w-full h-48 object-cover mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Delivery</h3>
          <ul className="list-disc pl-5 text-left">
            <li>Mulch</li>
            <li>Dirt</li>
            <li>Aggregate</li>
            <li>Plants</li>
            <li>Trees</li>
            <li>Yard Stone</li>
            <li>Yard Fixtures</li>
          </ul>
        </div>
        {/* Hardscape */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <img src="images/placeholder-hardscape.jpg" alt="Hardscape Service Placeholder" className="w-full h-48 object-cover mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Hardscape</h3>
          <ul className="list-disc pl-5 text-left">
            <li>Retaining Walls</li>
            <li>Patios</li>
            <li>Outdoor Living Spaces</li>
            <li>Outdoor Kitchens</li>
          </ul>
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
          <p className="italic mb-4">"Hard Rock Excavation, Septic and Landscape LLC saved the day with fast service in Mid-Missouri!"</p>
          <p className="font-semibold">– Jane D., Homeowner</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <p className="italic mb-4">"Professional with a complete comprehensive outdoor service in Mid-Missouri."</p>
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
      <p>© 2025 Hard Rock Excavation, Septic and Landscape LLC. All rights reserved.</p>
      <p className="mt-2">Phone: (660) 888-2306 | Email: jonmudd12hre@gmail.com</p>
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
      "name": "Hard Rock Excavation, Septic and Landscape LLC",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hard Rock Road",
        "addressLocality": "Mid-Missouri",
        "addressRegion": "MO",
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
