import React from 'react'
import './Apresentacao.css'
import Botao from './Botao'

export default function Apresentacao() {
  return (
    <section className="apresentacao" id='apresentacao'>
        <div className='container'>
            <h2>Bem-vindo ao meu Portfólio!</h2>
            <div className='cursor'></div>
            <h1>Olá, me chamo Elaine Tavares, <br /> sou <span>Desenvolvedora front End</span></h1>
            <p>Formada em Tecnologia em Gestão Financeira, me apaixonei pelo Desenvolvimento Web e busco transição de carreira para a área, possuo competência em GitHub, HTML, CSS, JavaScript e React e estou atuando como voluntária em Desenvolvimento Front-end no Instituto Capoeira Social.</p>
            <Botao texto="Currículo" link="https://drive.google.com/file/d/1E2bOurI_JM86VMMV4oZa1Y0ji2N4MsUt/view?usp=drive_link"/>
        </div>   
    </section>
  )
}
