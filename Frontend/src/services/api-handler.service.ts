import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  private apiUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) { }

  postData(data: Object, URI: String) {
    let toReturn = this.http.post<any>(`${this.apiUrl}/${URI}`, data);
    return toReturn;
  }

  getData(URI: String) {
    let toReturn = this.http.get<any>(`${this.apiUrl}/${URI}`);
    return toReturn;
  }

}
