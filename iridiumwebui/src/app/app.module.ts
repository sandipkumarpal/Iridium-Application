import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { ParticlesModule } from 'angular-particle';
import { ParticleEffectButtonModule } from "angular-particle-effect-button";
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HomeComponent } from './container/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './container/contact/contact.component';
import { FeedbackComponent } from './container/feedback/feedback.component';
import { GalleryComponent } from './container/gallery/gallery.component';
import { IridiumComponent } from './container/iridium/iridium.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundComponent } from './container/notfound/notfound.component';
import { LogoComponent } from './components/logo/logo.component';
import { TitleComponent } from './components/title/title.component';
import { HomeLoaderComponent } from './components/homeLoader/homeLoader.component';
import { HomeBubbleComponent } from './components/homeBubble/homeBubble.component';
import { HomeBlockComponent } from './container/homeBlock/homeBlock.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { HomeBlockContentComponent } from './container/homeBlockContent/homeBlockContent.component';

import { DataService } from './common/services/data.service';
import { FirebaseService } from './common/services/firebase.service';
import { EmailsendService } from './common/services/emailsend.service';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    FeedbackComponent,
    GalleryComponent,
    IridiumComponent,
    NotFoundComponent,
    NavigationComponent,
    LogoComponent,
    TitleComponent,
    HomeLoaderComponent,
    HomeBubbleComponent,
    HomeBlockComponent,
    BlocksComponent,
    HomeBlockContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GalleryModule.forRoot(),
    LightboxModule.forRoot(),
    AngularFontAwesomeModule,
    ParticlesModule,
    ParticleEffectButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, data: { state: 'home'} },
      { path: 'home', component: HomeBlockComponent, data: { state: 'homecontent'} },
      { path: 'home/:id', component: HomeBlockContentComponent, data: { state: 'homedetails'} },
      { path: 'contact', component: ContactComponent, data: { state: 'contact'} },
      { path: 'feedback', component: FeedbackComponent, data: { state: 'feedback'} },
      { path: 'gallery', component: GalleryComponent, data: { state: 'gallery'} },
      { path: 'iridium', component: IridiumComponent, data: { state: 'iridium'} },
      { path: '**', component: NotFoundComponent, data: { state: 'notfound'} }
    ]),
    // SlickCarouselModule
  ],
  entryComponents: [
    HomeComponent,
  ],
  providers: [DataService, FirebaseService, EmailsendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
