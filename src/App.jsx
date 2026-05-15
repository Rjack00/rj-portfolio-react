import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

const projectsArr = [
  {
    id: 'project1',
    title: 'Project 1',
    href: 'https://codepen.io/Rjack/full/OabdKM',
    img: 'https://www.techfunnel.com/wp-content/uploads/2019/08/6-Techniques-to-Secure-Funding-for-IT-Projects-1.png',
  },
  {
    id: 'project2',
    title: 'Project 2',
    href: 'https://codepen.io/Rjack/full/OabdKM',
    img: 'https://gnnhd.tv/media/43183/conversions/IT-Sector-1280x720.webp',
  },
  {
    id: 'project3',
    title: 'Project 3',
    href: 'https://codepen.io/Rjack/full/OabdKM',
    img: '/assets/images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg'
  },
  {
    id: 'project4',
    title: 'Project 4',
    href: 'https://codepen.io/Rjack/full/OabdKM',
    img: 'https://us.123rf.com/450wm/peshkova/peshkova1802/peshkova180200955/95655203-creative-colorful-digital-business-chart-wallpaper-investment-and-trade-concept-3d-rendering.jpg?ver=6',
  },
  {
    id: 'project5',
    title: 'Project 5',
    href: 'https://codepen.io/Rjack/full/OabdKM',
    img: 'https://images.spiceworks.com/wp-content/uploads/2022/08/02141047/facets-of-data-analytics.jpg',
  },
]

function App() {
  return (
    <>
      <Navbar />
      <main id="main" className="main">
        <div className="main-section-wrapper">
          <Hero />
          <Projects projects={projectsArr} />
        </div>
        <div className="to-top-arrow-div" title="Top of page">
          <a id="top-of-page" href="#main">
            <img
              id="arrow-image"
              src="https://units.arma3.com/assets/img/units/icons/ranks/shape_private.png"
              alt="Back to top"
            />
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
