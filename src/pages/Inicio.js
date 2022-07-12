import React from 'react'
import { Link } from "react-router-dom"

function Card(props) {
    return (
      <div className="card">
        <img src={props.img} className="card__img" />
        <div className="card__body">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
          <button className="card__btn">{props.button}Conoce más</button>
        </div>
      </div>
    );
  }  
  


export default function Inicio() {
    return (
      <div className="wrapper">
        <Card
          img="https://images.unsplash.com/photo-1612077330269-788066d5ba58?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
          title="Energía"
          description="Fall Favorite • Boots"
          button as={Link} to="/energia/generacion"
        />
  
        <Card
          img="https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          title="Minería"
          description="Sweater Season • Cozy"
          price="29.95"
        />
        <Card
          img="https://images.unsplash.com/photo-1475178626620-a4d074967452?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
          title="Hidrocarburos"
          description="Demin • Verstile"
        />
      </div>
    );
  }

 