import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  isHidden = false;
  constructor() { }
  ngOnInit() {
  }
  showHide(element) {
    console.log(element);
    this.isHidden = !this.isHidden;
  }
}
