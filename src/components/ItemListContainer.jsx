// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { categoria } = useParams ()

  console.log(categoria)

  const productos = [
    {id:1, nombre: "Vela Nut Vainilla", descripcion: "Descripción de vela Nut Vainilla y sus notas aromáticas", precio: 3500, categoria: "Velas"},
    {id:2, nombre: "Vela Maria Cher", descripcion: "Descripción de vela Maria Cher y sus notas aromáticas", precio: 3500, categoria: "Velas"},
    {id:3, nombre: "Vela Libre", descripcion: "Descripción de vela Libre y sus notas aromáticas", precio: 3500, categoria: "Velas"},
    {id:4, nombre: "Spray China Rose", descripcion: "Descripción de Spray Home China Rose y sus notas aromáticas", precio: 4000, categoria: "Spray Home"},
    {id:5, nombre: "Spray Maria Cher", descripcion: "Descripción de Spray Home Maria Cher y sus notas aromáticas", precio: 4000, categoria: "Spray Home"},
    {id:6, nombre: "Difusor Libre", descripcion: "Descripción de Difusor de Ambientes Libre y sus notas aromáticas", precio: 4500, categoria: "Difusor"},
    {id:7, nombre: "Difusor Maria Cher", descripcion: "Descripción de Difusor de Ambientes Maria Cher y sus notas aromáticas", precio: 4500, categoria: "Difusor"},
    {id:8, nombre: "Difusor Nut Vainilla", descripcion: "Descripción de Difusor Nut Vainilla y sus notas aromáticas", precio: 4500, categoria: "Difusor"},
  ]

  // eslint-disable-next-line no-unused-vars
  const mostrarProductos = new Promise ((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 5000)
    } else {
      reject("No hay productos para mostrar")
    }
  }) 

  mostrarProductos
  .then((resultado) => {
    console.log(resultado)
  })
  .catch((error) => {
    console.log(error)
  })

  const [contador, setContador] = useState(0)

  // eslint-disable-next-line no-unused-vars
  const sumar = () => {
    if(contador < 10) {
      setContador(contador + 1)
    }
  }
  // eslint-disable-next-line no-unused-vars
  const restar = () => {
    if(contador > 0) {
      setContador(contador - 1)
    }
  }


  const getProductos = new Promise((resolve, reject) => {
    if(productos.length>0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    } else {
      reject (new Error ("No hay datos"))
    }
  })

  getProductos
  // eslint-disable-next-line no-unused-vars
  .then((res) => {
  })
  .catch((error) => {
    console.log (error)
  })

  const filteredProducts = productos.filter((producto) => producto.categoria === categoria)

  return (
    <> 
    {
     categoria ? <ItemList productos={filteredProducts} /> : <ItemList productos={productos} /> 
    }
    </>
  )
}

export default ItemListContainer