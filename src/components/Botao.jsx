import './Botao.css'
import PropTypes from 'prop-types';


export default function Botao(props) {
  return (
    <button className='botao'><a href={props.link} target='blank'>{props.texto}</a></button>
  )
}

Botao.propTypes = {
  link: PropTypes.string.isRequired, // Obrigatório e deve ser uma string
  texto: PropTypes.string.isRequired, // Obrigatório e deve ser uma string
};
