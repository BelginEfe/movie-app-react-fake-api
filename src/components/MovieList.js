import React from "react";
import './style.css';

/* class  MovieList extends React.Component() {
    
    render () {

        return (
            <div>MovieList</div>
        )
    }
} */

const MovieList = (props) => {

    return (
      <div className="row">


        {props.movies.map((movie) => (

          <div className="col-lg-4" key={movie.id}>
            <div className="card mb-4 shadow-sm">
              <img
                src={movie.imageURL}
                className="card-img-top"
                alt="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text">{movie.overview}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    className="btn btn-md btn-outline-danger"
                    onClick={() => props.deleteMovie(movie)}
                  >
                    Delete
                  </button>
                  <h2>
                    <span className="badge bg-info ">{movie.rating}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}


      </div>
    );
}

export default MovieList;
