import { LoginCrudComponent } from './modais/login-crud/login-crud.component';
import { NoticeCrudComponent } from './notice-crud/notice-crud.component';
import { HeaderComponent } from './header/header.component';
import { Routes } from '@angular/router';
import { NoticeComponent } from './notice/notice.component';
import { ContactComponent } from './contact/contact.component';
import { CardFeedComponent } from './card-feed/card-feed.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'feed', component: FeedPageComponent},
    {path: 'about-Us', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'service', component: ServiceComponent}
];
