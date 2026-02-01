import Terminal from "./terminal/Terminal";

const HomeSection = () => {
  return (
    <section>
      <div className="home-content">
        <h1>I'm Jonathan Pinilla</h1>
        <h2>_Software Engineer</h2>
        <h3><a></a> <a></a></h3>
      </div>
      <div className="terminal-container">
        <Terminal/>
      </div>
      <div className="circle"></div>
      <div className="circle2"></div>
    </section>
  )
}

export default HomeSection;
