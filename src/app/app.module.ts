import { scrollToFoodMenuReducer, scrollToLocationReducer, scrollToSpecialReducer, scrollToWineMenuReducer } from './core/store/reducers';
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
import { AppService } from '@core/services/app.service';
// store
import { StoreModule } from '@ngrx/store';
import { BannerComponent } from './components/banner/banner.component';
import { NewsComponent } from './components/news/news.component';
import { PinnedHeaderDirective } from './core/directives/pinned-header.directive';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { WineMenuComponent } from './components/wine-menu/wine-menu.component';
import { SpecialMenuComponent } from './components/special-menu/special-menu.component';
import { LocationComponent } from './components/location/location.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeadComponent } from './components/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    BannerComponent,
    NewsComponent,
    PinnedHeaderDirective,
    NavigationComponent,
    FoodMenuComponent,
    WineMenuComponent,
    SpecialMenuComponent,
    LocationComponent,
    FooterComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    StoreModule.forRoot({
      scrollToSpecial: scrollToSpecialReducer,
      scrollToFoodMenu: scrollToFoodMenuReducer,
      scrollToWineMenu: scrollToWineMenuReducer,
      scrollToLocation: scrollToLocationReducer
    })
  ],
  providers: [
    DataSourceService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
