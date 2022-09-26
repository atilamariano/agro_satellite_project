import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { Router } from '@angular/router';
import { FarmService } from '../services/farm.service'
import { FormBuilder, FormGroup } from '@angular/forms'

interface RegisterFormParams {
  id: number,
  name: string,
  owner_id: number,
  geometry: {
    type: string;
    coordinates: [][];
  },
  centroid: number[],
  area: number,
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formValues: RegisterFormParams = {} as RegisterFormParams
  registerForm: FormGroup = {} as FormGroup
  navigationState
  
  constructor(
    private farmService: FarmService,
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location,
  ) {
    this.navigationState = this.router.getCurrentNavigation()?.extras.state     
   }

  ngOnInit(): void {
    if(this.navigationState) this.formValues = this.navigationState[0].data    
    console.log(this.formValues);
     

    this.registerForm = this.formBuilder.group({
      name: [this.formValues?.name],
      owner_id: [this.formValues?.owner_id],
      geometry_type: [this.formValues.geometry?.type],
      geometry_coordinates: [this.formValues.geometry?.coordinates], 
      centroid: [this.formValues?.centroid],
      area: [this.formValues?.area],
    })
  }

  // submitForm suporta criar nova fazenda e atualizar fazenda existente
  submitForm() {
    const farm = {
      name: this.registerForm.value.name,
      owner_id: this.registerForm.value.owner_id,
      geometry: {
        type: this.registerForm.value.geometry_type,
        coordinates: this.registerForm.value.geometry_coordinates
      },
      centroid: this.registerForm.value.centroid,
      area: this.registerForm.value.area,
    } 

    if(this.formValues.id) this.updateFarm(farm)
    else this.createFarm(farm)
  }

  createFarm(farm) {
    this.farmService.create(farm)
      .subscribe()
      .add(() => {this.router.navigate([''])})
  }

  updateFarm(farm) { 
    this.farmService.update(this.formValues.id, farm)
      .subscribe()
      .add(() => {this.router.navigate([''])})
  }

  navigateBack() { this.location.back() }
}