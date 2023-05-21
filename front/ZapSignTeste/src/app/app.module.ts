import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { DocComponent } from './doc/doc.component';
import { UserComponent } from './user/user.component';

import { HttpClientModule } from '@angular/common/http';

import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    DocComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
