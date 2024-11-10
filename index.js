import { registrarCitas, leerCitas } from './operaciones.js';

const obtenerDataTerminal = () => {
  // Ejemplo: node index.js registrar Benito "2 años" perro blanco vomitos
  const arg = process.argv.slice(2);
  const [accion, ...data] = arg;

  return {
    accion,
    data,
  };
};

const generarJSON = (data) => {
  const [nombre, edad, animal, color, enfermedad] = data;

  return {
    nombre,
    edad,
    animal,
    color,
    enfermedad,
  };
};

const main = async () => {
  const { accion, data } = obtenerDataTerminal();

  try {
    switch (accion) {
      case 'registrar':
        const citasRegistrar = (await leerCitas()) || []; // Si el archivo no existe utilizará un array vacío
        const nuevaCita = generarJSON(data);
        citasRegistrar.push(nuevaCita);
        await registrarCitas(citasRegistrar);
        break;

      case 'leer':
        const citasLeer = await leerCitas();
        console.log(citasLeer);
        break;

      default:
        console.log(`"${accion}" no es una acción válida`);
        break;
    }
  } catch (error) {
    console.log('ups :(');
  }
};

main();
