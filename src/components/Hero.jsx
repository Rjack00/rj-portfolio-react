import './Hero.css'

function Hero() {
  return (
    <section id="welcome-section">
      <h1 id="welcome-title">Robert Jackson</h1>
      <div className="rob-details-wrapper">
        <hr className="intro-hr" />
        <h2 className="rob-details rob-details-title">
          Full-Stack Developer & Systems-Oriented Problem Solver
        </h2>
        <h3 className="rob-details details-line-1">
          Building practical web applications with JavaScript, React, Node.js, and MongoDB — backed by years of experience improving workflows, operations, training systems, and customer-facing services in fast-paced environments.
        </h3>
        <h3 className="rob-details details-line-2">
          Focused on scalable tools, workflow systems, operational efficiency, communication, and user-focused solutions that solve real business problems.
        </h3>
        <hr className="intro-hr" />
      </div>
    </section>
  )
}

export default Hero
