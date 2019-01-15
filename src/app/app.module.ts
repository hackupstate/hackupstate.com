import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { JobsComponent } from './jobs/jobs.component';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    SponsorsComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    SignUpComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabViewModule,
    AccordionModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
