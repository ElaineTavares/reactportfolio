import React from 'react'
import './Apresentacao.css'
import Botao from './Botao'
import { useEffect, useState } from 'react'

export default function Apresentacao() {
  const [text, setText] = useState('');
  const toRotate = ['Elaine Tavares!', 'Desenvolvedora Front End!'];
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 100;
  const [delta, setDelta] = useState(100);

  //CLEAN UP FUNCTION
  useEffect(()=> {
    let ticker = setInterval(()=>{
      toType()
    }, delta)
    return ()=> {clearInterval(ticker)}
  }, [text])

  const toType = ()=> {
    let i = loop % toRotate.length;
    let fullText = toRotate[i]
    let upDatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);

    setText(upDatedText);

    if(!isDeleting && upDatedText === fullText){
        setIsDeleting(true);
        setDelta(period);
    } else if (isDeleting && upDatedText === '') {
        setIsDeleting(false);
        setDelta(period);
        setLoop(loop+1);
    }
  }

  return (
    <section className="apresentacao" id='apresentacao'>
        <div className='container'>
            <h2>Bem-vindo ao meu Portfólio!</h2>
            <div className='cursor'></div>
            <h4>Olá, eu sou <span>{text}</span></h4>   
            <p>Formada em Tecnologia em Gestão Financeira, me apaixonei pelo Desenvolvimento Web e busco transição de carreira para a área, possuo competência em GitHub, HTML, CSS, JavaScript e React. Atuei como voluntária em Desenvolvimento Front-end no Instituto Capoeira Social e em Agosto/2024 vou iniciar o curso Técnologo de Sistemas para Internet.</p>
            <Botao texto="Currículo" link="https://drive.google.com/file/d/1E2bOurI_JM86VMMV4oZa1Y0ji2N4MsUt/view?usp=drive_link"/>
        </div>   
    </section>
  )
}
