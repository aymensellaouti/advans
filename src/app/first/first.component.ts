import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  isHidden = false;
  @Input() maVariable = 'oldValue';
  @Output() sendDataToFather = new EventEmitter();
  constructor() { }
  ngOnInit() {
    console.log(this.maVariable);
  }
  showHide(element) {
    console.log(element);
    this.isHidden = !this.isHidden;
  }
  outputData() {
    this.sendDataToFather.emit(
      'salut papa'
    );
  }
}
