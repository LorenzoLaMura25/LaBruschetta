import React from 'react';

const Prenota = () => {
  return (
    <div>
      <h1>Prenota</h1>
      <div>
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9638491722955!2d12.487332515333132!3d41.907570779219616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6050d2ab5c17%3A0xfbf6d3b3e85b3a4a!2sVia%20Sardegna%2C%2039%2C%2000187%20Roma%20RM%2C%20Italy!5e0!3m2!1sen!2sus!4v1625395861573!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Prenota;
