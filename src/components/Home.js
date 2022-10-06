import classes from './CSSFiles/home.module.css';
import { ThemeContext } from "../components/context/Themes";
import { useContext } from 'react';
const Home = ()=>{
  const [{ isDark }] = useContext(ThemeContext);
  const homeTheme = isDark
    ? { backgroundColor: "white", color: "#011f30" }
    : { backgroundColor: "#011f30", color: "white" };
    return (
      <section className={classes.home}>
        Hey! I'm Poornima 🙋‍♀️ <br />
        An ardent techie passionate about web development. <br />
        <button style={homeTheme}>
          <a
            style={homeTheme}
            href={require("../Poornima_Resume_FrontEnd_3YOE.pdf")}
            download="Poornima_Resume_Frontend_3YOE"
          >
            DOWNLOAD RESUME
          </a>
        </button>
      </section>
    );
}

export default Home;