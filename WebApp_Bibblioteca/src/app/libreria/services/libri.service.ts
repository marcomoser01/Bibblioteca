import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../domains/libro';

@Injectable()

export class LibriService {

  url : string =  "http://localhost:8099/api/libri"
  libro : Libro = new Libro();
  setLibro(libro: Libro) {
    this.libro = libro;
  }

  constructor(private http:HttpClient) {
    this.libro.id = -1;
  }
  
  // crud
  getAll(): Observable<Libro[]>{
    return this.http.get<Libro[]>(this.url);
  }

  canc(id:number){
    return this.http.delete(this.url+"/"+id);
  }

  add(libro:Libro){
    return this.http.post(this.url,libro);
  }
  update(libro:Libro){
    return this.http.put(this.url,libro);
  }


}
