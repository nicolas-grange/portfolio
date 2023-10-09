import './Contact.scss';
import {useLayoutEffect, useRef} from "react";

import {ReactComponent as MailLogo} from '../../assets/contact/mail.svg';
import {ReactComponent as PhoneLogo} from '../../assets/contact/phone.svg';
import {ReactComponent as LocationLogo} from '../../assets/contact/location.svg';

import {Map} from "../map/Map";
export const Contact = () => {
  const ContactRef = useRef(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          ContactRef.current.classList.add('hidden');
          return;
        }
        ContactRef.current.classList.remove('hidden');
      });
    }, {
      rootMargin: '-20%',
      threshold: 0
    });
    observer.observe(ContactRef.current);
    return () => {observer.disconnect()};
  }, [ContactRef]);

  return (
    <section id="contact" ref={ContactRef} className="contact">
      <div className="wrapper container">
        <h2>Contact</h2>
        <div className="contact-layout">
          <ul>
            <li>
              <a href="mailto:grge.nico@gmail.com">
                <MailLogo />
                <div className="contact-information">
                  <h3 className="title">E-mail</h3>
                  <span>grge.nico@gmail.com</span>
                </div>
              </a>
            </li>
            <li>
              <a href="tel:+33623271463">
                <PhoneLogo />
                <div className="contact-information">
                  <h3 className="title">Tel</h3>
                  <span>+33 6 23 27 14 63</span>
                </div>
              </a>
            </li>
            <li>
              <LocationLogo />
              <div className="contact-information">
                <h3 className="title">Adresse</h3>
                <address>
                  7 rue des Benjoins<br/>Ravine du Pont<br/>97429 Petite-Ile<br/>Réunion
                </address>
              </div>
            </li>
          </ul>
          <Map />
        </div>
      </div>
    </section>
  );
}
