import { Component } from '@angular/core';
import { OverlayService } from '../../services/overlay.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  number: number;
  constructor(private overlayService: OverlayService) {
    this.number = 1;
  }

  onClose() {
    this.overlayService.closeDialog.next(true);
  }

  openImage(id: any) {
    if (id == 1) {
      this.number = 1;
    }
    if (id == 2) {
      this.number = 2;
    }
    if (id == 3) {
      this.number = 3;
    }
    if (id == 4) {
      this.number = 4;
    }
  }

  onPrevious() {
    this.number = this.number - 1;
    if (this.number == 0) {
      this.number = 4;
    }
  }

  onNext() {
    this.number = this.number + 1;
    if (this.number == 4 || this.number == 5) {
      this.number = 1;
    }
  }
}
