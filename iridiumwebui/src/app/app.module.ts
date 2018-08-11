import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DrdoComponent } from './drdo/drdo.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GalleryComponent } from './gallery/gallery.component';
import { IridiumComponent } from './iridium/iridium.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { NotFoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HomeComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    ContactComponent,
    DrdoComponent,
    FeedbackComponent,
    GalleryComponent,
    IridiumComponent,
    ProcedureComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'intro', component: IntroComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'drdo', component: DrdoComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'iridium', component: IridiumComponent },
      { path: 'procedure', component: ProcedureComponent },
      { path: '**', component: NotFoundComponent }
    ]),
  ],
  entryComponents: [
    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
