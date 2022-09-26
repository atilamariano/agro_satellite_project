import { Component } from '@angular/core'
import { Farm } from '../models/Farm';
import { FarmService } from '../services/farm.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  farms: Farm[] = []

  constructor(private farmService: FarmService) {}

  ngOnInit(): void {
    this.farmService.list().subscribe((data: Farm[] ) => {
      this.farms = data 
    }, (err) => { console.log(err) })  
  }
}
