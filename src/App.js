import '../src/Css/style.css';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import CV from './components/CV';
import ExpandingCards from './components/ExpandingCads';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useInView } from 'react-intersection-observer';

const lista = [
  {
    id: 1,
    site: "https://victorres85.github.io/lucas_website/",
    active: false,
    img: 'https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80',
    title: 'Personal website',
    buid_with: 'React, JavaScript, NodeJs, Sass, OwlCarousel, Git, GitHub',
    what_I_Have_Learned: 'This has been my first webpage written on React, here I have learned the basics of the frameworks: how to work with components, the use of the useState hook and writing modals. Have also learned  how to deploy my projects on the GitHub pages',
    github_link: 'https://github.com/victorres85/lucas_website',
    pages_link: 'https://victorres85.github.io/lucas_website/',

  },
  {
    id: 2,
    site: "http://v-bookstore-api.herokuapp.com/bookstore/v1/product/",
    active: false,
    img: 'https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80',
    title: 'Personal website',
    buid_with: ['Django', 'Django-Rest-Framework', 'Python', 'Postgresql', 'GitHub', 'Docker', 'Heroku'],
    what_I_Have_Learned: 'This has been my first webpage written on React, here I have learned the basics of the frameworks: how to work with components, the use of the useState hook and writing modals. Have also learned  how to deploy my projects on the GitHub pages',
    github_link: 'https://github.com/victorres85/bookstore01',
    pages_link: 'http://v-bookstore-api.herokuapp.com/bookstore/v1/product/',

  },
  {
    id: 3,
    site: "https://victorres85.github.io/lucas_website/",
    active: false,
    img: 'https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80',
    title: 'Personal website',
    buid_with: 'React, JavaScript, NodeJs, Sass, Git, GitHub, OwlCarousel',
    what_I_Have_Learned: 'This has been my first webpage written on React, here I have learned the basics of the frameworks: how to work with components, the use of the useState hook and writing modals. Have also learned  how to deploy my projects on the GitHub pages',
    github_link: 'https://github.com/victorres85/lucas_website',
    pages_link: 'https://victorres85.github.io/lucas_website/',

  },
  {
    id: 4,
    site: "https://victorres85.github.io/lucas_website/",
    active: false,
    img: 'https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80',
    title: 'Personal website',
    buid_with: ['React', 'JavaScript', 'NodeJs', 'Sass', 'Git', 'GitHub', 'OwlCarousel'],
    what_I_Have_Learned: 'This has been my first webpage written on React, here I have learned the basics of the frameworks: how to work with components, the use of the useState hook and writing modals. Have also learned  how to deploy my projects on the GitHub pages',
    github_link: 'https://github.com/victorres85/lucas_website',
    pages_link: 'https://victorres85.github.io/lucas_website/',

  },
  {
    id: 5,
    site: "https://victorres85.github.io/lucas_website/",
    active: false,
    img: 'https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80',
    title: 'Personal website',
    buid_with: ['React', 'JavaScript', 'NodeJs', 'Sass', 'Git', 'GitHub', 'OwlCarousel'],
    what_I_Have_Learned: 'This has been my first webpage written on React, here I have learned the basics of the frameworks: how to work with components, the use of the useState hook and writing modals. Have also learned  how to deploy my projects on the GitHub pages',
    github_link: 'https://github.com/victorres85/lucas_website',
    pages_link: 'https://victorres85.github.io/lucas_website/',

  },
];

function App() {

  // const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: ECards, inView: myECards } = useInView();
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
        <div ref={ECV} id='About' className={`${ECV ? 'ECards2' : 'ECards'}`}>
          <CV />
        </div>
        <div id='Projects' ref={ECards} className={`${ECards ? 'ECards' : 'ECards2'}`}>
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
