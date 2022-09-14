import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { productos } from "./Productos";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const {categoryId} = useParams ();

    useEffect (()=> {        
        const getProductos = new Promise ((resolve)=> {
            setTimeout (()=> {
                resolve(productos);
            }, 2000);
        });
        if (categoryId) {
            getProductos.then (response => setItems(response.filter (productos=> productos.categoryId === categoryId)));
        } else {
            getProductos.then (response =>setItems(response));
        }
    }, [categoryId]);
   

    return (
        <div className="container">
            <ItemList items ={items}/>
        </div>
    )
}

export default ItemListContainer;