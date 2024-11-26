import  {React, useEffect } from 'react'
import './Tecnologias.css'
import html from '../imagens/tecnologia_html.svg'
import css from '../imagens/tecnologia_css.svg'
import js from '../imagens/tecnologia_js.svg'
import react from '../imagens/tecnologia_react.svg'
import github from '../imagens/tecnologia_github.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'



export default function Tecnologias() {

    useEffect(() => {
        AOS.init({duration: 1000})
      }, [])

  return (
    <section className="tecnologias" id='tecnologias' >
        <h2>Tecnologias</h2>
        <div className="container" data-aos="flip-left">
            <div className="card">
                <img className='html' src={html} alt="html" />
                <p>HTML</p>
            </div>
            <div className="card">
                <img src={css} alt="css" />
                <p>CSS</p>
            </div>
            <div className="card">
                <img src={js} alt="Javascript" />
                <p>JavaScript</p>
            </div>
            <div className="card">
                <img src={react} alt="React" />
                <p>React</p>
            </div>
            <div className="card">
                <img src={github} alt="GitHub" />
                <p>GitHub</p>
            </div>
        </div>
    </section>
  )
}
