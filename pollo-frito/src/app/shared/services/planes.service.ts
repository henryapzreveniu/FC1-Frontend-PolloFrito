import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

export interface ServerResponse {
  data: Plan[]
}


export interface Plan {
  id: number;
  slug: string;
  frequency: string;
  title: string;
}
@Injectable({
  providedIn: 'root',
})
export class PlanesService {
  constructor(private http: HttpClient) {}

  
}
