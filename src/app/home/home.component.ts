
import { MovieDbService } from './../service/movieDb/movieDb.service';
import { Component, OnInit } from '@angular/core';
import { ResumeDB } from '../models/db-movie/resumeDB';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit {
  resume!:ResumeDB

  constructor(private movieDbService:MovieDbService){}

  ngOnInit(): void {
    this.movieDbService.getResume().subscribe(
      (data) => {
        this.resume = data.results[0]
        console.log(this.resume)
      },
      (erro) =>{
        console.error(erro)
      }
    )
  }

}
