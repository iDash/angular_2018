import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule } from '@angular/material';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { CourseSearchComponent } from './course-search/course-search.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  declarations: [ CourseListComponent, CourseListItemComponent, CoursePageComponent, CourseSearchComponent ],
  exports: [ CoursePageComponent ]
})
export class CourseModule {
}
