import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

import "./Header.css";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header className="header">
      <h1>Golden Rules</h1>
      <button onClick={changeTheme}>{theme === "light" ? "🌚" : "🌝"}</button>
    </header>
  );
};

export default Header;
