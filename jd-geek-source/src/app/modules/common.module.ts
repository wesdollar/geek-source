import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";
import { IconsModule } from "../modules/icons.module";
import { ButtonComponent } from "../components/common/button/button.component";
import { TemplateDrivenDropdownMenuComponent } from "../components/common/template-driven-dropdown-menu/template-driven-dropdown-menu.component";
import { VerticalDropdownMenuComponent } from "../components/common/vertical-dropdown-menu/vertical-dropdown-menu.component";
import { ProductDisplayPortalComponent } from "../components/common/product-display-portal/product-display-portal.component";
import { ProductRatingsComponent } from "../components/common/product-ratings/product-ratings.component";
import { SectionheaderComponent } from "../components/common/sectionheader/sectionheader.component";
import { FoldoutComponent } from "../components/common/foldout/foldout.component";
import { AccordianComponent } from "../components/common/accordian/accordian.component";
import { AccordianGroupComponent } from "../components/common/accordian/accordian-group.component";

@NgModule({
  declarations: [
    ButtonComponent,
    TemplateDrivenDropdownMenuComponent,
    VerticalDropdownMenuComponent,
    ProductDisplayPortalComponent,
    ProductRatingsComponent,
    SectionheaderComponent,
    FoldoutComponent,
    AccordianComponent,
    AccordianGroupComponent,
  ],
  exports: [
    ButtonComponent,
    TemplateDrivenDropdownMenuComponent,
    VerticalDropdownMenuComponent,
    ProductDisplayPortalComponent,
    ProductRatingsComponent,
    SectionheaderComponent,
    FoldoutComponent,
    AccordianComponent,
    AccordianGroupComponent,
  ],
  imports: [CommonModule, AppRoutingModule, IconsModule],
})
export class CommonFeatureModule {}
