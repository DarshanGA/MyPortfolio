import { Component } from '@angular/core';
import data from "../data/content.json"
import { ExperienceTimelineComponent } from "./experience-timeline/experience-timeline.component";

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';
  fullName = data.fullName;
  jobTitle = data.jobTitle;
  aboutMe = data.about;
  sectionTitles = data.sectionTitles;
}
