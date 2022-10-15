import React from 'react';
import { createRoot } from 'react-dom/client' //Importar ReactDom quedo obsoleto desde la version de react 18. Ahora se hace de esta forma.
import PrimerApp from './PrimerApp';
// import CounterApp from './CounterApp';
import './index.css';

const divRoot = createRoot(document.querySelector('#root'));
divRoot.render(<PrimerApp saludo ="hola, soy goku" />);
// divRoot.render(<CounterApp valorPadre ={10}/>);