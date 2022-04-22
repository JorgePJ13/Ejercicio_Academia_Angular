import { Component } from '@angular/core';
import { Alumno } from './model/Alumno';
import { AlumnosService } from './service/AlumnosService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'academia';
  curso : string
  alumnos : Alumno[]
  cursos : String[]

  constructor(private service : AlumnosService) {
    this.busquedaCursos();
  }

  busquedaAlumnos() {
    this.service.buscarAlumno(this.curso).subscribe(data => this.alumnos = data)
  }

  busquedaCursos() {
    this.service.buscarCursos().subscribe(data => this.cursos = data)
  }
}
