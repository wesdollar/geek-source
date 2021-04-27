import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { CommonPortalData } from "src/app/models/commonPortalData.interface";

@Component({
  selector: "app-product-display",
  templateUrl: "./product-display.component.html",
  styleUrls: ["./product-display.component.scss"],
})
export class ProductDisplayComponent implements OnChanges {
  @Input() productData: CommonPortalData;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.productData);
  }
}
