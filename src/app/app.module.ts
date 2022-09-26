import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasemapComponent } from './basemap/basemap.component';
import { FarmComponent } from './farm/farm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableFilteringExampleComponent } from './dashboard/table-filtering-example/table-filtering-example.component';

@NgModule({
  declarations: [
    AppComponent,
    BasemapComponent,
    FarmComponent,
    DashboardComponent,
    DetailsComponent,
    RegisterComponent,
    TableFilteringExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
