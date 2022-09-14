import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ items }) => {
    return (
       
        <div className="detail"> 
        <Link to='/item/items.descripcion.id'>
            <img src={items.image} alt={items.nombre} />
            <div className="infoDetail">
                <h3>{items.nombre}</h3>
                <p>
                    {items.descripcion}
                </p>
                <h3>${items.precio}.-</h3>

                <ItemCount stock={10} initial={1} onAdd={0} />
            </div></Link>
        </div>
    );
};

export default ItemDetail;