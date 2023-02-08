import { Component } from '@angular/core';
import { OverlayService } from 'src/app/shared/services/overlay.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private overlayService: OverlayService) {}

  onClose() {
    this.overlayService.closeDialog.next(true);
  }
}
