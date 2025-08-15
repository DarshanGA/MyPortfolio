import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-details-model',
  imports: [],
  templateUrl: './work-details-model.component.html',
  styleUrl: './work-details-model.component.scss'
})
export class WorkDetailsModelComponent {

  @Input({required: true}) companyName = "Placeholder Company Name";
  @Input({required: true}) keyResponsibilitie!: string[];
  @Input({required: true}) keyContributions!: string[];
  @Input({required: true}) detailsId!: number;
  @Input({required: true}) period!: string;
}
