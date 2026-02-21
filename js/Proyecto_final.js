// Sistema de gestión de estudiantes
const universidad = {
 nombre: 'Universidad TechnoWeb',
 estudiantes: [],

 agregarEstudiante: function(nombre, carrera, semestre) {
 const estudiante = {
 id: Math.floor(Math.random() * 1000),
 nombre: nombre,
 carrera: carrera,
 semestre: semestre,
 activo: true
 };

 this.estudiantes.push(estudiante);
 return `Estudiante ${nombre} registrado con ID: ${estudiante.id}`;
 },

 buscarEstudiante: function(nombre) {
 return this.estudiantes.find(est =>
 est.nombre.toLowerCase().includes(nombre.toLowerCase())
 );
 },

 mostrarEstadisticas: function() {
 const total = this.estudiantes.length;
 const activos = this.estudiantes.filter(est => est.activo).length;

 return {
 totalEstudiantes: total,
 estudiantesActivos: activos,
 universidad: this.nombre
 };
 }
};
// Usar el sistema
console.log(universidad.agregarEstudiante('Ana García', 'Ingeniería de Sistemas', 3));
console.log(universidad.agregarEstudiante('Carlos López', 'Ingeniería Industrial', 5));
const estadisticas = universidad.mostrarEstadisticas();
console.log(`${estadisticas.universidad}: ${estadisticas.totalEstudiantes} estudiantes registrados`);
