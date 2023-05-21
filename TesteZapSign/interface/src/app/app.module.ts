import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CompaniesComponent } from './companies/companies.component';
import { UsersService } from './users.service';
import { CompaniesService } from './companies.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CompaniesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpClientModule, UsersService, CompaniesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
