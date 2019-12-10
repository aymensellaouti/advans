import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  defaultColor = 'yellow';
  color = this.defaultColor;
  two = 'Bonjour';
  constructor() { }
  ngOnInit() {
  }
  changeColor(color: string) {
    this.color = color;
  }
  resetColor() {
    this.color = this.defaultColor;
  }
}
