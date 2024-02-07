import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Component.css';
import { Link } from 'react-router-dom'; 


const Display = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(response => {
        console.log(response)
        setUsers(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div>
      
      </div>
     <div className='webname'>
      DUMB WAYS TO DIE
    </div>
    <div className="display-container">
      {users.map(people => (
        <div key={people.id} className="person-container">
          <div className="info-container">
            <h1 className="person-name">Name: {people.name}</h1>
            <p className="died-info">
              <b>Died Due To:</b> {people.died}
            </p>
            <p className="description">
              <b>Description:</b> {people.reason}
            </p>
           
              <p className="date">  <b>   Date: </b> {people.date}     </p>
         
            <p className="location">
              <b>Location:</b> {people.location}
            </p>
          </div>
          <div>
            <img src={people.img} alt='' className='person-img' />
         

          </div>
        </div>
      ))}
      
    </div>
    <Link to="/insert">
          <button className='add'>Add Data</button>
        </Link>  
       
    </>
  );
};

export default Display;
