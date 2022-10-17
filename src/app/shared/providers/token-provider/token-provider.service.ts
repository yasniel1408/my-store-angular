import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenProviderService {
  private TOKEN_KEY: string = 'access_token';

  constructor() {}

  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  existToken(): boolean {
    return !!this.getToken();
  }
}
