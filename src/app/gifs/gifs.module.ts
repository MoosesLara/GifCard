import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box';
import { CardlistComponent } from './components/cardlist/cardlist.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardlistComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
