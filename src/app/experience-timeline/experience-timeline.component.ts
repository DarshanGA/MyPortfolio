import { Component, Input } from '@angular/core';
import { EducationTimelineCardComponent } from "../education-timeline-card/education-timeline-card.component";
import { WorkExperienceCardComponent } from "../work-experience-card/work-experience-card.component";
import { EducationExperience } from '../../models/EducationExperience.model';
import { WorkExperience } from '../../models/WorkExperience.model';

@Component({
  selector: 'app-experience-timeline',
  imports: [EducationTimelineCardComponent, WorkExperienceCardComponent],
  templateUrl: './experience-timeline.component.html',
  styleUrl: './experience-timeline.component.scss'
})
export class ExperienceTimelineComponent {

  @Input({required: true}) educExp!: EducationExperience[];
  @Input({required: true}) workExp!: WorkExperience[];
}
