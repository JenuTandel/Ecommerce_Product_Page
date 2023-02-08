import { Component } from '@angular/core';
import { CartComponent } from 'src/app/shared/components/cart/cart.component';
import { OverlayService } from 'src/app/shared/services/overlay.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private overlayService: OverlayService) {}
  openSidebar() {
    this.overlayService.openDialog(SidebarComponent);
  }

  openCart() {
    this.overlayService.openDialog(CartComponent);
  }
}
