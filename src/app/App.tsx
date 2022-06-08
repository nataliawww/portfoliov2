import Scene from "@components/Scene/Scene";
import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <Scene />
      <div className="header">
        <h1 className="title">natalia wojtkowska</h1>
      </div>
      <div className="text-container">
        <div className="text">
          <div className="about">
            <h3>about</h3>
            <p>Natalia is a creative developer based in Copenhagen. Focused on the creative side, she specialises in all stages of web development, from ideation and concepting through UX and interactions to writing high quality code. Her experience of 6 years spans across various working environments - agencies, studios, start-ups and corporate.</p>
            <br />
            <p>Loves three.js 💗</p>
          </div>
          <div className="about">
            <h3>selected work</h3>
            <ul>
              <li><a href="https://beinternetawesome.withgoogle.com/en_us/interland" target="_blank">Google Interland</a></li>
              <li><a href="https://loomispay.com/sv-se" target="_blank">Loomis Pay</a></li>
              <li><a href="https://14islands.com/vardagskampen/" target="_blank">Neuroforbundet</a></li>
              <li><a href="https://14islands.com/just-food-for-dogs/" target="_blank">Just Food For Dogs</a></li>
              <li><a href="https://www.thebrooklynvignettes.com/" target="_blank">Brooklyn Vignettes</a></li>
            </ul>
          </div>
          <div className="about">
            <h3>playground</h3>
            <ul>
              <li><a href="" target="_blank">WebVR balloon ride</a></li>
              <li><a href="" target="_blank">WebVR sunset</a></li>
              <li><a href="https://2017.14islands.com/">Merry Xmas</a></li>
              <li><a href="" target="_blank">Crystal Ball</a></li>
            </ul>
          </div>
          <div className="about">
            <h3>awards</h3>
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
          <div className="about">
            <h3 >contact</h3>
            <li><a href="mailto:nataliawtk@gmail.com" target="_blank">Email</a> <span className="mail">💌</span></li>
            <li><a href="https://www.linkedin.com/in/natalia-wojtkowska/" target="_blank">LinkedIn</a></li>
            <li><a href="https://twitter.com/titol92" target="_blank">Twitter</a></li>
            <li><a href="https://www.instagram.com/titolbanks/" target="_blank">Instagram</a></li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
