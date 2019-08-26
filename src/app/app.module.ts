import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from '/footer/content/content.component';
import { ItunesService } from './itunes.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, HelloComponent, FooterComponent, HeaderComponent, ContentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ItunesService]
})
export class AppModule { }
