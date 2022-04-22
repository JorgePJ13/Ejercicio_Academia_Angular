import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Alumno } from "../model/Alumno";


@Injectable({
    providedIn : 'root'
})
export class AlumnosService {
    //urlAlumnos : string = "http://localhost:8080/07_Academia/Buscador"
    urlAlumnos : string = "Buscador"
   //urlCursos : string = "http://localhost:8080/07_Academia/Cursos"
    urlCursos : string = "Cursos"

    constructor(private http : HttpClient) {}

    buscarAlumno(curso : string) {
        return this.http.get<Alumno[]>(this.urlAlumnos, {params:{curso:curso}})
    }

    buscarCursos() {
        return this.http.get<String[]>(this.urlCursos)
    }
}