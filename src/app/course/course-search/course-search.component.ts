import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: [ './course-search.component.scss' ]
})
export class CourseSearchComponent implements OnInit {
  public textToSearch: string;
  @Output() searchEvent: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  search() {
    this.searchEvent.emit(this.textToSearch);
  }
}
