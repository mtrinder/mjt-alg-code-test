import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AlertModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallbackPipe } from './callback.pipe';

// Components
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConsumeComponent } from './consume/consume.component';

@NgModule({
  declarations: [
    AppComponent,
    CallbackPipe,
    AboutComponent,
    ConsumeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TabsModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
