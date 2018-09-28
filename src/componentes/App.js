import React, { Component } from 'react';
import Header from './Header';
import Noticias from './Noticias';
import Formulario from './Formulario';

class App extends Component {


  state = {
    noticias: []
  }
  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = (filtros) => {

    const key = "741b6a9d01d44e92845ca5ca47eb42d3";
    let url = `https://newsapi.org/v2/top-headlines?country=ve&category=general&apiKey=${key}`;
    if(filtros !== undefined){
      url = `https://newsapi.org/v2/top-headlines?country=${filtros.pais}&category=${filtros.categoria}&apiKey=${key}`;
    }
  
    fetch(url)
    .then(respuesta => { 
      return respuesta.json()
    })
    .then(noticias => {
        this.setState({
            noticias: noticias.articles
        })
    })
    .catch(error => {
      console.log(error);
    })
  }
  render() {
    return (
      <div className="App">
        <Header title="Noticias"/>
        <div className="container white contenedor-noticias">
          <Formulario 
            consultarNoticias={this.consultarNoticias}/>
         
          <Noticias 
            noticias={this.state.noticias}/>
        </div>
      </div>
    );
  }
}

export default App;
