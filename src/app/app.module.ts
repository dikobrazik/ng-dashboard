import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, IconSpriteModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
