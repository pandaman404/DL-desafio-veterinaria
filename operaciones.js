import { readFile, writeFile } from 'node:fs/promises';

const leerCitas = async () => {
  try {
    return JSON.parse(await readFile('citas.json', 'utf-8'));
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('No existe el archivo citas.json');
    } else {
      console.log(error);
    }
  }
};

const registrarCitas = async (citas) => {
  try {
    await writeFile('citas.json', JSON.stringify(citas));
    console.log('Cita registrada exitosamente!');
  } catch (error) {
    console.log(error);
  }
};

export { registrarCitas, leerCitas };
