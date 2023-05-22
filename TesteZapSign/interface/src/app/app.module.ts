import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { DocsComponent } from './docs/docs.component';
import { CompaniesComponent } from './companies/companies.component';
import { UsersService } from './users.service';
import { CompaniesService } from './companies.service';
import { DocsService } from './docs.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CompaniesComponent,
    DocsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpClient, UsersService, CompaniesService, DocsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
