import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 'teacher', 37, 'as.jpg', 77777),
      new Personne(2, 'zidan', 'zizou', 'Coach', 47, 'zizou.jpeg', 77777),
      new Personne(3, 'zidan', 'zizou', 'Coach', 47, '      ', 77777)
    ];
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }
}
