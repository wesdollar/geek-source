import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconsModule } from "../modules/icons.module";
import { AppRoutingModule } from "../app-routing.module";
import { CommonFeatureModule } from "../modules/common.module";
import { SpecailFeatureModule } from "../modules/special.module";
import { HeaderComponent } from "../components/core/header/header.component";
import { FooterComponent } from "../components/core/footer/footer.component";
import { SearchComponent } from "../components/core/search/search.component";
import { LogoComponent } from "../components/core/logo/logo.component";
import { ShoppingCartComponent } from "../components/core/shopping-cart/shopping-cart.component";
import { HomeComponent } from "../components/core/home/home.component";
import { ServiceiconsbarComponent } from "../components/core/serviceiconsbar/serviceiconsbar.component";
import { ProductPageComponent } from "../components/core/product-page/product-page.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    LogoComponent,
    ShoppingCartComponent,
    HomeComponent,
    ServiceiconsbarComponent,
    ProductPageComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    LogoComponent,
    ShoppingCartComponent,
    HomeComponent,
    ServiceiconsbarComponent,
    ProductPageComponent,
  ],
  imports: [
    CommonModule,
    IconsModule,
    AppRoutingModule,
    CommonFeatureModule,
    SpecailFeatureModule,
  ],
})
export class CoreModule {}
