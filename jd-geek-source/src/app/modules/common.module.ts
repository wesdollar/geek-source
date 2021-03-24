import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";
import { IconsModule } from "../modules/icons.module";
import { ButtonComponent } from "../components/common/button/button.component";
import { TemplateDrivenDropdownMenuComponent } from "../components/common/template-driven-dropdown-menu/template-driven-dropdown-menu.component";
import { VerticalDropdownMenuComponent } from "../components/common/vertical-dropdown-menu/vertical-dropdown-menu.component";
import { ProductDisplayPortalComponent } from "../components/common/product-display-portal/product-display-portal.component";
import { ProductRatingsComponent } from "../components/common/product-ratings/product-ratings.component";

@NgModule({
  declarations: [
    ButtonComponent,
    TemplateDrivenDropdownMenuComponent,
    VerticalDropdownMenuComponent,
    ProductDisplayPortalComponent,
    ProductRatingsComponent,
  ],
  exports: [
    ButtonComponent,
    TemplateDrivenDropdownMenuComponent,
    VerticalDropdownMenuComponent,
    ProductDisplayPortalComponent,
    ProductRatingsComponent,
  ],
  imports: [CommonModule, AppRoutingModule, IconsModule],
})
export class CommonFeatureModule {}
