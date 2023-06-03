import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const CardGrid = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card text-center">
            <img
              src="thumbnail1.jpg"
              className="card-img-top"
              alt="Thumbnail 1"
            />
            <div className="card-body">
              <p className="card-text">Description 1</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <img
              src="thumbnail2.jpg"
              className="card-img-top"
              alt="Thumbnail 2"
            />
            <div className="card-body">
              <p className="card-text">Description 2</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <img
              src="thumbnail3.jpg"
              className="card-img-top"
              alt="Thumbnail 3"
            />
            <div className="card-body">
              <p className="card-text">Description 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
