import '../src/Css/style.css';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import CV from './components/CV';
import ExpandingCards from './components/ExpandingCads';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Html5 from '../src/img/tecnologies/Html5.svg';
// import Css from '../src/img/tecnologies/Css.svg';
// import React_svg from '../src/img/tecnologies/React.svg';
// import javascript from '../src/img/tecnologies/javascript.svg';
// import python from '../src/img/tecnologies/Python.svg';
// import Java from '../src/img/tecnologies/Java.svg';
// import Django from '../src/img/tecnologies/Django.svg';
// import Mongodb from '../src/img/tecnologies/Python.svg';
// import Postgresql from '../src/img/tecnologies/Postgresql.svg';
// import Git from '../src/img/tecnologies/Git.svg';
// import Github from '../src/img/tecnologies/Github.svg';
// import Docker from '../src/img/tecnologies/Docker.svg';
// import Sass_svg from '../src/img/tecnologies/Sass.svg';
// import Nodejs_svg from '../src/img/tecnologies/Nodejs.svg';

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
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <article>
        <Cover />
        <CV />
        <ExpandingCards data={lista} />
        <Contact />
      </article>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
