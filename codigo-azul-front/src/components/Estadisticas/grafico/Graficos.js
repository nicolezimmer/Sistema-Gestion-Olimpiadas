import React from 'react'
import "./graficos.css"
import { GraBarras } from './GraBarras'
import { GraLineas } from './GraLineas'
import { GraTorta } from './GraTorta'


const Graficos = () => {
  return (
    <div className='flex-container'>
        <GraBarras/>
        <GraLineas/>
        <GraTorta/>
    </div>
  )
}

export default Graficos;