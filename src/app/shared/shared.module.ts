import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostFilterPipe} from './post-title-filter.pipe';
import { ResidentNamePipe } from './resident-name.pipe';
import { FilePickerComponent } from './file-picker/file-picker.component';


@NgModule({
    declarations: [PostFilterPipe, ResidentNamePipe, FilePickerComponent],

    imports: [CommonModule],

  exports: [PostFilterPipe, ResidentNamePipe, FilePickerComponent]
})
export class SharedModule {
}
