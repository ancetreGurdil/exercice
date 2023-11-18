import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquationService {

  private baseUrl = 'http://localhost:8080/equation-results';

  constructor(private http: HttpClient) { }

  // Déclencher l'appel de l'algorithme
  triggerAlgorithm(): Observable<any> {
    return this.http.post(`${this.baseUrl}/recalculer`, {});
  }

  // Mettre à jour le résultat
  updateResult(id: number, updatedResult: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, updatedResult);
  }

  // Supprimer le résultat
  deleteResult(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
