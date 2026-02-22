function Contact() {
  const sendToWhatsApp = () => {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const phoneNumber = "919952929257"; // remove + and spaces

    const text = `New Inquiry from Website:%0A
Name: ${name}%0A
Email: ${email}%0A
Message: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Us</h2>

      <div className="contact-wrapper">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        {/* Add onClick here */}
        <button className="btn-primary" onClick={sendToWhatsApp}>
          Send Message
        </button>

        <div className="contact-details">
          <p><strong>📞 Mobile:</strong> +91 9952929257</p>
          <p><strong>📧 Email:</strong> adeventplanners.co@email.com</p>
          <p><strong>📍 Address:</strong> No:16 PillayarKovil Street, Vanagaram, Chennai, TamilNadu, India</p>
        </div>

        <a
          href="https://www.instagram.com/ad_eventplanner_official/"
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
