import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconsModule } from "../modules/icons.module";
import { CommonFeatureModule } from "../modules/common.module";
import { ProductShowcaseComponent } from "../components/special/product-showcase/product-showcase.component";
import { ShopByCategoryComponent } from "../components/special/shop-by-category/shop-by-category.component";
import { HeroImageComponent } from "../components/special/hero-image/hero-image.component";
import { FeaturedProductsComponent } from "../components/special/featured-products/featured-products.component";
import { DailyDealsComponent } from "../components/special/daily-deals/daily-deals.component";
import { HottestDealsComponent } from "../components/special/hottest-deals/hottest-deals.component";
import { HeroDisplayComponent } from "../components/special/hero-display/hero-display.component";

@NgModule({
  declarations: [
    ProductShowcaseComponent,
    ShopByCategoryComponent,
    HeroImageComponent,
    FeaturedProductsComponent,
    DailyDealsComponent,
    HottestDealsComponent,
    HeroDisplayComponent,
  ],
  exports: [
    ProductShowcaseComponent,
    ShopByCategoryComponent,
    HeroImageComponent,
    FeaturedProductsComponent,
    DailyDealsComponent,
    HottestDealsComponent,
    HeroDisplayComponent,
  ],
  imports: [IconsModule, CommonFeatureModule, CommonModule],
})
export class SpecailFeatureModule {}
