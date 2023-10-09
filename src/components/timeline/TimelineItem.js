import './TimelineItem.scss';

import {useLayoutEffect, useRef} from "react";

export const TimelineItem = ({itemHTML, TimelineProgressRef}) => {
  const TimelineItemRef = useRef(null);
  const handleScroll = () => {
    if (TimelineProgressRef && TimelineProgressRef.current) {
      const bottomTimelineProgress = TimelineProgressRef.current.getBoundingClientRect().bottom;
      const topTimelineItem = TimelineItemRef.current.getBoundingClientRect().top;
      if (bottomTimelineProgress < topTimelineItem) {
        TimelineItemRef.current.classList.add("hidden")
        TimelineItemRef.current.classList.remove("visible")
      } else {
        TimelineItemRef.current.classList.remove("hidden")
        TimelineItemRef.current.classList.add("visible")
      }
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  });

  return (
    <li ref={TimelineItemRef} className="timeline-item">
      {itemHTML}
    </li>
  );
};
