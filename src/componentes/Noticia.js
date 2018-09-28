import React from 'react';
import PropTypes from 'prop-types';

const Noticia = (props) => { 
    const{urlToImage, url, title, descripction, source} = props.noticia;
    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage} alt={title} />
                    <span className="card-title">{source.name}</span>
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{descripction}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank" className="waves-effect waves-light">Leer....</a>
                </div>
            </div>
        </div>
     );
 };

 Noticia.propTypes = {
    noticia : PropTypes.shape({
      urlToImage: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      descripction: PropTypes.string.isRequired,  
      source: PropTypes.object.isRequired
    })
}
 export default Noticia;
    
    
 
    


 