import React, { useContext } from 'react';
import '../styles/about.css';
import ApplicationContext from '../context/ApplicationContext';

function About() {
  const { language } = useContext(ApplicationContext);
  return (
    <section className="about-section" id="about">
      <div className="about-title-container">
        <h1 className="about-title">{language ? 'Sobre' : 'About'}</h1>
      </div>
      <p className="fullname-paragraph">Breno da Cunha Campanha</p>
      <div className="about-paragraph-container">
        {language ? (
          <p className="about-paragraph a-p1">
          Olá, seja bem-vindo! Me chamo <b>Breno e sou apaixonado por tecnologia desde criança</b>. <br />
          Nasci em Mato Grosso - Brasil - em 1993, e por volta do ano de 2007 tive um contato mais profundo
          com o mundo da internet quando editava e colocava no ar servidores de Tibia (jogo eletrônico
          multijogador - MMORPG). <br />
          Quando terminei o ensino médio, em 2011, <b>passei a cursar Comunicação Social com Habilitação em Jornalismo</b> pela Universidade Estadual de Mato Grosso (UNEMAT). Foi um período de grandes aprendizados e experiências,
          porém descobri que não era o que eu realmente gostaria de fazer. <br />
          Já em 2017, me voltei novamente para o mundo da tecnologia. Foi quando iniciei o curso de
          <b>Engenharia da Computação pela Universidade de Cuiabá</b>. Após cerca de 2 anos,
          o alto custo e a relativa baixa qualidade do curso, me forçaram a trancar a faculdade.
        </p>
        ) : (
          <p className="about-paragraph a-p1">
            Hello, welcome at my Portfolio! My name is <b>Breno and I'm in love with tech world since I was a child</b>. <br />
            I was born in Mato Grosso state - Brazil - in 1993, and around 2007 I had a deeper contact with the internet world when I was an editor online game, editing and put up Tibia servers (electronic game multiplayers - MMORPG). <br />
            When I finished high school, in 2011, <b>I started to study Social Communication with a Major in Journalism</b> at the State University of Mato Grosso (UNEMAT). It was a period of great learning and experiences, but I found that was not what I really wanted todo. <br />
            In 2017, I turned again to the world of technology. That's when I started the course in <b>Computder Engineering from the University of Cuiabá</b>. After about 2 years, the hight cost and relatively low quality of the course, forced me to lock the registration.
          </p>
        )}
        {language ? (
        <p className="about-paragraph a-p2">
          Iniciei os estudos em <b>programação FullStack</b> em Julho de 2021
          pela&nbsp;
          <a href="https://www.betrybe.com" rel="noopener noreferrer" target="_blank" className="trybe-link">
            <b style={{ textDecoration: 'underline' }}>Trybe</b>
          </a>.
          Me apaixonei pela área e hoje posso dizer que não consigo me ver longe da tecnologia. <br />
          <b>Gosto muito de desafios e ideias inovadoras! </b>
          Atualmente divido meu tempo entre estudos e lazer <br />
          e tenho o sonho de <b>resolver grandes problemas utilizando a força da tecnologia!</b> <br />
          Sou viciado em <b>novas experiências</b>, em <b>lógica </b>
          e mais ainda em <b>aprender</b>.
        </p>
        ) : (
        <p className="about-paragraph a-p2">
          I started studies <b>FullStack programming</b> on 2021/July through the &nbsp;
          <a href="https://www.betrybe.com" rel="noopener noreferrer" target="_blank" className="trybe-link">
            <b style={{ textDecoration: 'underline' }}>Trybe</b>
          </a>.
          I fell in love with the area and today I can say that I can't see myself far from technology. <br />
          <b>I really like challenges and innovative ideas!</b>
          I currently divide my time between studies and leisure <br />
          and I have a dream to <b>solve big problems using the power of technology!</b> <br />
          I'm addicted to <b>new experiences</b>, to <b>logic</b> and even more <b>learning!</b>
        </p>
        )}
        {language ? (
          <p className="about-paragraph a-p3">
          Habilidades: <b>HTML, CSS, JavaScript, React, Redux, </b>,
          Python, SQL, MongoDB, Typescript, Node.js, POO, SOLID, Metodologias Ágeis,
          Redes, Raspagem de Dados, Testes, entre outros...
          Conhecimento sobre <b>Soft Skills</b> e sua fundamental importância
          nas relações sociais desse mundo aparentemente antissocial da programação! <br />
        </p>
        ) : (
          <p className="about-paragraph a-p3">
            Skills: <b>HTML, CSS, JavaScript, React, Redux</b> Python, SQL, MongoDB, Typescript, Node.js, OOP, SOLID, Agile Methodologies, Networks, Data Scraping, Tests, among others... Knowledge about <b>Soft Skills</b> and its fundamental importance in the social relations of this apparently antisocial world of programming!
          </p>
        )}
        {language ? (
        <p className="about-paragraph footer">
          <b>Email: brenoccamp@gmail.com</b> <br />
          Mirassol D'Oeste - Mato Grosso - Brasil
        </p>
        ) : (
          <p className="about-paragraph footer">
          <b>Email: brenoccamp@gmail.com</b> <br />
          Mirassol D'Oeste - Mato Grosso - Brazil
        </p>
        )}
      </div>
    </section>
  );
}

export default About;
