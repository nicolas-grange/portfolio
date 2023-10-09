import './Background.scss';
import {Timeline} from "../timeline/Timeline";
import {useLayoutEffect, useRef} from "react";

import talendLogo from "../../assets/background/talend.png";
import orangeLogo from "../../assets/background/orange.png";
import doopLogo from "../../assets/background/doop.png";
import imtLogo from "../../assets/background/imt.png";
import ntnuLogo from "../../assets/background/ntnu.png";
import iutLogo from "../../assets/background/iut.png";

const talend1Data = () => {
  return (
    <div className="period-description-container">
      <div className="period-logo">
        <p>2021 <span>-</span> 2023</p>
        <img src={talendLogo} alt="Talend logo"/>
      </div>
      <div className="description">
        <h3>Software engineer</h3>
        <h4>Développement d'une solution ELT no code</h4>
        <p>Renfort au sein de l'équipe <strong>Pipeline Designer</strong> de Talend.</p>
        <p>Objectif : développer une application permettant de générer des requêtes SQL à partir d'un pipeline décrivant une série de transformations.</p>
        <ul>
          <li>Exploration technique</li>
          <li>Challenge de la solution, de la conception et du code existant</li>
          <li>Design technique d'une nouvelle solution</li>
          <li>Ré-écriture totale du service (Java)</li>
          <li>Ajout de fonctionnel et support de différents CDWH (Snowflake, Databricks...)</li>
        </ul>
        <h4>Solution de préparation de données</h4>
        <p>Renfort au sein de l'équipe <strong>Data Preparation</strong> de Talend.</p>
        <p>Objectif : migrer une application cloud de transformation de données au sein d'un engine directement hébergé chez le client.</p>
        <ul>
          <li>Compréhension de l'existant</li>
          <li>Nombreux échanges fonctionnels / techniques</li>
          <li>Développement backend des différents composants (Java)</li>
          <li>Intégration technique de la solution</li>
        </ul>
      </div>
    </div>
  );
};

const talend2Data = () => {
  return (
    <div className="period-description-container">
      <div className="period-logo">
        <p>2020 <span>-</span> 2021</p>
        <img src={talendLogo} alt="Talend logo"/>
      </div>
      <div className="description">
        <h3>Junior frontend engineer</h3>
        <p>Au sein de l'équipe <strong>API</strong> de Talend</p>
        <h4>Application de génération d'API</h4>
        <p>Création d'une solution de génération d'API en quelques clics.</p>
        <ul>
          <li>Participation au design / architecture backend</li>
          <li>Développement backend</li>
          <li>Tests</li>
        </ul>
        <h4>Portail de documentation d'API</h4>
        <p>Création d'un portail de documentation d'API</p>
        <ul>
          <li>Utilisation du framework HUGO</li>
          <li>Développement de composants frontend</li>
        </ul>
        <h4>Outillage</h4>
        <ul>
          <li>Automatisation de tâches</li>
          <li>Librairies partagées</li>
        </ul>
      </div>
    </div>
  );
};

const orangeData = () => {
  return (
    <div className="period-description-container">
      <div className="period-logo">
        <p>2017 <span>-</span> 2020</p>
        <img src={orangeLogo} alt="OBS logo"/>
      </div>
      <div className="description">
        <h3>Alternance - Développeur portail web</h3>
        <h4>Intégration d'applications web au sein d'un portail client</h4>
        <ul>
          <li>Compréhension et expression des besoins</li>
          <li>Développement d'un POC et intégration des APIs du portail</li>
          <li>Rédaction des User Stories pour la TMA</li>
        </ul>
        <h4>Automatisation des statistiques</h4>
        <ul>
          <li>Mise en place de KPI</li>
          <li>Création de tableaux de bord Google Analytics</li>
          <li>Développement d'une interface web pour visualiser les indicateurs</li>
        </ul>
      </div>
    </div>
  );
};

const doopData = () => {
  return (
    <div className="period-description-container">
      <div className="period-logo">
        <p>2019</p>
        <img src={doopLogo} alt="Doop logo"/>
      </div>
      <div className="description">
        <h3>Stage - Développeur frontend<br /><em>Pays - Bas</em></h3>
        <h4>Stage de 3 mois réalisé à Enschede aux Pays - Bas</h4>
        <ul>
          <li>Participation aux développements de plusieurs sites web</li>
          <li>Développement de composants réutilisables</li>
          <li>Utilisation de CRAFT CMS, JavaScript, HTML 5, SASS...</li>
        </ul>
      </div>
    </div>
  );
};

const imtAtlantiqueData = () => {
  return (
    <div className="period-description-container">
      <div className="period-logo">
        <p>2017 <span>-</span> 2020</p>
        <img src={imtLogo} alt="IMT Atlantique logo"/>
      </div>
      <div className="description">
        <h3>Formation d'ingénieur<br /><em>Informatique, réseaux & telecom</em></h3>
        <h4>Formation suivie en alternance sur les campus de Brest & Rennes</h4>
        <p>Classement : 1er de promotion</p>
        <p>GPA : 3.9</p>
      </div>
    </div>
  );
};

const ntnuData = () => {
  return (
    <div className="period-description-container">
      <div className="period-logo">
        <p>2019 <span>-</span> 2020</p>
        <img src={ntnuLogo} alt="NTNU logo"/>
      </div>
      <div className="description">
        <h3>Semestre erasmus<br/><em>Trondheim</em></h3>
        <h4>Semestre erasmus en Norvège</h4>
        <ul>
          <li>Technologies web</li>
          <li>Python</li>
          <li>Big Data</li>
          <li>Systèmes d'information</li>
          <li>Introduction à l'intelligence artificielle</li>
        </ul>
    </div>
    </div>
  );
};

const iutData = () => {
  return (
    <div className="period-description-container">
      <div className="period-logo">
        <p>2015 <span>-</span> 2017</p>
        <img src={iutLogo} alt="IUT logo"/>
      </div>
      <div className="description">
        <h3>Etudiant - IUT Mesures Physiques</h3>
        <h4>2 années de formation à l'IUT Mesures Physiques de Blois</h4>
        <p>Classement : 1er de promotion</p>
      </div>
    </div>
  );
};

const backgroundItemsHTML = [
  talend1Data(),
  talend2Data(),
  orangeData(),
  doopData(),
  imtAtlantiqueData(),
  ntnuData(),
  iutData()
];
export const Background = () => {
  const BackgroundRef = useRef(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          BackgroundRef.current.classList.add('hidden');
          return;
        }
        BackgroundRef.current.classList.remove('hidden');
      });
    }, {
      rootMargin: '-20%',
      threshold: 0
    });
    observer.observe(BackgroundRef.current);
    return () => {observer.disconnect()};
  }, [BackgroundRef]);

  return (
    <section id="background" ref={BackgroundRef} className="background">
      <div className="wrapper container">
        <h2>Background</h2>
        <Timeline itemsHTML={backgroundItemsHTML} />
      </div>
    </section>
  );
};
