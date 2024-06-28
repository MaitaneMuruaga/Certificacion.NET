// Para consolidar estructuras disponemos de types e interfaces
// Types
type Amigo = {
    nombre: string;
    edad?: number; // El ? determina que una propiedad van a ser opcional cuando un objeto sea tipado bajo la interface o el type
    cuadrilla: string[];
  };
  
  const miAmigo1: Amigo = {
    nombre: 'María',
    edad: 43,
    cuadrilla: ['Manuel', 'Iker']
  };
  
  const miAmigo2: Amigo = {
    nombre: 'Raúl',
    cuadrilla: ['Pedro', 'Marta']
  };
  
  // Interfaces
  interface IAmigo {
    nombre: string;
    edad?: number;
    cuadrilla: string[];
  }
  
  interface IAmigoVirtual extends Amigo {
    redSocial: string;
    likes?: number;
  }
  
  const miAmigo3: Amigo = {
    nombre: 'María',
    edad: 43,
    cuadrilla: ['Manuel', 'Iker']
  };
  
  const miAmigo4: Amigo = {
    nombre: 'Raúl',
    cuadrilla: ['Pedro', 'Marta']
  };
  
  const amigoFacebook: IAmigoVirtual = {
    nombre: 'Raúl',
    edad: 23,
    cuadrilla: ['Pedro', 'Marta'],
    redSocial: 'Facebook',
    likes: 8
  };
  
  // Interfaces dentro de interfaces
  
  interface Cliente {
    nombre: string;
    edad?: number;
    direccion: Direccion;
  }
  
  interface Direccion {
    direccion: string;
    codigoPostal: string;
    localidad: string;
  }
  
  const cliente: Cliente = {
    nombre: 'Fernando',
    edad: 29,
    direccion: {
      direccion: 'Plaza del Castillo 2',
      localidad: 'Pamplona',
      codigoPostal: '31001'
    }
  };
  