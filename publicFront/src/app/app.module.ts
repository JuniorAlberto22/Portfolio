import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path : 'header', component: HeaderComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
