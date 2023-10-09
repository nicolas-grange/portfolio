import "./Header.scss";
import {BurgerMenu} from "./burger-menu/BurgerMenu";
import {Overlay} from "./overlay/Overlay";
import {useState} from "react";
import {Navigation} from "./navigation/Navigation";

export const Header = () => {

  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    if (e.target.tagName !== "INPUT") {
      setOpen(!open);
    }
  };

  return (
    <header className={"header " + (open ? 'open' : '')} onClick={handleClick}>
      <BurgerMenu/>
      <Overlay />
      <Navigation />
    </header>
  );
};
