import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [bakeries, setBakeries] = useState([]);

  useEffect(() => {
    fetch("https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=bakery+in+warsaw&format=json&limit=10")
      .then(res => res.json())
      .then(json => setBakeries(json));
  }, []);

  const handleDelete = e => {
    const { id } = e.target.parentElement;
    bakeries.splice(id, 1)
    setBakeries([...bakeries]);
  }

  console.log(bakeries[3]);

  return (
    <div>
      <h1>Bakeries</h1>
      <ul>
        {bakeries.map((bakery, index) => {

            if(bakery.address.bakery == null){
              return <div id={index}>
                <h3>Piekarnia</h3>
                <p>{bakery.address.road} {bakery.address.house_number}, {bakery.address.city}</p>
                <p>Latitude: {bakery.lat}  Longitute: {bakery.lon}</p>
                <button className="delete-todo" onClick={handleDelete} >x</button> 
              </div>
            }
            else{
              return <div id={index}>
                <h3>{bakery.address.bakery}</h3>
                <p>{bakery.address.road} {bakery.address.house_number}, {bakery.address.city}</p>
                <p>Latitude: {bakery.lat}  Longitute: {bakery.lon}</p>
                <button className="delete-todo" onClick={handleDelete} >x</button> 
              </div>
            }
          })}
          </ul>
    </div>
  );
}

export default App;
