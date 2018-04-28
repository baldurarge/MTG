import React, { Component } from 'react';
import CardSearch from './CardSearch';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <a href="" className="logo">
          LOGO
        </a>
        <CardSearch />
        <ul>
          <li>
            <a href="">My Decks</a>
          </li>
          <li>
            <a href="">My Cards</a>
          </li>
          <li>
            <a href="">My Profile</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
