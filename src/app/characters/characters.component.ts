import { Component, OnInit } from '@angular/core';
import { ResumeRM } from '../models/rickAndMortyAPI/resumeRM';
import { RickApiService } from '../service/rickApi/rick-api.service';
import { ResultRM } from '../models/rickAndMortyAPI/resultsRM';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent implements OnInit {
 characters!:ResultRM 
 page:number = 1
 
 constructor(private rickService:RickApiService){}

  ngOnInit() {
   this.rickService.getchars(this.page).subscribe(
    (data)=>{
      this.characters = data
      console.log(data)

    }
   )
  }
  nextPage(){
   this.page++
   this.rickService.getchars(this.page).subscribe(
    (data)=>{
      this.characters = data
      console.log(data)

    }
   )
  }
  previousPage(){
    this.page--
    this.rickService.getchars(this.page).subscribe(
      (data)=>{
        this.characters = data
        console.log(data)
  
      }
     )
   }


}
