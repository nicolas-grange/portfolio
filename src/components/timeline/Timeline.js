import './Timeline.scss';

import {useLayoutEffect, useRef, useState} from "react";
import {TimelineItem} from "./TimelineItem";

export const Timeline = ({itemsHTML}) => {
  const TimelineRef = useRef(null);
  const TimelineProgressRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const computeProgressBarValue = (componentDimensions) => {
    const bottomWindowPosition = window.innerHeight + window.scrollY;
    const topSliderPosition = window.scrollY + componentDimensions.top;
    const bottomSliderPosition = componentDimensions.height + topSliderPosition
    if (topSliderPosition > bottomWindowPosition) {
      return 0;
    } else if (bottomSliderPosition < bottomWindowPosition) {
      return componentDimensions.height;
    } else {
      const progress = (bottomWindowPosition - topSliderPosition) / (bottomSliderPosition - topSliderPosition);
      const topSliderPositionVisible = window.scrollY;
      if (topSliderPosition > topSliderPositionVisible) {
        return (bottomWindowPosition - topSliderPosition) * progress;
      } else {
        const sliderNotVisiblePart = topSliderPositionVisible - topSliderPosition;
        return sliderNotVisiblePart + (bottomWindowPosition - topSliderPositionVisible) * progress;
      }
    }
  };

  const handleScroll = () => {
    const componentDimensions = TimelineRef.current.getBoundingClientRect();
    const progressValue = computeProgressBarValue(componentDimensions);
    setProgress(progressValue);
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [TimelineRef]);

  return (
    <div ref={TimelineRef} className="timeline">
      <ul>
        {itemsHTML.map((itemHTML, index) =>
            <TimelineItem key={index} TimelineProgressRef={TimelineProgressRef} itemHTML={itemHTML}/>
        )}
      </ul>
      <div ref={TimelineProgressRef} style={{height: progress + "px"}} className="timeline-progress"></div>
    </div>
  );
};
