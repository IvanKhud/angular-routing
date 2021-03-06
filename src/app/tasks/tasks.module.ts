import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksServicesModule } from './/tasks-services.module';
import {
  TaskListComponent,
  TaskComponent,
  TaskFormComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule,
    TasksServicesModule
  ],
  declarations: [
    TaskListComponent,
    TaskComponent,
    TaskFormComponent,
  ]
})
export class TasksModule { }
