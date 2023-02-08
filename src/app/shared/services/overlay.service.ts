import { ComponentRef, Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  public closeDialog: Subject<boolean>;
  public instance: any;

  constructor(private overlay: Overlay) {
    this.closeDialog = new Subject();
  }

  openDialog(component: any): ComponentRef<any> {
    const positionStrategy = this.overlay.position().global();

    // Create the overlay with customizable options
    const overlayRef = this.overlay.create({
      positionStrategy,
      backdropClass: 'overlay-backdrop',
      hasBackdrop: true,
      panelClass: 'overlay-panel',
    });

    const portal = new ComponentPortal(component);
    this.instance = overlayRef.attach(portal);

    // Close the dialog using backdropClick()
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });

    this.closeDialog.subscribe((res) => {
      if (res == true) {
        overlayRef.detach();
      }
    });
    return this.instance;
  }
}
