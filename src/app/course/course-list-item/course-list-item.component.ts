import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: [ './course-list-item.component.scss' ]
})
export class CourseListItemComponent implements OnInit {
  @Input() public course: Course;
  @Output() deleteEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  delete() {
    this.deleteEvent.emit(this.course.id);
  }

}
