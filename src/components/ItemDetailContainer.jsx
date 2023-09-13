// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [data, setData]= useState([])
  const { id } = useParams()

  const productos = [
    {id:1, nombre: "Vela Nut Vainilla", descripcion: "Descripción de vela Nut Vainilla y sus notas aromáticas", image:'https://i.postimg.cc/zfFDfpV0/Velas.jpg', precio: 3500, categoria: "Velas"},
    {id:2, nombre: "Vela Maria Cher", descripcion: "Descripción de vela Maria Cher y sus notas aromáticas", image:'https://i.postimg.cc/zfFDfpV0/Velas.jpg', precio: 3500, categoria: "Velas"},
    {id:3, nombre: "Vela Libre", descripcion: "Descripción de vela Libre y sus notas aromáticas", image:'https://i.postimg.cc/zfFDfpV0/Velas.jpg', precio: 3500, categoria: "Velas"},
    {id:4, nombre: "Spray China Rose", descripcion: "Descripción de Spray Home China Rose y sus notas aromáticas", image: 'https://i.postimg.cc/66rsxT4f/Spray.jpg', precio: 4000, categoria: "Spray Home"},
    {id:5, nombre: "Spray Maria Cher", descripcion: "Descripción de Spray Home Maria Cher y sus notas aromáticas", imagen:'https://i.postimg.cc/66rsxT4f/Spray.jpg', precio: 4000, categoria: "Spray Home"},
    {id:6, nombre: "Difusor Libre", descripcion: "Descripción de Difusor de Ambientes Libre y sus notas aromáticas", image:'https://i.postimg.cc/nrRGfv4L/Dif.jpg', precio: 4500, categoria: "Difusor"},
    {id:7, nombre: "Difusor Maria Cher", descripcion: "Descripción de Difusor de Ambientes Maria Cher y sus notas aromáticas", image:'https://i.postimg.cc/nrRGfv4L/Dif.jpg', precio: 4500, categoria: "Difusor"},
    {id:8, nombre: "Difusor Nut Vainilla", descripcion: "Descripción de Difusor Nut Vainilla y sus notas aromáticas", image:'https://i.postimg.cc/nrRGfv4L/Dif.jpg', precio: 4500, categoria: "Difusor"},
      ]

      const getProductos = new Promise((resolve, reject) => {
        if(productos.length>0) {
          setTimeout(() => {
            resolve(productos)
          }, 1000)
        } else {
          reject (new Error ("No hay datos"))
        }
      })
      useEffect(()=>{
        getProductos
        .then((res)=>{
          if(id){
            setData(res.filter((producto) => producto.categoria === id))
          }else{
            setData(res)
          }
        })
      },[id])
      
      return (
      <>
      <ItemDetail productos={data} />
      </>
  )
}

export default ItemDetailContainer