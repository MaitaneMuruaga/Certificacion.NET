interface IFoto {
    id:           string;
    author:       string;
    width:        number;
    height:       number;
    url:          string;
    download_url: string;
}

const obtenerDatosAPI = async () => {
    try {
        const respuesta = await fetch('https://picsum.photos/v2/list');
        const resultado:IFoto = await respuesta.json();
        console.log(resultado);
        console.log(resultado.url);
    } catch (error) {
        console.log(error);
    }
  }
  
  obtenerDatosAPI();

