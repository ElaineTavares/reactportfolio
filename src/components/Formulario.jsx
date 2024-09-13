import React, { useState } from 'react'
import './Formulario.css'
import CampoTexto from './CampoTexto'

export default function Formulario() {

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem:""
  })

  const [dadosCapturados, setDadosCapturados] = useState ([])
  const [msgSucesso, setMsgSucesso] = useState("")

  const handleChange = (e) =>{
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
  }

  const capturarDados = (e) =>{
    e.preventDefault()
    setDadosCapturados([...dadosCapturados, formData])

    setMsgSucesso("Dados enviados com sucesso!")
    
    setTimeout(() =>{
      setMsgSucesso("")
    },4000)

    setFormData({
      nome: "",
      email: "",
      mensagem:""
    })


  }



  return (
    <section className='formulario'>
      <form onSubmit={capturarDados}>
        <h2>Gostou? Preencha os campos abaixo para mais informações!</h2>
        <CampoTexto 
        type="text" 
        placeholder="Informe o seu nome"
        name="nome"
        valor={formData.nome}
        onChange={handleChange}
        />
        <CampoTexto 
        type="email" 
        placeholder="Informe o seu e-mail"
        name="email"
        valor={formData.email}
        onChange={handleChange}
        />
        <textarea 
        rows={4} 
        placeholder="Escreva a sua mensagem"
        name="mensagem"
        value={formData.mensagem}
        onChange={handleChange} 
        required
        />
        <h3 className='msg_sucesso'>{msgSucesso}</h3>
        <button className='btn_formulario'>Enviar</button>  
      </form>
    </section>
  )
}
