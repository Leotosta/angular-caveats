import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { CostumersRoutingModule } from './costumers-routing.module';
import { CostumersComponent } from './costumers.component';


@NgModule({
  declarations: [CostumersComponent],
  imports: [
    CommonModule,
    CostumersRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ]
})
export class CostumersModule { }
