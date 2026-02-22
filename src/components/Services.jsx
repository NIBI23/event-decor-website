import { useState } from "react";

function Services() {
  const [active, setActive] = useState(null);

  const services = [
    {
      title: "Birthday Decor",
      text: "Luxury themed birthday setups with premium lighting and stage design."
    },
    {
      title: "Wedding & Marriage",
      text: "Royal wedding concepts with elegant floral decorations."
    },
    {
      title: "Reception Setup",
      text: "Grand reception stages and professional lighting."
    },
    {
      title: "DJ & Stage Design",
      text: "Professional DJ systems and immersive sound setup."
    }
  ];

  return (
    <section id="services" className="section">
      <h2 className="section-title">Our Services</h2>

      <div className="service-container">
        {services.map((item, index) => (
          <div
            key={index}
            className={`service-card ${active === index ? "active" : ""}`}
            onClick={() => setActive(active === index ? null : index)}
          >
            <h3>{item.title}</h3>
            {active === index && <p>{item.text}</p>}
          </div>
        ))}
      </div>

    </section>
  );
}

export default Services;
