
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieDbService {


  constructor(private http:HttpClient) { }
   url:string = "https://api.themoviedb.org/3/search/tv?api_key=760785bf0f418019901845fbba091b40&query=rick%20and%20morty"

   getResume():Observable<any>{
    return this.http.get(this.url)
   }
   
}
