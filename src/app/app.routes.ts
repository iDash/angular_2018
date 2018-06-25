import { Route } from '@angular/router';
import { CoursePageComponent } from "./course/course-page/course-page.component";

export const ROUTES: Route[] = [
  {path: 'courses', component: CoursePageComponent}
];
