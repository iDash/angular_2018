import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { MatButtonModule, MatCardModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule, MatCardModule, MatButtonModule
  ],
  declarations: [ CourseListComponent, CourseListItemComponent, CoursePageComponent ],
  exports: [ CoursePageComponent ]
})
export class CourseModule {
}
