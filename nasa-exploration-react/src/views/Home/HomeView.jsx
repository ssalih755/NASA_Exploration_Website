import NeoHero from '../../assets/images/Neo_Hero.jpg';
import "./HomeView.css";

export default function HomeView() {

return (
    <div className="container home-container">
      <h1> Guardians of the Sky </h1>
      <h2>Discover, Track, Laugh—All in One Place</h2>
      <p>Explore NASA’s media, track near-Earth objects, and enjoy a joke of the day!</p>
      <img src={NeoHero} alt="Neo Hero" className="hero-image"/>
    </div>
);

}