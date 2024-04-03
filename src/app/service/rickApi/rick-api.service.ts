import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultRM } from '../../models/rickAndMortyAPI/resultsRM';

@Injectable({
  providedIn: 'root'
})
export class RickApiService {

  constructor(private http:HttpClient) { }
  url:string = "https://rickandmortyapi.com/api/character?page="

  getchars(page:number):Observable<ResultRM>{
    return this.http.get<ResultRM>(this.url+page)
  }

}
