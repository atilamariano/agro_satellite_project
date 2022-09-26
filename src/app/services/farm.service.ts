import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Farm } from './../models/Farm'

@Injectable({
  providedIn: 'root',
})
export class FarmService {
  constructor(private http: HttpClient) {}

  create(farm: Farm): Observable<any> {
    return this.http.post('http://localhost:3000/farms', farm)
  }

  read(id: number): Observable<Farm> {
    return this.http.get<Farm>(`http://localhost:3000/farms/${id}`)
  }

  list(): Observable<Farm[]> {
    return this.http.get<Farm[]>('http://localhost:3000/farms')
  }

  update(id: number, farm: Farm): Observable<any>{
    return this.http.put(`http://localhost:3000/farms/${id}`, farm)
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/farms/${id}`)
  }
}
