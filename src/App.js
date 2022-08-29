import '../src/Css/style.css';
import Navbar from './components/Navbar';
import Cover from './components/Cover/Cover';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import { useRef } from '/react';
import { useInView } from 'react-intersection-observer';
import git from './img/GitHub.png';
import instagram from './img/Instagram.png';
import Linkedin from './img/LinkedIn.png';
import Twitter from './img/Twitter.png';
import AboutMe from './components/AboutMe';
import mongo from './img/mongo.png';
import senac from './img/senac.png';
import justit from './img/justit.png';
import codeacademy from './img/codeacademy.png';
import ebac from './img/ebac.png';
import vector1 from './img/Vector 1.png';
import vector3 from './img/Vector 3.png';
import Html5 from './img/tecnologies/Html5.svg';
import Css from './img/tecnologies/Css.svg';
import React_svg from './img/tecnologies/React.svg';
import javascript from './img/tecnologies/javascript.svg';
import python from './img/tecnologies/Python.svg';
import Java from './img/tecnologies/Java.svg';
import Django from './img/tecnologies/Django.png';
import Mongodb from './img/tecnologies/Mongodb.svg';
import Postgresql from './img/tecnologies/Postgresql.svg';
import Git from './img/tecnologies/Git.svg';
import Github from './img/tecnologies/Github.png';
import Docker from './img/tecnologies/Docker.svg';
import Nodejs_svg from './img/tecnologies/Nodejs.svg';
import Sass_svg from './img/tecnologies/Sass.svg';
import Heroku from './img/tecnologies/Heroku.svg';
import Owl from './img/tecnologies/owl.png';
import DRFramework from './img/tecnologies/DRF.png';
import Celery from './img/tecnologies/celery.png';
import Stripe from './img/tecnologies/Stripe.png';


const courses_list = [
  {
    id: 1,
    img: codeacademy,
    period: '07/22 - to present',
    title: 'Computer Scince',
    content: 'Online course covering Data Structures, Algorithms, Databases, Computer Architecture and Maths',
  },
  {
    id: 2,
    img: justit,
    period: '06/22 - 09/22 ',
    title: 'Bootcamp: Software Development',
    content: 'A twelve week intensive bootcamp covering the fundamentals of Web and Software development.',
  },
  {
    id: 3,
    img: mongo,
    period: '06/22 – 06/22',
    title: 'M001 - MongoDB Basics',
    content: 'Online course covering search, create, and analyze, databases, and giving and introduction to data visualization.',
  },
  {
    id: 4,
    img: ebac,
    period: '01/22 – 05/22',
    title: 'Full stack developer python',
    content: 'Online intensive course covering microservices, CI/CD, Docker, Python, Django-Rest-Framework, Postgres, Linux, Html, CSS, JavaScript and React.',
  },
  {
    id: 5,
    img: senac,
    period: '01/2008 – 12/2012',
    title: 'Hotel Management    ',
    content: 'Hotel management gave me a good ground in managment and helped me to develop soft-skills such as, teamwork, comunication, humbleness and comercial-awareness',
  },
]
const lista = [
  {
    id: 1,
    site: "https://victorres85.github.io/lucas_website/",
    active: false,
    img: 'https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Personal website',
    buid_with: [
      {
      tech_img: React_svg,
      tech_alt: 'React' 
    },
    {
      tech_img: Nodejs_svg,
      tech_alt: 'NodeJs' 
    },{
      tech_img: Sass_svg,
      tech_alt: 'Sass' 
    },
    {
      tech_img: Owl,
      tech_alt: 'OwlCarousel' 
    },
    {
      tech_img: Git,
      tech_alt: 'GitHub' 
    },
  ],
    what_I_Have_Learned: 'This has been my first webpage written on React, here I have learned the basics of the frameworks: how to work with components, the use of the useState hook and writing modals. Have also learned  how to deploy my projects on the GitHub pages',
    github_link: 'https://github.com/victorres85/lucas_website',
    pages_link: 'https://victorres85.github.io/lucas_website/',
    openModal: false,

  },
  {
    id: 2,
    site: "https://victorres85.github.io/memory_game/",
    active: false,
    img: 'https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Memory Game',
    // buid_with: 'React, JavaScript, NodeJs, Sass, Git, GitHub',
    buid_with: [
      {
      tech_img: React_svg,
      tech_alt: 'React' 
    },
    {
      tech_img: Nodejs_svg,
      tech_alt: 'NodeJs' 
    },{
      tech_img: Sass_svg,
      tech_alt: 'Sass' 
    },
    {
      tech_img: javascript,
      tech_alt: 'JavaScript' 
    },
    {
      tech_img: Git,
      tech_alt: 'GitHub' 
    },
  ],
    what_I_Have_Learned: 'This has been a fun project, my 5 years old son loves pokemon and memory games, so I have decided to make something he would enjoy playing. It has also helped me to better understand the use of Modals and has been a good way of practicing with the use of important hooks like useState and useEffect. ',
    github_link: 'https://github.com/victorres85/memory_game',
    pages_link: 'https://victorres85.github.io/memory_game/',
    openModal: false,

  },
  {
    id: 3,
    site: "https://victorres85.github.io/Linked_List/",
    active: false,
    img: 'https://images.pexels.com/photos/430202/pexels-photo-430202.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Linked List',
    // buid_with: ['Python', 'HTML'],
    buid_with: [
      {
      tech_img: python,
      tech_alt: 'Python' 
    },
    {
      tech_img: Html5,
      tech_alt: 'Html' 
    },
  ],
    what_I_Have_Learned: 'This has been a great project where I build a Linked List with different functionalities',
    github_link: 'https://github.com/victorres85/Linked_List',
    pages_link: 'https://victorres85.github.io/Linked_List/',
    openModal: false,
  },
  {
    id: 4,
    site: "http://online-shop-api-v2.herokuapp.com/bookstore/product/",
    active: false,
    img: 'https://images.pexels.com/photos/63238/pexels-photo-63238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Personal website',
    // buid_with: ['Django', 'Django-Rest-Framework', 'Python', 'Postgresql', 'GitHub', 'Docker', 'Heroku'],
    buid_with: [
      {
      tech_img: python,
      tech_alt: 'Python' 
    },
    {
      tech_img: Django,
      tech_alt: 'Django' 
    },
    {
      tech_img: DRFramework,
      tech_alt: 'Django Rest Framework' 
    },{
      tech_img: Postgresql,
      tech_alt: 'Postgresql' 
    },
    {
      tech_img: Github,
      tech_alt: 'Github' 
    },
    {
      tech_img: Docker,
      tech_alt: 'Docker' 
    },
    {
      tech_img: Heroku,
      tech_alt: 'Heroku' 
    },
  ],
    what_I_Have_Learned: 'This has been my first webpage written on React, here I have learned the basics of the frameworks: how to work with components, the use of the useState hook and writing modals. Have also learned  how to deploy my projects on the GitHub pages',
    github_link: 'https://github.com/victorres85/bookstore01',

  },
  {
    id: 5,
    site: "http://wine-shop-project.herokuapp.com/",
    active: false,
    img: 'https://images.pexels.com/photos/1309326/pexels-photo-1309326.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Wine Shop',
    // buid_with: ['Django', 'Postgres', 'Celery', 'Stripe', 'Docker', 'Heroku'],
    buid_with: [
      {
      tech_img: python,
      tech_alt: 'python' 
    },
    {
      tech_img: Django,
      tech_alt: 'Django' 
    },{
      tech_img: Postgresql,
      tech_alt: 'Postgres' 
    },
    {
      tech_img: Stripe,
      tech_alt: 'Stripe' 
    },

    {
      tech_img: Celery,
      tech_alt: 'Celery' 
    },
    {
      tech_img: Docker,
      tech_alt: 'Docker' 
    },
    {
      tech_img: Git,
      tech_alt: 'GitHub' 
    },

    {
      tech_img: Heroku,
      tech_alt: 'Heroku' 
    },
  ],
    what_I_Have_Learned: 'This program has helped me to learn the use of asynchronous tasks, to work with message queues and payment integration. The deployment part was particularly hard task after trying different options (DigitalOcean, EWS and Heroku) decided to deploy on Heroku, using Docker and GitActions for CICD.',
    github_link: 'https://github.com/victorres85/Wine_shop_project_heroku',
    openModal: false,
  },
];



function App() {
  // const myRef = useRef;
  // const ECards = useRef;
  // const ECV = useRef;

  // const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: ECards, inView: myECards } = useInView({ threshold: 1, delay: 200 });
  const { ref: ECV, inView: myECV } = useInView();

  console.log('ECards', myECards);
  console.log('ECV', myECV);

  return (
    <div className="App">
      <header className="App-header">
  
        <Navbar />
      </header>
      <article>
        <div className='social-media'>
           <a href='https://www.linkedin.com/in/victor-almeida-2a260b23/' target='_blank' ><img className='icon' src={Linkedin} alt='Linkedin'></img></a>
           <a href='https://github.com/victorres85/' target='_blank' ><img img className='icon' src={git} alt='GitHub'></img></a>
           <a href='https://www.instagram.com/brazilian_somm/' target='_blank' ><img img className='icon' src={instagram} alt='Instagram'></img></a>
           <a href='https://twitter.com/victorstalmeida' target='_blank' ><img img className='icon' src={Twitter} alt='Twitter'></img></a>

        </div>
        <div className='email'>
           <p><strong>|</strong> victorres.almeida@gmail.com</p>


        </div>
       
        <Cover />
        
        <AboutMe />
        <section className='card-box'>
            
            
              <div className="txt-conten">
                  <p> ____________________________________________ &nbsp; &nbsp; </p><h3 className="teste"> Courses I have taken...</h3>
            </div>
        </section>

        <section className='cards'>
         
              {
                  courses_list.map((card) =>
                      <Courses
                          key={card.id}
                          data={card}

                          />
                    )
                }
           
          </section>
          <section className='Project-box'>
            
            
              <div className="txt-conten">
              <h3 className="teste"> Courses I have taken...</h3><p>&nbsp; &nbsp; ____________________________________________  </p>
            </div>
        </section>
          <section className='projects'>
          
         
              {
                  lista.map((card) =>
                      <Projects
                          key={card.id}
                          data={card}

                          />
                    )
                }
           
          </section>
        

        <div id='Contact'>
          <Contact />
        </div>
      </article >
      <footer>
        <Footer />
      </footer>
    </div >
  );
}

export default App;
