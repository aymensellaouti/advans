import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  imageObservable: Observable<string>;
  paths = [
    '404.png',
    'as.jpg',
    'cv.png',
    'zizou.jpeg'
  ];
  path = 'cv.png';
  constructor() {
  }

  ngOnInit() {
    const observable = new Observable<number>(
      (observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    observable.subscribe((val) => {
      console.log(val);
    });
    this.imageObservable = new Observable<string>(
      (observer) => {
        let i = 0;
        setInterval(
          () => {
            if (i === this.paths.length) {
              i = 0;
            }
            observer.next(this.paths[i++]);
          }, 1000);
      }
    )
    observable.subscribe(
      (numero) => console.log(numero * 2),
      (erreur) => console.log(erreur),
      () => console.log('fin du traitement ...')
    );
    this.imageObservable.subscribe(
      (path) => this.path = path
    );
  }

}
