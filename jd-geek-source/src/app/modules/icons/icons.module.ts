import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchIconComponent } from "../../components/icons/search-icon/search-icon.component";
import { ShoppingCartIconComponent } from "../../components/icons/shopping-cart-icon/shopping-cart-icon.component";
import { AngleRightIconComponent } from "../../components/icons/angle-right-icon/angle-right-icon.component";
import { AngleLeftIconComponent } from "../../components/icons/angle-left-icon/angle-left-icon.component";
import { FilledStarIconComponent } from "../../components/icons/filled-star-icon/filled-star-icon.component";
import { EmptyStarIconComponent } from "../../components/icons/empty-star-icon/empty-star-icon.component";
import { HalfStarIconComponent } from "../../components/icons/half-star-icon/half-star-icon.component";
import { CartPlusIconComponent } from "../../components/icons/cart-plus-icon/cart-plus-icon.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchIconComponent,
    ShoppingCartIconComponent,
    AngleLeftIconComponent,
    AngleRightIconComponent,
    FilledStarIconComponent,
    EmptyStarIconComponent,
    HalfStarIconComponent,
    CartPlusIconComponent,
  ],
})
export class IconsModule {}
