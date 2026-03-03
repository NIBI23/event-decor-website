import { useState } from "react";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("birthday");

  const images = {
    birthday: [
      "/images/birthday/b1.jpg",
      "/images/birthday/b2.jpg",
      "/images/birthday/b3.jpg",
      "/images/birthday/b4.jpg",
      "/images/birthday/b5.jpg"	    
    ],
    marriage: [
      "/images/marriage/1.jpg",
      "/images/marriage/2.jpg"
    ],
    reception: [
      "/images/reception/r1.jpg"
      "/images/reception/r2.jpg"
      "/images/reception/r3.jpg"
      "/images/reception/r4.jpg"
      "/images/reception/r5.jpg"
      "/images/reception/r6.jpg"
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
