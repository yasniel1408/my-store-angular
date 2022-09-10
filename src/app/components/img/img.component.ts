import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {
  @Input() imgUrl = '';

  @Output() loaded = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  imgError() {
    this.imgUrl = './assets/images/default.png';
  }

  loadImg() {
    console.log('LOG HIJO, loaded');
    this.loaded.emit();
  }
}
