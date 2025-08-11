import { Component, ElementRef, ViewChild } from '@angular/core';
import data from "../data/content.json"
import { ExperienceTimelineComponent } from "./experience-timeline/experience-timeline.component";

@Component({
  selector: 'app-root',
  imports: [ExperienceTimelineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';
  fullName = data.fullName;
  jobTitle = data.jobTitle;
  aboutMe = data.about;
  sectionTitles = data.sectionTitles;

  @ViewChild('pageTitle') pageTitle!: ElementRef;
  @ViewChild('scrollNavbar') scrollNavbar!: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            this.scrollNavbar.nativeElement.classList.add('navbar-visible');
          } else {
            this.scrollNavbar.nativeElement.classList.remove('navbar-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(this.pageTitle.nativeElement);
  }
}
