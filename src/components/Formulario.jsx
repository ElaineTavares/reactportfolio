import React, { useState } from 'react'
import './Formulario.css'
import CampoTexto from './CampoTexto'
import emailjs from '@emailjs/browser'

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

   

      const templateParams = {
        from_name: formData.nome,
        from_email: formData.email,
        message: formData.mensagem  
         }
              //Service ID    //Template ID    //Template params  //Public Key
      emailjs.send("service_m8ttueb", "template_m2p14fq", templateParams, "eplwxySrnL-6Io9Qo" )
        .then((response) =>{
          console.log("email enviado ", response.status, response.text)

        }, (err) =>{
          console.log("ERRO", err)
        })

      setMsgSucesso("Dados enviados com sucesso! Logo faremos contato.")
      setFormData({
        nome: "",
        email: "",
        mensagem:""
      })
    
      setTimeout(() =>{
        setMsgSucesso("")
      },4000)
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
