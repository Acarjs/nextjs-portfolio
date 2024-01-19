import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import SectionHeading from './section-heading';

export default function experience() {
  return (
    <section id="experience">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline></VerticalTimeline>
    </section>
  );
}
