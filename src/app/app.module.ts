import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BannerInlineComponent } from './banner-inline.component';
import { BannerComponent } from './banner.component';





@NgModule({
  declarations: [BannerInlineComponent, BannerComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BannerInlineComponent]
})
export class AppModule { }
