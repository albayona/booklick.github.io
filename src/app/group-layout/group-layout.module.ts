import {NgModule} from '@angular/core';

import {MainLayoutComponent2} from "./main-layout/main-layout.component2";
import {PostModule} from "../post/post.module";
import {RouterModule} from "@angular/router";
import {LayoutModule} from "../home-layout/layout.module";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";


@NgModule({

    exports: [MainLayoutComponent2],
  imports: [
    CommonModule, RouterModule.forChild([]), FlexLayoutModule, FormsModule, PostModule, LayoutModule
  ],
  declarations: [
    MainLayoutComponent2]
})
export class GroupLayoutModule {
}
