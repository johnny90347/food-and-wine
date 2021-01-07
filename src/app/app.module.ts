import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// component
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
// material 

//service
import { DataSourceService } from './services/data-source.service';
// store
import { StoreModule } from '@ngrx/store';
import { BannerComponent } from './components/banner/banner.component';
import { NewsComponent } from './components/news/news.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    BannerComponent,
    NewsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [
    DataSourceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
