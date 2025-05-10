import React from 'react';
import './location.css';

const LocationPage = () => {
  return (
    <div className="page">
      <h2 className="title">Unde ne găsești</h2>
      <p className="location-description">
      Vino să ne vizitezi! Centrul nostru de adopție te așteaptă cu drag. 🐾
      </p>
      <div className="location-details">
        <p><strong>📍 Adresă:</strong> Piața Unirii, București, Romania</p>
        <p><strong>🕒 Program:</strong> Lu–Vi: 10:00 – 18:00</p>
        <p><strong>📞 Program:</strong> +40 123 456 789</p>
      </div>
      <div className="map-container">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.4776633455056!2d26.10253811553798!3d44.42676797910211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff376ab3d67f%3A0x4c5c1a8c6b1b7e6d!2sPia%C8%9Ba%20Unirii!5e0!3m2!1sen!2sro!4v1713354429876!5m2!1sen!2sro"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationPage;
