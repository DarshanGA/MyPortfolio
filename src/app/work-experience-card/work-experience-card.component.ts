import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-experience-card',
  imports: [],
  templateUrl: './work-experience-card.component.html',
  styleUrl: './work-experience-card.component.scss'
})
export class WorkExperienceCardComponent {

  sampleResponsCount = Array.from({ length: 3 }, (_, i) => i); // [0, 1, 2]
  @Input({required: true}) companyName = "Placeholder Company Name";
  @Input({required: true}) jobTitle = "Placeholder Job Jitle";
  @Input({required: true}) summary = "This is sample summary about this job, just a placeholder default text.";
  @Input({required: true}) keyResponsibilities:string[] = [];
  @Input({required: true}) startDate = "Month 0000";
  @Input({required: true}) endDate = "Month 9999";
}
