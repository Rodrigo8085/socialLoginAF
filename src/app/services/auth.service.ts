import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FirebaseApp } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private afAuth: AngularFireBaseAuth 
  ) { }

  execute(path: string, bodyJson: any
    ): Observable<HttpClient> {
      return this.http.post<any>(path, bodyJson);
  }
}
