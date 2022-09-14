import React, { useEffect, useState } from 'react';
import { productos } from './Productos';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [items, setItems] = useState({});

    const {itemId} = useParams ();

    useEffect(() => {
        const getItems = () =>
            new Promise((resolve) => {
               setTimeout(() => {
                    resolve(productos.find(productos=>productos.id===itemId));
                }, 500);
              
                
    
            });
        getItems.then (resolve => setItems(resolve.find(productos =>productos.itemId === (itemId))))
       
    }, [itemId]);
    return (
        <div style={{ minHeight: '70vh' }}>
            <ItemDetail items={items} />
        </div>
    );
};

export default ItemDetailContainer;