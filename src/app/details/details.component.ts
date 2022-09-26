import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Farm } from '../models/Farm';
import { FarmService } from '../services/farm.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  farm: Farm = {} as Farm
  id
  navigationState

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private farmService: FarmService
    ) {
    this.navigationState = this.router.getCurrentNavigation()?.extras.state 
  }
 
  ngOnInit(): void {
    if(this.navigationState) { 
      this.route.paramMap.subscribe(params => { this.id = params.get('id') })
      this.farm = this.navigationState[0].data 
      console.log(this.farm);
      
    } else { 
      this.route.paramMap.subscribe(params => { this.id = params.get('id') }) 

      if(Number.isNaN(Number(this.id)) || typeof this.id !== 'string') { 
        this.router.navigate([''])
      }
      
      this.farmService.read(this.id).subscribe((data: any ) => {
        this.farm = data  
        console.log(this.farm)
        
      }, (err) => { this.router.navigate(['']) })  
    } 
  }

  delete() {
    this.farmService.delete(this.id)
      .subscribe()
      .add(() => {this.router.navigate([''])})
  }  
}
