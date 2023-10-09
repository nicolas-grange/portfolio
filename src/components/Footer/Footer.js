import "./Footer.scss";
import {ReactComponent as LinkedInLogo} from '../../assets/footer/linkedin.svg';
import {ReactComponent as GitHubLogo} from '../../assets/footer/github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div  className="wrapper container">
        <span>
          © {new Date().getFullYear()} - Nicolas Grange
        </span>
        <ul>
          <li>
            <a  rel="noreferrer" target="_blank" href="https://fr.linkedin.com/in/nicolas-grange-183875150">
              <LinkedInLogo />
            </a>
          </li>
          <li>
            <a  rel="noreferrer" target="_blank" href="https://github.com/nicolas-grange">
              <GitHubLogo />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
