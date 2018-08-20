import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableModule } from 'angular-resizable-element';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { CalendarWeekViewComponent } from './calendar-week-view.component';
import { CalendarWeekViewHeaderComponent } from './calendar-week-view-header.component';
import { CalendarWeekViewEventComponent } from './calendar-week-view-event.component';
import { PapyrusCalendarWeekViewComponent } from './calendar-week-view-custom.component';
import { CalendarCommonModule } from '../common/calendar-common.module';
import { CalendarDayModule } from '../day/calendar-day.module';
export {
  CalendarWeekViewComponent,
  CalendarWeekViewBeforeRenderEvent
} from './calendar-week-view.component';
export {
  WeekViewEvent as CalendarWeekViewEvent,
  WeekViewEventRow as CalendarWeekViewEventRow,
  GetWeekViewArgs as CalendarGetWeekViewArgs
} from 'calendar-utils';

@NgModule({
  imports: [
    CommonModule,
    ResizableModule,
    DragAndDropModule,
    CalendarCommonModule,
    CalendarDayModule
  ],
  declarations: [
    CalendarWeekViewComponent,
    CalendarWeekViewHeaderComponent,
    CalendarWeekViewEventComponent,
    PapyrusCalendarWeekViewComponent
  ],
  exports: [
    ResizableModule,
    DragAndDropModule,
    CalendarDayModule,
    CalendarWeekViewComponent,
    CalendarWeekViewHeaderComponent,
    CalendarWeekViewEventComponent,
    PapyrusCalendarWeekViewComponent
  ]
})
export class CalendarWeekModule {}
