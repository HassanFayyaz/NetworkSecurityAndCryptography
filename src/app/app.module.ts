import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { MainComponentComponent } from './main-component/main-component.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { VigenereComponent } from './vigenere/vigenere.component';
import { SubstitutionComponent } from './substitution/substitution.component';
import { PlayfairComponent } from './playfair/playfair.component';
import { RailfenceComponent } from './railfence/railfence.component'


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    VigenereComponent,
    SubstitutionComponent,
    PlayfairComponent,
    RailfenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
