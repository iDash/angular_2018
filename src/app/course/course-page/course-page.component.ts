import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: [ './course-page.component.scss' ]
})
export class CoursePageComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  search(searchString: string) {
    console.log(searchString);
  }

  deleteCourse(courseId: number) {
    console.log(courseId);
  }

  loadMore() {
    console.log('Load more courses triggered');
  }
}
