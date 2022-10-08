import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export abstract class IBaseService {
  protected RESOURCE_BASE_URL: string = '';
  constructor(protected httpClient: HttpClient) {}

  logger() {
    console.log('Products - ApiService');
    /* Podemos usar un logger para mostrar informació super util en los diferentes ambientes */
  }

  handleErrors(error: HttpErrorResponse): Observable<never> {
    if (error.status == HttpStatusCode.Forbidden) return throwError('No tiene permisos para realizar la solicitud.');
    if (error.status == HttpStatusCode.NotFound) return throwError('El producto no existe.');
    if (error.status == HttpStatusCode.InternalServerError) return throwError('Error en el servidor.');
    return throwError('Un error inesperado ha ocurrido.');
  }
}
