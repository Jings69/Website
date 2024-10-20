// src/Users.jsx
import React from 'react';
import './Users.css'; // Import Users CSS
import keanImage from './images/kean.png';
import jhyzrelImage from './images/jhyzrel.png';
import seanImage from './images/sean.png';
import jessaImage from './images/jessa.png';

const userList = [
  { id: 1, name: 'Kean Ybanez', email: 'kean@example.com', imgSrc: keanImage },
  { id: 2, name: 'Jhyzrel Quicoy', email: 'jhyzrel@example.com', imgSrc: jhyzrelImage },
  { id: 3, name: 'Sean Bontuyan', email: 'sean@example.com', imgSrc: seanImage },
  { id: 4, name: 'Jessa Sacay', email: 'jessa@example.com', imgSrc: jessaImage },
];

function Users() {
  return (
    <div className="users-container">
      <h2>Users List</h2>
      <div className="card-container">
        {userList.map((user) => (
          <div className="card" key={user.id}>
            <img src={user.imgSrc} alt={user.name} className="user-image" />
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
