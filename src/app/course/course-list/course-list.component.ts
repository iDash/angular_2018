import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: [ './course-list.component.css' ]
})
export class CourseListComponent implements OnInit {
  public courses: Course[] = [
    {
      id: 1,
      title: 'Course Title 1',
      creationDate: '01-01-2018',
      duration: 6,
      description: 'Some long string that seems like course description'
    },
    {
      id: 2,
      title: 'Course Title 2',
      creationDate: '01-01-2018',
      duration: 6,
      description: 'Some long string that seems like course description'
    },
    {
      id: 3,
      title: 'Course Title 3',
      creationDate: '01-01-2018',
      duration: 6,
      description: 'Some long string that seems like course description'
    },
    {
      id: 4,
      title: 'Course Title 4',
      creationDate: '01-01-2018',
      duration: 6,
      description: 'Some long string that seems like course description'
    },
    {
      id: 5,
      title: 'Course Title 5',
      creationDate: '01-01-2018',
      duration: 6,
      description: 'Some long string that seems like course description'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
