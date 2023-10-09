import "./Toggle.scss";
import {useState} from "react";
export const Toggle = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (checked) => {
    setChecked(checked);
    const theme= checked ? "dark" : "light";
    document.querySelector(".app").setAttribute("data-theme", theme);
  };

  return (
    <div className="toggle">
      <div className="checkbox">
        <input checked={checked} type="checkbox" onChange={e => handleChange(e.target.checked)}/>
        <label></label>
      </div>
    </div>
  );
};
