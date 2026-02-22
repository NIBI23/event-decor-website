function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Us</h2>

      <div className="contact-wrapper">
        <input type="text" placeholder="Your Name" />
	<input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button className="btn-primary">Send Message</button>

     <div className="contact-details">
      <p><strong>📞 Mobile:</strong> +91 98765 43210</p>
      <p><strong>📧 Email:</strong> adeventplanner@email.com</p>
      <p><strong>📍 Address:</strong> 123 Celebration Street, Hyderabad, India</p>
    </div>

        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          Visit Our Official Instagram
        </a>
      </div>
    </section>
  );
}

export default Contact;
