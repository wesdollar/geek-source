import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SearchIconComponent } from "../../components/icons/search-icon/search-icon.component";
import { ShoppingCartIconComponent } from "../../components/icons/shopping-cart-icon/shopping-cart-icon.component";
import { AngleRightIconComponent } from "../../components/icons/angle-right-icon/angle-right-icon.component";
import { AngleLeftIconComponent } from "../../components/icons/angle-left-icon/angle-left-icon.component";
import { FilledStarIconComponent } from "../../components/icons/filled-star-icon/filled-star-icon.component";
import { EmptyStarIconComponent } from "../../components/icons/empty-star-icon/empty-star-icon.component";
import { HalfStarIconComponent } from "../../components/icons/half-star-icon/half-star-icon.component";
import { CartPlusIconComponent } from "../../components/icons/cart-plus-icon/cart-plus-icon.component";
import { FreeShippingIconComponent } from "../../components/icons/free-shipping-icon/free-shipping-icon.component";
import { ZeroPercentFinancingIconComponent } from "../../components/icons/zero-percent-financing-icon/zero-percent-financing-icon.component";
import { FreeTechSupportIconComponent } from "../../components/icons/free-tech-support-icon/free-tech-support-icon.component";
import { AngleDownIconComponent } from "../../components/icons/angle-down-icon/angle-down-icon.component";
import { CCVisaIconComponent } from "../../components/icons/cc-visa-icon/cc-visa-icon.component";
import { CcMastercardIconComponent } from "../../components/icons/cc-mastercard-icon/cc-mastercard-icon.component";
import { CcAmexIconComponent } from "../../components/icons/cc-amex-icon/cc-amex-icon.component";
import { CcApplePayIconComponent } from "../../components/icons/cc-apple-pay-icon/cc-apple-pay-icon.component";

@NgModule({
  declarations: [
    SearchIconComponent,
    ShoppingCartIconComponent,
    AngleLeftIconComponent,
    AngleRightIconComponent,
    FilledStarIconComponent,
    EmptyStarIconComponent,
    HalfStarIconComponent,
    CartPlusIconComponent,
    FreeShippingIconComponent,
    ZeroPercentFinancingIconComponent,
    FreeTechSupportIconComponent,
    AngleDownIconComponent,
    CCVisaIconComponent,
    CcMastercardIconComponent,
    CcAmexIconComponent,
    CcApplePayIconComponent,
  ],
  exports: [
    SearchIconComponent,
    ShoppingCartIconComponent,
    AngleLeftIconComponent,
    AngleRightIconComponent,
    FilledStarIconComponent,
    EmptyStarIconComponent,
    HalfStarIconComponent,
    CartPlusIconComponent,
    FreeShippingIconComponent,
    ZeroPercentFinancingIconComponent,
    FreeTechSupportIconComponent,
    AngleDownIconComponent,
    CCVisaIconComponent,
    CcMastercardIconComponent,
    CcAmexIconComponent,
    CcApplePayIconComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
})
export class IconsModule {}
