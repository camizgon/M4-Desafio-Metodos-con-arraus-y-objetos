const radiologia = [
  {
    hora: "11:00", //posicion 0
    especialista: "Ignacio Schulz", //posicion 1
    paciente: "Francisca Rojas", //posicion 2
    rut: "9878782-1", //posicion 3
    prevision: "FONASA", //posicion 4
  },
  {
    hora: "11:30",
    especialista: "Federico Subercaseaux",
    paciente: "Pamela Estrada",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "Fernando Wurthz",
    paciente: "Armando Luna",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "Ana Maria Godoy",
    paciente: "Manuel Godoy",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "Patricia Suazo",
    paciente: "Ramon Suazo",
    rut: "14989389-k",
    prevision: "FONASA",
  },
];

/*Ejercicio 2 */

//Eliminamos el primer elemento del arreglo
radiologia.shift()

//Eliminamos el último elemento del arreglo
radiologia.pop()

console.table(radiologia);

/*------------------------------------------------------------------------------------------------------------------------------ */

const traumatologia = [
  {
    hora: "8:00",
    especialista: "Maria Paz Altuzarra",
    paciente: "Paula Sanchez",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "Raul Araya",
    paciente: "Angelica Navas",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "Maria Arriagada",
    paciente: "Ana Klapp",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "Alejandro Badilla",
    paciente: "Felipe Mardones",
    rut: "15474233-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "Ceciclia Budnik",
    paciente: "Diego Marre",
    rut: "16554741-k",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "Arturo Cavagnaro",
    paciente: "Cecilia Mendez",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "Andres Kanacri",
    paciente: "Marcial Suazo",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];
/**------------------------------------------------------------------------------------------------------------------------------ */

/*Ejercicio 1 */
//Agregamos al arreglo traumatologia las siguientes horas
traumatologia.push(
  {
    hora: "9:00",
    especialista: "René Poblete",
    paciente: "Ana Gellona",
    rut: "13123329-7",
    prevision: "ISAPRE",
  },
  {
    hora: "9:30",
    especialista: "Maria Solar",
    paciente: "Ramiro Andrade",
    rut: "12221451-k",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "Raúl Loyola",
    paciente: "Carmen Isla",
    rut: "10112348-3",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "Antonio Larenas",
    paciente: "Pablo Loayza",
    rut: "13453234-1",
    prevision: "ISAPRE",
  },
  {
    hora: "12:00",
    especialista: "Matias Aravena",
    paciente: "Susana Poblete",
    rut: "14345656-6",
    prevision: "FONASA",
  }
);

console.table(traumatologia);

/*----------------------------------------------------------------------------------------------------------------------------- */

const dental = [
  {
    hora: "8:30",
    especialista: "Andrea Zuñiga",
    paciente: "Marcela Retamal",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "Maria Pia Zañartu",
    paciente: "Angel muñoz",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "Scarlett Witting",
    paciente: "Mario Kast",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "Francisco Von Teuber",
    paciente: "Karin Fernandez",
    rut: "18887662-k",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "Eduardo Viñuela",
    paciente: "Hugo Sanchez",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "Raquel Villaseca",
    paciente: "Ana Sepulveda",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];
/**--------------------------------------------------------------------------------------------------------------------------- */

/* Ejercicio 3*/
const ResultadoPacientesDental = document.querySelector("#pacientesDental"); // captamos el elemento a utilizar

//recorre todos los pacientes del arreglo
dental.forEach((datosPacientes) => {
  ResultadoPacientesDental.innerHTML += `${datosPacientes.hora} ~ ${datosPacientes.especialista} ~ ${datosPacientes.paciente} ~ ${datosPacientes.rut} ~ ${datosPacientes.prevision}<br>`; // Concatena la información del paciente para imprimir ersta en el HTML
});

/******************************************************************************************************************************** */

/*Ejercicio 4 */

// Arreglo para almacenar todos los pacientes
const todosLosPacientes = [];

// Recorremos cada arreglo y agregamos los nombres de los pacientes con .push
radiologia.forEach(paciente => todosLosPacientes.push(paciente.paciente));
traumatologia.forEach(paciente => todosLosPacientes.push(paciente.paciente));
dental.forEach(paciente => todosLosPacientes.push(paciente.paciente));

// Captamos el elemento a utilizar
const listaPacientes = document.querySelector("#listaPacientes");

// Imprimimos los nombres de los pacientes en un solo párrafo
listaPacientes.innerHTML = todosLosPacientes.join("<br>");

/**--------------------------------------------------------------------------------------------------------------------------- */

/*Ejercicio 5 */

// Filtramos los paciente previsión ISAPRE
const pacientesIsapre = dental.filter(paciente => paciente.prevision === "ISAPRE");

// Creamos un arreglo con el nombre del paciente concatenado con su previsión
const nombresConPrevisionIsapre = pacientesIsapre.map(paciente => `${paciente.paciente} - ${paciente.prevision}`);

// Captamos el elemento 
const previsionIsapreDental = document.querySelector("#previsionIsapreDental");

// Mostramos los nombres de los pacientes con la previsión ISAPRE en el HTML
previsionIsapreDental.innerHTML = nombresConPrevisionIsapre.join("<br>");

/**------------------------------------------------------------------------------------------------------------------------------ */

/*Ejercicio 6 */

// Filtramos los pacientes con la previsión FONASA
const pacientesFonasa = traumatologia.filter(paciente => paciente.prevision === "FONASA");

// Creamos un arreglo con el nombre del paciente concatenado con su previsión
const nombresConPrevisionFonasa = pacientesFonasa.map(paciente => `${paciente.paciente} - ${paciente.prevision}`);

// Captamos el elemento donde se mostrarán los pacientes con previsión FONASA
const previsionFonasaTraumatologia = document.querySelector("#previsionFonasaTraumatologia");

// Mostramos los nombres de los pacientes con la previsión FONASA en el HTML
previsionFonasaTraumatologia.innerHTML = nombresConPrevisionFonasa.join("<br>");