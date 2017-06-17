import React from 'react';

class About extends React.PureComponent {
  
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  
  render() {
    return (
      <main>
        <h2>About</h2>
        <h3>Mensaje:</h3>
        <p>Las novedades de este código es la actualización de PropType como un módulo o paquete de npm independiente de React. </p>
        <p>Se estructuran las rutas y los contenedores de manera no anidada. Es decir, las rutas están aísladas unas de otras. Se hace el container invocando a los componentes necesarios en cada "vista"</p>
        <p>Por último, debio a las últimas actualizaciones se cambiaron el modo en que se acceden a algunos props de las rutas y de otros elementos.</p>
      </main>
    )
  }
}

export default About;