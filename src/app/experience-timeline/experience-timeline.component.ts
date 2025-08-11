import { Component } from '@angular/core';
import { EducationTimelineCardComponent } from "../education-timeline-card/education-timeline-card.component";
import { WorkExperienceCardComponent } from "../work-experience-card/work-experience-card.component";

@Component({
  selector: 'app-experience-timeline',
  imports: [EducationTimelineCardComponent, WorkExperienceCardComponent],
  templateUrl: './experience-timeline.component.html',
  styleUrl: './experience-timeline.component.scss'
})
export class ExperienceTimelineComponent {

}
