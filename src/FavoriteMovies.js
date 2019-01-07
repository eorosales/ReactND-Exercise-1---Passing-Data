import React, { Component } from 'react';
import App from './App.js';

class FavoriteMovies extends Component {
  render() {
	var {profiles, users, movies} = this.props;
    return (
      <div>
      	{profiles.map(profile => (
           <p>{users[profile.id].name} favorite movie is </p>
         ))}
      </div>
    )
  }
}

export default FavoriteMovies;