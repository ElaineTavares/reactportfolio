import React from 'react'
import './CampoTexto.css'

export default function CampoTexto({valor, type, placeholder, ...props}) {
  return (
    <div className="campo_texto">
        <input value={valor} type={type} placeholder={placeholder} {...props} required/>
    </div>
  )
}
