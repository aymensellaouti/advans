import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../Model/personne';
import {Router} from '@angular/router';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() personne: Personne;
  constructor(
    private router: Router,
    private cvService: CvService
  ) { }

  ngOnInit() {
    this.cvService.selectedItem.subscribe(
      (personne) => {
        this.personne = personne;
      }
    );
  }

  goDetails() {
    this.router.navigate(['cv', this.personne.id]);
  }
}
