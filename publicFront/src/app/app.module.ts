import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes} from '@angular/router';
import { CardFeedComponent } from './card-feed/card-feed.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { FeedPageComponent } from './feed-page/feed-page.component';

const appRoutes: Routes = [
  {path : 'header', component: HeaderComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardFeedComponent,
    FeedPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
