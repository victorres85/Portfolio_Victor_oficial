import '../src/Css/style.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import ExpandingCards from './components/ExpandingCads';


const lista = [
  {
    id: 1,
    site: "https://victorres85.github.io/lucas_website/",
    title: 'Turn',
    active: false,
    img: 'https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80'
  },
  {
    id: 2,
    site: "https://victorres85.github.io/lucas_website/",
    title: 'Turn',
    active: true,
    img: 'https://media.istockphoto.com/vectors/abstract-blurred-colorful-background-vector-id1248542684?k=20&m=1248542684&s=612x612&w=0&h=1yKiRrtPhiqUJXS_yJDwMGVHVkYRk2pJX4PG3TT4ZYM='
  },
  {
    id: 3,
    site: "https://victorres85.github.io/lucas_website/",
    title: 'Turn',
    active: false,
    img: 'https://i.pinimg.com/originals/7e/1c/0b/7e1c0b3223789770299bc3b66b2fc2a0.jpg'
  },
  {
    id: 4,
    site: "https://victorres85.github.io/lucas_website/",
    title: 'Turn',
    active: false,
    img: 'https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 5,
    site: "https://victorres85.github.io/lucas_website/",
    title: 'TEste5',
    active: false,
    img: 'https://images.pexels.com/photos/358238/pexels-photo-358238.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <article>
        <About />
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
