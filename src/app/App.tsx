import Scene from "@components/Scene/Scene";
import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <div className="scene-container">
        <Scene />
      </div>
      <div className="header">
        <h1 className="title">Natalia Wojtkowska</h1>
      </div>
      <div className="text-container">
        <div className="text">
          <div className="column">
            <h2>About</h2>
            <p>Natalia is a creative developer based in Copenhagen. Very design oriented, she specialises in all stages of web development, from ideation and concepting through UX and interactions to writing high quality code. Her experience of 6 years spans across various working environments - agencies, studios, start-ups and corporate.</p>
            <br />
            <p>She 💗s the internet, playing around with new technologies and building fun experiences that people love.</p>
          </div>
          <div className="column">
            <h2>Selected work</h2>
            <ul>
              <li><a href="https://beinternetawesome.withgoogle.com/en_us/interland" target="_blank">Google Interland</a></li>
              <li><a href="https://loomispay.com/" target="_blank">Loomis Pay</a></li>
              <li><a href="https://14islands.com/just-food-for-dogs/" target="_blank">Just Food For Dogs</a></li>
              <li><a href="https://14islands.com/vardagskampen/" target="_blank">Neuroforbundet</a></li>
            </ul>
            <h2>Personal</h2>
            <ul>
              <li><a href="https://www.someplacenice.co/" target="_blank">Someplace Nice</a></li>
              <li><a href="https://www.thebrooklynvignettes.com/" target="_blank">Brooklyn Vignettes</a></li>
            </ul>
          </div>
          <div className="column">
            <h2>Playground</h2>
            <ul>
              <li><a href="https://v2.14islands.com/blog/2017/05/17/engaging-vr-experiences-on-the-web/" target="_blank">WebVR balloon ride</a></li>
              <li><a href="https://flamingo-sunset.glitch.me/" target="_blank">WebVR sunset</a></li>
              <li><a href="https://2017.14islands.com/">Merry Xmas</a></li>
              <li><a href="https://crystal-ball.glitch.me/" target="_blank">Happy Halloween</a></li>
            </ul>
          </div>
          <div className="column">
            <h2>Awards</h2>
            <ul>
              <li>European Design Awards - Bronze</li>
              <li>Awwwards Site of the Day</li>
              <li>Awwwards Developer Award</li>
              <li>Awwwards Honorable Mention</li>
              <li>Awwwards Honorable Mention</li>
              <li>FWA Top 100</li>
              <li>FWA Site of the Day</li>
            </ul>
          </div>
          <div className="column">
            <h2>Contact</h2>
            <ul>
              <li><a href="mailto:nataliawtk@gmail.com" target="_blank">Email</a> <span className="mail">💌</span></li>
              <li><a href="https://www.linkedin.com/in/natalia-wojtkowska/" target="_blank">LinkedIn</a></li>
              <li><a href="https://twitter.com/titol92" target="_blank">Twitter</a></li>
              <li><a href="https://www.instagram.com/titolbanks/" target="_blank">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
