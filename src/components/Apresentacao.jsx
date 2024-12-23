import './Apresentacao.css'
import Botao from './Botao'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

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

  useEffect(() => {
    AOS.init({duration: 1000})
  }, [])

  return (
    <section className="apresentacao" id='apresentacao'>
        <div className='container' data-aos="zoom-in-up">
            <h2>Bem-vindo ao meu Portfólio!</h2>
            <div className='cursor'></div>
            <h4 className='frase_de_apresentacao'>Olá, eu sou <span className='palavras_digitadas'>{text}</span></h4>   
            <p>Sou formada em Tecnologia em Gestão Financeira e, ao longo do tempo, desenvolvi uma paixão pelo Desenvolvimento Web, o que me levou a buscar uma transição de carreira para essa área. Tenho competências em GitHub, HTML, CSS, JavaScript e React, que são as principais ferramentas que utilizo para construir soluções web. <br />
              Além disso, tive a oportunidade de atuar como voluntária em Desenvolvimento Front-end no Instituto Capoeira Social, onde pude aplicar e aprimorar meus conhecimentos em um projeto real. <br /> Atualmente, sou universitária no curso Tecnólogo de Sistemas para Internet, o que reforça minha dedicação e compromisso em consolidar minha carreira na área de Desenvolvimento Web.
            </p>
            <Botao texto="Currículo" link="https://drive.google.com/file/d/185vW5PRlwyjKza1pQpAMRi7pNhiDckQN/view?usp=drive_link"/>
        </div> 
        
    </section>
  )
}
