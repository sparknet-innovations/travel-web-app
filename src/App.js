import React from 'react';
import './style.css';

const destinations = [
  {
    title: 'Maldives',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1974&auto=format&fit=crop',
    description: 'Crystal clear waters and luxurious resorts for perfect relaxation.',
  },
  {
    title: 'Paris',
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=600&auto=format&fit=crop',
    description: 'Romantic evenings and charming streets in the city of love.',
  },
  {
    title: 'Bali',
    image: 'https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=2070&auto=format&fit=crop',
    description: 'Serene beaches and rich cultural vibes for soul-refreshing holidays.',
  },
  {
    title: 'Santorini',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Whitewashed buildings, sunset views, and Aegean luxury in Greece.',
  },
  {
    title: 'Dubai',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2000&auto=format&fit=crop',
    description: 'Luxury shopping, desert adventures, and iconic architecture in the UAE.',
  },
  {
    title: 'Swiss Alps',
    image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Snow-capped peaks, ski resorts, and scenic train rides in Switzerland.',
  },
];


function App() {
  return (
    <div>
      <header className="header">
        <div className="logo">Luxe Escapes</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero" id="home">
        <h1>Discover Luxury Like Never Before</h1>
        <p>Handpicked destinations for elite experiences</p>
        <a href="#destinations" className="hero-btn">Explore Destinations</a>
      </section>

      <section className="destination-section" id="destinations">
        <h2>Popular Destinations</h2>
        <div className="destinations">
          {destinations.map((dest, index) => (
            <div className="card" key={index}>
              <img src={dest.image} alt={dest.title} />
              <div className="card-body">
                <h3>{dest.title}</h3>
                <p>{dest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2>Contact Us</h2>
        <p>Plan your next getaway with Luxe Escapes. Our team of luxury travel experts is ready to design your dream vacation.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <p>📧 contact@luxeescapes.com | 📞 +1 234 567 8901 | 📍 123 Luxury Ave, Beverly Hills, CA</p>
          <p>© 2025 Luxe Escapes. All rights reserved. Follow us: <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
