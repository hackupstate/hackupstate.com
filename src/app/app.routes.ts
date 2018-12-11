import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent,
        data: {
            state: 'home'
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            state: 'about'
        }
    },
    {
        path: 'events',
        component: EventsComponent,
        data: {
            state: 'events'
        }
    },
    {
        path: 'sponsors',
        component: SponsorsComponent,
        data: {
            state: 'sponsors'
        }
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
        data: {
            state: 'sign-up'
        }
    },
    {
        path: 'faq',
        component: FaqComponent,
        data: {
            state: 'faq'
        }
    },
    {
        path: 'contact',
        component: ContactComponent,
        data: {
            state: 'contact'
        }
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled'
});
