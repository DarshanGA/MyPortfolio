import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education-timeline-card',
  imports: [],
  templateUrl: './education-timeline-card.component.html',
  styleUrl: './education-timeline-card.component.scss'
})
export class EducationTimelineCardComponent {

  @Input({required: true}) institutionName = "Placeholder Institute Name";
  @Input({required: true}) educLevel = "Placeholder class";
  @Input({required: true}) year = "Mon 0000";
  @Input({required: true}) brief = "Some placeholder text for brief summary about this study and class."
}
