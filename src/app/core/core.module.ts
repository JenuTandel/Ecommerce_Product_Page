import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class CoreModule {}
