import './Footer.css'

const GIF_LOGO = 'https://media.tenor.com/ukFvMg2-CZYAAAAM/cubes-shapes.gif'

const socialLinks = [
  {
    id: 'linkedin',
    href: '#',
    icon: <i className="fa fa-linkedin linked-in-logo"></i>,
    label: 'LinkedIn',
  },
  {
    id: 'github',
    href: '#',
    // ion-icon is a web component loaded via CDN script — use JSX string tag
    icon: <ion-icon name="logo-github" className="github-logo"></ion-icon>,
    label: 'GitHub',
  },
  {
    id: 'twitter',
    href: '#',
    icon: <i className="fa fa-twitter x-logo"></i>,
    label: 'X/Twitter',
  },
  {
    id: 'email',
    href: '#',
    icon: <span className="material-symbols-outlined">alternate_email</span>,
    label: 'Email me',
  },
  {
    id: 'phone',
    href: '#',
    icon: <span className="material-symbols-outlined">smartphone</span>,
    label: 'Call me',
  },
]

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-contents">
        <p id="footer-p">Let's Work Together...</p>

        <div className="footer-element-div footer-links">
          {socialLinks.map(link => (
            <div className="footer-link-wrapper" key={link.id}>
              {link.icon}
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </div>
          ))}
        </div>

        <hr id="footer-hr" />

        <div className="footer-bottom">
          <div className="header-title-img footer-title-img">
            <img id="footer-logo" src={GIF_LOGO} alt="RJ Development logo" />
            <h1 className="footer-logo-title">RJ Development</h1>
          </div>
          <p className="version">MyPortfolio v2.0</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
