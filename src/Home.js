import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the CSS file
import Footer from './Footer';
import welcomeImage from './assets/bgimg.jpg';
import catering from './assets/catering.jpg';
import fast from './assets/fast.jpg';
import delivery from './assets/delivery.jpg';
import pickup from './assets/pickup.jpg';


function Home({ isLoggedIn }) {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://mocki.io/v1/f947bc43-fb6a-41f1-b078-c8f3f4d87968');

        if (!response.ok) {
          throw new Error('Failed to fetch pizza data');
        }

        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error fetching pizza data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {!isLoggedIn ? (
        <div>
       <div className="button-container">
  <div className="welcome-image-container">
    <img src={welcomeImage} alt="Welcome" className="welcomeImage" />
  </div>
  <div className="text-container">
    <p className="big-text">🍕 Indulge in the Extravaganza of <strong>Pizzazz!</strong></p>
    <p className="medium-text">Where Taste Takes a Joyful Leap.</p>
    <p className="small-text">Unveil the Delight –<strong>Sign in </strong> to Savor the Magic!</p>
</div>

</div>
<div style={{marginBottom: '49px'}}>
<h1 style={{textAlign: 'center',color:'purple'}}>WE’VE GOT YOU COVERED!</h1>
    <h3 style={{textAlign: 'center',color:'white'}}>Welcome to our world of flavors and delights. Immerse yourself in a culinary journey where every dish is crafted with passion and precision.</h3>
</div>
{/* WHAT YOU GET WITH US */}
<div className="features-container">
  <div className="feature">
    <img src={fast} alt="fast" className="feature-image" />
    <h3>Fast Delivery</h3>
    <p>No need to wait extra hours.Get your pizza fast.</p>
  </div>
  <div className="feature">
    <img src={pickup} alt="feature" className="feature-image" />
    <h3>Pickup In Store</h3>
    <p>We have pick option available.</p>
  </div>
  <div className="feature">
    <img src={delivery} alt="delivery" className="feature-image" />
    <h3>Seat Reservation</h3>
    <p>Reserve your seat with just a phone call.</p>
  </div>
  <div className="feature">
    <img src={catering} alt="catering" className="feature-image" />
    <h3>Catering Is An Option</h3>
    <p>We provide catering services. Make your party fun.</p>
  </div>
</div>

</div>

      ) : (
        <div id="pizzmain" >
          <div className="pizza-container">
            {pizzas.map((pizza) => (
              <div key={pizza.id} className="pizza-card">
                <img src={pizza.image} alt={pizza.name} className="pizza-image" />
                <div className="pizza-details">
                  <h2 className="pizza-name">{pizza.name}</h2>
                  <p className="pizza-price">${pizza.price}</p>
                  <p className="pizza-rating">Rating: {pizza.rating}</p>
                  <ul className="pizza-ingredients">
                    {pizza.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Home;