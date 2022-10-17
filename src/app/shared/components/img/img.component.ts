import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent {
  height: string = '220';

  @Input() imgUrl: string = './assets/images/default.png';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('height')
  set changeHeight(height: string) {
    this.height = height;
  }

  @Input() objectFit: string = 'cover';

  @Output() loaded = new EventEmitter<string>();

  constructor() {}

  imgError() {
    this.imgUrl = './assets/images/default.png';
  }

  loadImg() {
    this.loaded.emit('HOLAAA DESDE EL HIJO AL PADRE');
  }
}
