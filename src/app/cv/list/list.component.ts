import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../Model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  @Output() forwardPersonne = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.personnes = [
     new Personne(1, 'sellaouti', 'aymen', 'teacher', 37, 'as.jpg', 77777),
     new Personne(2, 'zidan', 'zizou', 'Coach', 47, 'zizou.jpeg', 77777),
     new Personne(3, 'zidan', 'zizou', 'Coach', 47, '      ', 77777)
    ];
  }

  getSelectedPersonne(personne: Personne) {
    this.forwardPersonne.emit(
      personne
    );
  }
}
