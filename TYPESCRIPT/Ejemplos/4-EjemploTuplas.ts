  // Las tuplas permiten guardar valores tipados como conjuntos. No existen en JavaScript
  // No se usan mucho porque a menudo nuestras aplicaciones demandarán estructuras semejantes a los clásicos objetos
  // Esto lo solucionaremos con los types y las interfaces
  const arrayProfe = ['Juan Luis', 1000]; // array
  const tuplaProfe: [string, number] = ['Juan Luis', 1000]; // tupla
  // tuplaProfe[0] = 500; // Error porque la primera posición de la tupla es de tipo string
  // tuplaProfe[1] = 'Ana'; // Error porque la segunda posición de la tupla es de tipo string
  tuplaProfe[0] = 'Ana'; // Error porque la primera posición de la tupla es de tipo string
  tuplaProfe[1] = 500; // Error porque la segunda posición de la tupla es de tipo string
  console.log(tuplaProfe);
  const tuplaAlumno: [string, number, boolean] = ['Marta', 2000, true]; // las tuplas pueden almacenar más de dos valores
  const arrayTuplas: [string, number, boolean][] = [];
  arrayTuplas.push(tuplaAlumno);