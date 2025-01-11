import { Navbar } from './componentes/navbar.js';
import { Footer } from './componentes/footer.js';

// Insere a Navbar no início do body
document.body.insertAdjacentHTML('afterbegin', Navbar());

// Insere o Footer no final do body
document.body.insertAdjacentHTML('beforeend', Footer());
