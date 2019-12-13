import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CvService} from '../services/cv.service';
import {Personne} from '../Model/personne';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css']
})
export class DetailPersonneComponent implements OnInit {
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (mesParams) => {
        this.cvService.findPersonneById(mesParams.id).subscribe(
          (personne) => {
          this.personne = personne;
        },
          (erreur) => {
            this.router.navigate(['']);
          }
          );
        /*
            Todo
            Create component
             Update routing
             Find personne by Name in service
             finish function in component
        */
      }
    );
    // this.activatedRoute.queryParams.subscribe(
    //   (qp) => {
    //     console.log(qp);
    //   }
    // );
  }
  deletePersonne() {
    this.cvService.deletePersonneById(this.personne.id).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['cv']);
      },
      (erreur) => console.log(erreur)
    );
  }
}
