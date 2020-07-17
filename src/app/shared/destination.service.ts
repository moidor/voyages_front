import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  private baseUrl = 'http://localhost:8080/api/destinations';

  constructor(private http: HttpClient) { }

  getDestination(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDestination(destination: any): Observable<any> {
    return this.http.post(this.baseUrl, destination);
  }

  updateDestination(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteDestination(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getDestinationsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // Chercher une destination par année de publication
  getDestinationByYear(year: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/year/${year}`);
  }

  // Chercher une destination par son titre
  getDestinationByName(title: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/title/${title}`);
  }

  // Chercher une destination par un mot contenu dans l'article
  getDestinationByArticle(article: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/article/${article}`);
  }

  /* GET heroes whose name contains search term
  searchDestinationName(term: string): Observable<Destination[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Destination[]>(`${this.baseUrl}/?name=${term}`);
  }*/

}
