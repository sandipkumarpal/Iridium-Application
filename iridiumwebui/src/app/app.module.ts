import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { SlickCarouselModule } from 'ngx-slick-carousel';


import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HomeComponent } from './container/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './container/intro/intro.component';
import { AboutComponent } from './container/about/about.component';
import { ContactComponent } from './container/contact/contact.component';
import { DrdoComponent } from './container/drdo/drdo.component';
import { FeedbackComponent } from './container/feedback/feedback.component';
import { GalleryComponent } from './container/gallery/gallery.component';
import { IridiumComponent } from './container/iridium/iridium.component';
import { ProcedureComponent } from './container/procedure/procedure.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundComponent } from './container/notfound/notfound.component';
import { LogoComponent } from './components/logo/logo.component';
import { TitleComponent } from './components/title/title.component';
import { staticBannerComponent } from './components/staticBanner/staticBanner.component';
import { HomeLoaderComponent } from './components/homeLoader/homeLoader.component';
import { HomeBubbleComponent } from './components/homeBubble/homeBubble.component';
import { HomeBlockComponent } from './container/homeBlock/homeBlock.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { HomeBlockContentComponent } from './container/homeBlockContent/homeBlockContent.component';

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
    NavigationComponent,
    LogoComponent,
    TitleComponent,
    staticBannerComponent,
    HomeLoaderComponent,
    HomeBubbleComponent,
    HomeBlockComponent,
    BlocksComponent,
    HomeBlockContentComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeBlockComponent },
      { path: 'home/:id', component: HomeBlockContentComponent },
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
    // SlickCarouselModule
  ],
  entryComponents: [
    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
