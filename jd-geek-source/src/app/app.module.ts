import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IconsModule } from "./modules/icons.module";
import { CoreModule } from "./modules/core.module";
import { CommonFeatureModule } from "./modules/common.module";
import { SpecailFeatureModule } from "./modules/special.module";
import { AppComponent } from "./app.component";
import { BestBuyService } from "./services/best-buy.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    IconsModule,
    CommonFeatureModule,
    CoreModule,
    SpecailFeatureModule,
  ],
  providers: [BestBuyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
