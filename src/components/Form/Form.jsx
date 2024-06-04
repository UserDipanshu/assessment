import React, { useState, useEffect } from "react";
import genreData from "../../utils/genreDb";

function Form() {
  const [movieName, setMovieName] = useState("");
  const [genre, setGenre] = useState();
  const [rating, setRating] = useState(1.0);
  const [genres, setGenres] = useState(genreData);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Movie Name:", movieName);
    console.log("Genre:", genre);
    console.log("Rating:", rating);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="movieName" className="form-label">
          Movie Name
        </label>
        <input
          type="text"
          className="form-control"
          id="movieName"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          minLength={2}
          maxLength={20}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="genre" className="form-label">
          Genre
        </label>
        <select
          className="form-select"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        >
          <option value="">Select Genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="rating" className="form-label">
          Rating
        </label>
        <input
          type="number"
          className="form-control"
          id="rating"
          value={rating}
          onChange={(e) => setRating(parseFloat(e.target.value))}
          step="0.1"
          min="1.0"
          max="10.0"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}

export default Form;
