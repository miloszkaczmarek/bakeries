import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [bakeries, setBakeries] = useState([]);

  useEffect(() => {
    fetch("https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=bakery+in+warsaw&format=json&limit=20")
      .then(res => res.json())
      .then(json => setBakeries(json));
  }, []);

  console.log(bakeries[4]);

  return (
    <div>
      <h1>Bakeries</h1>
      <ul>
        {bakeries.map((bakery, index) => {

            if(bakery.address.bakery != null && index < 11){
              return <div>
                <h3>{bakery.address.bakery}</h3>
                <p>{bakery.address.road} {bakery.address.house_number}, {bakery.address.city}</p>
              </div>

            }

          })}
          </ul>
    </div>
  );
}

export default App;
