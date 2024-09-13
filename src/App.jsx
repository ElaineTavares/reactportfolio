import './App.css'
import Apresentacao from './components/Apresentacao'
import Footer from './components/Footer'
import Formulario from './components/Formulario'
import Header from './components/Header'
import LinhaDoTempo from './components/LinhaDoTempo'
import Projetos from './components/Projetos'
import Tecnologias from './components/Tecnologias'


function App() {


  return (
    <>
      <Header/>
      <Apresentacao/>
      <Projetos/>
      <Tecnologias/>
      <LinhaDoTempo/>
      <Formulario/>
      <Footer/>
    </>
  )
}

export default App
