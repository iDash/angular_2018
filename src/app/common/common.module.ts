import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';

const CORE_COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  BreadcrumbComponent,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...CORE_COMPONENTS
  ],
  exports: [
    ...CORE_COMPONENTS
  ]
})
export class CommonModule {
}
