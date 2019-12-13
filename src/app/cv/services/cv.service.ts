import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const API_LINK = 'https://immense-citadel-91115.herokuapp.com/api/personnes';
@Injectable({
  providedIn: 'root'
})
export class CvService {
  selectedItem = new Subject<Personne>();
  personnes: Personne[];
  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 37, 'as.jpg', 77777),
      new Personne(2, 'zidan', 'zizou', 'Coach', 47, 'zizou.jpeg', 77777),
      new Personne(3, 'zidan', 'zizou', 'Coach', 47, '      ', 77777)
    ];
  }
  getFakePersonnes(): Personne[] {
    return this.personnes;
  }
  getPersonnes(): Observable<Personne[]> {
     return  this.http.get<Personne[]>(API_LINK);
  }
  // findPersonneById(id): Personne {
  //   return this.personnes.find(personne => personne.id === +id);
  // }
  findPersonneById(id): Observable<Personne> {
    return this.http.get<Personne>(API_LINK + `/${id}`);
  }
  deletePersonneById(id) {

    return this.http.delete(API_LINK + `/${id}`);
  }
  selectPersonne(personne: Personne) {
    this.selectedItem.next(personne);
  }
}
