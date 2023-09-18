// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [data, setData]= useState([])
  const { id } = useParams()

  const productos = [
    {id:1, nombre: "Vela Nut Vainilla", descripcion: "Coco, Anis, Lirios del Valle, Fresia, Rosa, Ambar, Cedro, Sándalo y Musk.", image:'https://i.postimg.cc/zfFDfpV0/Velas.jpg', precio: 3500, categoria: "Velas"},
    {id:2, nombre: "Vela Maria Cher", descripcion: "Bergamota, Acacia, Rosa, Neroli, Yara Yara, Cashmeran, Ámbar y Almizcles.", image:'https://i.postimg.cc/zfFDfpV0/Velas.jpg', precio: 3500, categoria: "Velas"},
    {id:3, nombre: "Vela Libre", descripcion: "Lavanda, mandarina, Grosellas negras, Petit grain, Jazmín y Ámbar gris.", image:'https://i.postimg.cc/zfFDfpV0/Velas.jpg', precio: 3500, categoria: "Velas"},
    {id:4, nombre: "Spray China Rose", descripcion: "Pétalos de Rosa Chinensis, Rosa Bourbon, Rosa de Té, Geranio, Musk, Ámbar Dulce, Frutos del Bosque, Pimienta Roja de Cayena, Nerolí.", image: 'https://i.postimg.cc/66rsxT4f/Spray.jpg', precio: 4000, categoria: "Spray Home"},
    {id:5, nombre: "Spray Maria Cher", descripcion: "Bergamota, Acacia, Rosa, Neroli, Yara Yara, Cashmeran, Ámbar y Almizcles.", image:'https://i.postimg.cc/66rsxT4f/Spray.jpg', precio: 4000, categoria: "Spray Home"},
    {id:6, nombre: "Difusor Libre", descripcion: "Lavanda, mandarina, Grosellas negras, Petit grain, Jazmín y Ámbar gris", image:'https://i.postimg.cc/nrRGfv4L/Dif.jpg', precio: 4500, categoria: "Difusor"}, 
    {id:7, nombre: "Difusor Maria Cher", descripcion: "Bergamota, Acacia, Rosa, Neroli, Yara Yara, Cashmeran, Ámbar y Almizcles.", image:'https://i.postimg.cc/nrRGfv4L/Dif.jpg', precio: 4500, categoria: "Difusor"},
    {id:8, nombre: "Difusor Nut Vainilla", descripcion: "Coco, Anis, Lirios del Valle, Fresia, Rosa, Ambar, Cedro, Sándalo y Musk.", image:'https://i.postimg.cc/nrRGfv4L/Dif.jpg', precio: 4500, categoria: "Difusor"},
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
    
     <ItemList productos={data} /> 
    
    </>
  )
}

export default ItemListContainer