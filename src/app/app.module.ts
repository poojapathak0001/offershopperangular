import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { SearchComponent }   from './search/search.component';
import { SidebarComponent }  from './search/sidebar/sidebar.component';
import { SearchResultComponent }      from './search/search-result/search-result.component';
import { HeaderComponent }          from './shared/header/header.component';
import { FooterComponent }    from './shared/footer/footer.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    SidebarComponent,
    SearchResultComponent,
    HeaderComponent,
    FooterComponent
    
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }