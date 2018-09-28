import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
    paisRef = React.createRef();
    categoriaRef = React.createRef();

    filtrar = (e) => {
        e.preventDefault();
        const filtros = {
            pais : this.paisRef.current.value,
            categoria : this.categoriaRef.current.value
        }
        
        this.props.consultarNoticias(filtros);
    }
    render() { 
        return ( 
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form onSubmit={this.filtrar}>
                        <h2>Noticias.</h2>
                        <div className="input-field col s12 m5">
                            <select ref={this.paisRef}>
                                <option value="VE" defaultValue>Venezuela</option>
                                <option value="AR">Argentina</option>
                                <option value="CO">Colombia</option>
                                <option value="US">Estados Unidos</option>
                                <option value="PE">Peru</option>
                            </select>
                        </div>                        
                        <div className="input-field col s12 m5">
                            <select ref={this.categoriaRef}>
                                <option value="general" defaultValue>General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sport">Deporte</option>
                                <option value="tecnologies">Tecnologia</option>
                            </select>
                        </div>
                        <div className="input-field col s12 m2 enviar">
                            <input type="submit" className="btn amber darken-2" value="Buscar"/>
                        </div>
                    </form> 
                </div>
            </div>
            
        );
    }
}
Formulario.propTypes = {
    consultarNoticias : PropTypes.func.isRequired
}
export default Formulario;