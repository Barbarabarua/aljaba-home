// eslint-disable-next-line no-unused-vars
import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

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

      const getProductos = new Promise((resolve, reject) => {
        if(productos.length > 0) {
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
      
      return (
      <>
      <ItemDetail productos={productos} />
      </>
  )
}

export default ItemDetailContainer