import React from "react";

const Item = ({nombre, image, precio}) => {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={nombre} />
            <div className="card-body">
                <h5 className="card-title text-center"><b>{nombre}</b></h5>
                <h4 className="card-text text-center">${precio}</h4>
                <button type="button" className="btn btn-outline-primary">Ver detalles</button>
            </div>
        </div>
    )
}

export default Item;