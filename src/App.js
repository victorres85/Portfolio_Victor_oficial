import '../src/Css/style.css';
import Navbar from './components/Navbar';
import Cover from './components/Cover/Cover';
import CV from './components/CV';
import ExpandingCards from './components/ExpandingCads';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import { useRef } from '/react';
import { useInView } from 'react-intersection-observer';

const lista = [
  {
    id: 1,
    site: "https://victorres85.github.io/lucas_website/",
    active: false,
    img: 'https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Personal website',
    buid_with: 'React, JavaScript, NodeJs, Sass, OwlCarousel, Git, GitHub',
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
    buid_with: 'React, JavaScript, NodeJs, Sass, Git, GitHub',
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
    buid_with: ['Python', 'HTML'],
    what_I_Have_Learned: 'This has been a great project where I build a Linked List with different functionalities',
    github_link: 'https://github.com/victorres85/Linked_List',
    pages_link: 'https://victorres85.github.io/Linked_List/',
    openModal: false,
  },
  {
    id: 4,
    site: "http://v-bookstore-api.herokuapp.com/bookstore/v1/product/",
    active: false,
    img: 'https://images.pexels.com/photos/63238/pexels-photo-63238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Personal website',
    buid_with: ['Django', 'Django-Rest-Framework', 'Python', 'Postgresql', 'GitHub', 'Docker', 'Heroku'],
    what_I_Have_Learned: 'This has been my first webpage written on React, here I have learned the basics of the frameworks: how to work with components, the use of the useState hook and writing modals. Have also learned  how to deploy my projects on the GitHub pages',
    github_link: 'https://github.com/victorres85/bookstore01',
    pages_link: 'http://v-bookstore-api.herokuapp.com/bookstore/v1/product/',
    openModal: false,

  },
  {
    id: 5,
    site: "http://wine-shop-project.herokuapp.com/",
    active: false,
    img: 'https://images.pexels.com/photos/1309326/pexels-photo-1309326.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Wine Shop',
    buid_with: ['Django', 'Postgres', 'Celery', 'Stripe', 'Docker', 'Heroku'],
    what_I_Have_Learned: 'This program has helped me to learn the use of asynchronous tasks, to work with message queues and payment integration. The deployment part was particularly hard task after trying different options (DigitalOcean, EWS and Heroku) decided to deploy on Heroku, using Docker and GitActions for CICD.',
    github_link: 'https://github.com/victorres85/Wine_shop_project_heroku',
    pages_link: 'http://wine-shop-project.herokuapp.com/',
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
        <Cover />
        <div ref={ECV} id='About' >

          <CV />
        </div>
        <div id='Projects' ref={ECards} className='projects' >
          {/* <div id='Projects' className='projects'> */}
          <ExpandingCards data={lista} />
        </div>
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
