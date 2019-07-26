import { HeaderComponent } from './header/header.component';
import { Routes } from '@angular/router';
import { NoticeComponent } from './notice/notice.component';
import { ContactComponent } from './contact/contact.component';
import { CardFeedComponent } from './card-feed/card-feed.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
    {path: '', component: CardFeedComponent},
    {path: 'home', component: CardFeedComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'service', component: ServiceComponent},
]