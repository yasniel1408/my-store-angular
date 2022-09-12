import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {
  height: string = '220';

  @Input() imgUrl: string = './assets/images/default.png';

  @Input('height')
  set changeHeight(height: string) {
    this.height = height;
    // mas code y verificaciones parar un input especifico
    console.log('ESTE ES UN CASO EN QUE SE CUSTOMISA UN HEIGHT: ', height);
  }

  @Input() objectFit: string = 'cover';

  @Output() loaded = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  imgError() {
    this.imgUrl = './assets/images/default.png';
  }

  loadImg() {
    console.log('LOG HIJO, loaded');
    this.loaded.emit('HOLAAA DESDE EL HIJO AL PADRE');
  }
}
