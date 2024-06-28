import { IFoto } from './interfaces/foto.interface';

const btnCargarAPI = document.querySelector('#cargarAPI');

const obtenerDatosAPI = async () => {
  try {
    const respuesta = await fetch('https://picsum.photos/list');
    const resultado: IFoto[] = await respuesta.json();
    mostrarHTMLAPI(resultado);
  } catch (error) {
    console.log(error);
  }
};

const mostrarHTMLAPI = (fotos: IFoto[]) => {
  const contenido = document.querySelector('#contenido');
  let html = '';
  fotos.forEach((x) => {
    console.log(x);
    const { author, post_url, id } = x;
    html += `
          <p>Autor: ${author} </p>
          <a href="${post_url}">Enlace a foto con id ${id}</a>
      `;
  });
  contenido!.innerHTML = html;
};

btnCargarAPI!.addEventListener('click', obtenerDatosAPI);
