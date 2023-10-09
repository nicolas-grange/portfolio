import "./BurgerMenu.scss";

export const BurgerMenu = () => {

  const handleClick= (e) => {
    e.preventDefault();
  };

  return (
    <a onClick={handleClick} href="#" className="burger-menu">
      <span></span>
      <span></span>
      <span></span>
    </a>
  );
};
