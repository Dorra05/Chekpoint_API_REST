import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('/api/services')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des services:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Nos Services</h2>
      <div className="row">
        {services.map(service => (
          <div className="col-md-4" key={service._id}>
            <div className="card">
              <img src={service.imageUrl} className="card-img-top" alt={service.name} />
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.description}</p>
                <p className="card-text"><strong>{service.price} €</strong></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
