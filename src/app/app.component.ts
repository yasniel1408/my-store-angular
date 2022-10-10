import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}

  // Esto es para subir acrchivos
  // uploadFile(file: Blob): Observable<any> {
  //   const form = new FormData();
  //   form.append('file', file);
  //   return this.http.post(`https://example.com/api/files`, form, {
  //     headers: {
  //       'Content-type': 'multipart/form-data',
  //     },
  //   });
  // }
  // onLoad(event: Event): void {
  //   const element = event.target as HTMLInputElement;
  //   const file = element.files?.item(0);
  //   if (file) {
  //     this.filesService.uploadFile(file).subscribe((res) => {
  //       console.log(res);
  //     });
  //   }
  // }
}
