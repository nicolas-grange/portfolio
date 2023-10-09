import './App.scss';
import {Introduction} from "./components/introduction/Introduction";
import {Background} from "./components/background/Background";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/header/Header";

const App = () => {
  return (
    <div className="app" data-theme="dark">
      <Header />
      <main>
        <Introduction />
        <Background />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
