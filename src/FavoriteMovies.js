import React, { Component } from 'react';
import App from './App.js';

class FavoriteMovies extends Component {
  render() {
    // Destructured props 
	var {profiles, users, movies} = this.props;
    return (
      <div>
      	{profiles.map(profile => (
           <p>{users[profile.id].name}'s favorite movie is "{movies[profile.favoriteMovieID].name}".</p>
         ))}
      </div>
    )
  }
}

export default FavoriteMovies;