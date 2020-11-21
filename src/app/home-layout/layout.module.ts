import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from "@angular/forms";
import {PostModule} from "../post/post.module";


@NgModule({
  imports: [CommonModule, RouterModule.forChild([]), FlexLayoutModule, FormsModule, PostModule],
  exports: [
    MainLayoutComponent,
    FooterOnlyLayoutComponent,
    FooterComponent,
  ],
  declarations: [
    MainLayoutComponent,
    FooterOnlyLayoutComponent,
    FooterComponent,
    SidebarComponent,

  ],
})
export class LayoutModule {}
