import { useState } from "react";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("birthday");

  const images = {
    birthday: [
      "/images/birthday/1.jpg",
      "/images/birthday/2.jpg"
    ],
    marriage: [
      "/images/marriage/1.jpg",
      "/images/marriage/2.jpg"
    ],
    reception: [
      "/images/reception/1.jpg"
    ],
    dj: [
      "/images/dj/1.jpg"
    ]
  };

  return (
    <section id="gallery" className="section">
      <h2 className="section-title">Gallery</h2>

      <div className="gallery-buttons">
        <button onClick={() => setActiveCategory("birthday")}>Birthday</button>
        <button onClick={() => setActiveCategory("marriage")}>Marriage</button>
        <button onClick={() => setActiveCategory("reception")}>Reception</button>
        <button onClick={() => setActiveCategory("dj")}>DJ Sets</button>
      </div>

      <div className="gallery-grid">
        {images[activeCategory].map((img, index) => (
          <img key={index} src={img} alt="Event Decor" />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
