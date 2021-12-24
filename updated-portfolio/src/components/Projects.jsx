import React, { useContext } from 'react';
import ApplicationContext from '../context/ApplicationContext';
import '../styles/projects.css';
import tryunfoHome from '../images/tryunfo-home.png';
import tryunfoAddedCard from '../images/tryunfo-added-cards.png';
import trybetunesLogin from '../images/trybetunes-login.png';
import trybetunesSearch from '../images/trybetunes-search.png';
import trybetunesPlayingMusic from '../images/trybetunes-playing-music.png';
import initialPageStore from '../images/pagina-inicial-store-online.png';
import searchStoreOnline from '../images/busca-por-radios-store-online.png';
import productDetailsOnlineStore from '../images/detalhes-produto-store-online.png';
import cartOnlineStore from '../images/carrinho-store-online.png';
import checkout from '../images/finalizar-compra-store-online.png';
import appRTL from '../images/react-test-app.png';
import codeTestsScreenshot from '../images/tests-screenshot.png'
import loginTrybeWallet from '../images/trybe-wallet-login.png';
import walletTrybeWallet from '../images/trybe-wallet-walletPage.png';
import triviaLogin from '../images/trivia-login.png';
import triviaQuestion1 from '../images/trivia-question1.png';
import triviaAnsweredQuestion from '../images/trivia-answered-question.png';
import starWars from '../images/starWars.png';



function Projects() {
  const { portuguese } = useContext(ApplicationContext);
  return (
    <section className="projects-section" id="projects">
      <div className="projects-title-container">
        <h1 className="projects-title">{portuguese ? 'Projetos' : 'Projects'}</h1>
      </div>
      <div className="section-description-container">
        {portuguese ? (
          <p className="description-paragraph">
          Aqui você pode encontrar alguns dos projetos desenvolvidos. <br />
          Clicando em qualquer uma imagens de um card você será redirecionado para o
          repositório do projeto no Github. Caso queira ver o README completo, vá até a branch master.
          </p>
        ) : (
          <p className="description-paragraph">
            Here you can found some developed projects. <br />
            Click on any image in a card and you will be redirected to the repository of the project
            at Github. Maybe you want to see the complete README, so go the master branch.
          </p>
        )}
      </div>
      <div className="projects-container">
        <div className="card-container">
          <a href="https://github.com/tryber/sd-015-a-project-tryunfo/pull/43" target="_blank" rel="noreferrer">
            <img src={ tryunfoHome } alt="trunfo game app home" />
            <img src={ tryunfoAddedCard } alt="trunfo game app home" />
          </a>
          {portuguese ? (
            <p className="paragraph">
              Projeto criado para simular o jogo "Super Trunfo" (famoso no Brasil nos anos 90 e 2000). <br />
              Desenvolvido principalmente com React.
              </p>
          ) : (
            <p className="paragraph">
              Project made to simulate the game "Top Trumps", very famous in the 90s and 2000s in Brazil,
              where it is known as "Super Trunfo".<br />
              Mainly developed with React.
            </p>
          )}
        </div>
        <div className="card-container">
          <a href="https://github.com/tryber/sd-015-a-project-trybetunes/pull/63" target="_blank" rel="noreferrer">
            <img src={ trybetunesLogin } alt="app login page" />
            <img src={ trybetunesSearch } alt="app search page"/>
            <img src={ trybetunesPlayingMusic } alt="app playing music" />
          </a>
          {portuguese ? (
            <p className="paragraph">
              O objetivo desse projeto foi criar uma página onde o usuário
              pode ouvir um preview dos seus artista favoritos, favoritar suas músicas e criar um login. <br />
              As músicas são recebidas através de uma API.
              Desenvolvido principalmente com React/react-router-dom/estados de vida de componentes, etc..
            </p>
          ) : (
            <p className="paragraph">
              The objective of this project was to create a page where the user
              you can listen to a preview of your favorite artists, bookmark your songs and create a login. <br />
              Songs are received via an API.
              Mainly developed with React/react-router-dom/component life states, etc.
            </p>
          )}
        </div>
        <div className="card-container">
          <a href="https://github.com/tryber/sd-015-a-project-frontend-online-store/pull/195" target="_blank" rel="noreferrer">
            <img src={ initialPageStore } alt="initial page online store" />
            <img src={ searchStoreOnline } alt="initial page online store" />
            <img src={ productDetailsOnlineStore } alt="initial page online store" />
            <img src={ cartOnlineStore } alt="initial page online store" />
            <img src={ checkout } alt="initial page online store" />
          </a>
          {portuguese ? (
            <p className="paragraph">
              Projeto feito em grupo de 4 pessoas que simula o funcionamento
              de uma loja online com navegação entre páginas.
              Consumindo uma API do mercado livre para encontrar o catálogo de produtos em tempo real.
              Desenvolvido com React.
            </p>
          ): (
            <p className="paragraph">
              Project made in a group of 4 people that simulates the operation
              of an online store with navigation between pages.
              Consuming an "Mercado Livre" (brazilian site) API to find the product catalog in real time.
              Developed with React.
            </p>
          )}
        </div>
        <div className="card-container">
          <a href="https://github.com/tryber/sd-015-a-project-react-testing-library/pull/10" target="_blank" rel="noreferrer">
            <img src={ appRTL } alt="initial page online store" />
            <img src={ codeTestsScreenshot } alt="initial page online store" />
          </a>
          {portuguese ? (
            <p className="paragraph">
              Projeto de testes utilizando React Testing Library.
            </p>
          ): (
            <p className="paragraph">
              Tests project using React Testing Library.
            </p>
          )}
        </div>
        <div className="card-container">
          <a href="https://github.com/tryber/sd-015-a-project-trybewallet/pull/2" target="_blank" rel="noreferrer">
            <img src={ loginTrybeWallet } alt="initial page online store" />
            <img src={ walletTrybeWallet } alt="initial page online store" />
          </a>
          {portuguese ? (
            <p className="paragraph">
              Projeto que simula uma carteira de gastos consumindo as cotações de várias moedas mundiais em tempo real.
              Desenvolvido com React e Redux.
            </p>
          ): (
            <p className="paragraph">
              Project that simulates a portfolio of expenses consuming the quotes of various world currencies in real time.
              Developed with React and Redux.
            </p>
          )}
        </div>
        <div className="card-container">
          <a href="https://github.com/tryber/sd-015-a-project-trivia-react-redux/pull/26" target="_blank" rel="noreferrer">
            <img src={ triviaLogin } alt="initial page online store" />
            <img src={ triviaQuestion1 } alt="initial page online store" />
            <img src={ triviaAnsweredQuestion } alt="initial page online store" />
          </a>
          {portuguese ? (
            <p className="paragraph">
              Projeto que simula o jogo de Trivia com login e rank dos jogadores.
              Criado em grupo utilizando React e Redux.
              *Não estilizado*
            </p>
          ): (
            <p className="paragraph">
              Project that simulates the QuizzLand game with login and player rank.
              Created as a group using React and Redux.
              *Without style css*
            </p>
          )}
        </div>
        <div className="card-container">
          <a href="https://github.com/tryber/sd-015-a-project-starwars-planets-search/pull/15" target="_blank" rel="noreferrer">
            <img src={ starWars } alt="initial page online store" />
          </a>
          {portuguese ? (
            <p className="paragraph">
              Projeto para consolidar habilidades com React Hooks e componentes funcionais.
              Criado utilizando uma API de Star Wars com informações sobre vários planetas.
              *Não estilizado*
            </p>
          ): (
            <p className="paragraph">            
              Project to consolidate skills with React Hooks and functional components.
              Created using a Star Wars API with information about various planets. <br />
              *Without style css*
            </p>
          )}
        </div>
      </div>
        {portuguese ? (
          <p className="more-information-paragraph">
            Quer saber mais sobre todos os projetos desenvolvidos?
            Acesse meu Github! <br />
            <p className="github-link">
              <a href="https://github.com/brenoccamp" target="_blank" rel="noreferrer">
                Click Aqui!
              </a>
            </p>
          </p>
        ) : (
          <p className="more-information-paragraph">
            Do you want to know more about all the projects developed?
            Access my Github! <br />
            <p className="github-link">
              <a href="https://github.com/brenoccamp" target="_blank" rel="noreferrer">
                Click Here!
              </a>
            </p>
          </p>
        )}
    </section>
  );
}

export default Projects;
