import "./Overlay.scss";
import {useLayoutEffect, useState} from "react";

export const Overlay = () => {

  const [style, setStyle] = useState(null);

  useLayoutEffect(() => {
    resizeOverlay();
    window.addEventListener('resize', resizeOverlay);
    return () => {window.removeEventListener('resize', resizeOverlay)};
  }, []);

  // resize overlay if the window is resized
  const resizeOverlay = () => {
    const radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
    const diameter = radius * 2;
    // define new style
    const style = {
      width: diameter + 'px',
      height: diameter + 'px',
      marginTop: -radius + 'px',
      marginLeft: -radius + 'px'
    };
    // update state
    setStyle(style);
  };

  return (
    <div style={style} className="nav-overlay"></div>
  );
};

