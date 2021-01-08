import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// component
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
// material 
import { MatIconModule } from '@angular/material/icon';
//service
import { DataSourceService } from '@core/services/data-source.service';
// store
import { StoreModule } from '@ngrx/store';
import { BannerComponent } from './components/banner/banner.component';
import { NewsComponent } from './components/news/news.component';
import { MenuComponent } from './components/menu/menu.component';
import { PinnedHeaderDirective } from './core/directives/pinned-header.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    BannerComponent,
    NewsComponent,
    MenuComponent,
    PinnedHeaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [
    DataSourceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
