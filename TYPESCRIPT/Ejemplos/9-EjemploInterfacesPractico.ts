export interface IChuck {
    categories: string[];
    created_at: Date;
    icon_url:   string;
    id:         string;
    updated_at: Date;
    url:        string;
    value:      string;
  }
  
  const obtenerDatosAPI = async () => {
    try {
        const respuesta = await fetch('https://api.chucknorris.io/jokes/random?category=animal');
        const resultado:IChuck = await respuesta.json();
        console.log(resultado);
        console.log(resultado.value);
    } catch (error) {
        console.log(error);
    }
  }
  
  obtenerDatosAPI();