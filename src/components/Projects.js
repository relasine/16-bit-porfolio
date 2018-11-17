import React, { Component } from "react";
import "../css/Projects.css";

import Bard from "./Bard";
import Barkeep from "./Barkeep";
import BarPatron from "./BarPatron";
import NoddingPatron from "./NoddingPatron";
import StandingPatron from "./StandingPatron";
import Fireplace from "./Fireplace";

class Projects extends Component {
  constructor() {
    super();

    this.state = {
      bard: false,
      barkeep: false,
      barPatron: false,
      noddingPatron: false,
      standingPatron: false
    };
  }

  bard = () => {
    this.setState({
      bard: !this.state.bard,
      barkeep: false,
      barPatron: false,
      noddingPatron: false,
      standingPatron: false
    });
  };

  barkeep = () => {
    this.setState({
      bard: false,
      barkeep: !this.state.barkeep,
      barPatron: false,
      noddingPatron: false,
      standingPatron: false
    });
  };

  barPatron = () => {
    this.setState({
      bard: false,
      barkeep: false,
      barPatron: !this.state.barPatron,
      noddingPatron: false,
      standingPatron: false
    });
  };

  noddingPatron = () => {
    this.setState({
      bard: false,
      barkeep: false,
      barPatron: false,
      noddingPatron: !this.state.noddingPatron,
      standingPatron: false
    });
  };

  standingPatron = () => {
    this.setState({
      bard: false,
      barkeep: false,
      barPatron: false,
      noddingPatron: false,
      standingPatron: !this.state.standingPatron,
      laughPatron: true
    });
    setTimeout(this.clearStandingPatron, 5000);
  };

  clearStandingPatron = () => {
    this.setState({
      laughPatron: false
    });
  };

  render() {
    return (
      <section className="projects">
        <div className="tavern" />
        <Barkeep dialogue={this.barkeep} />
        <Bard dialogue={this.bard} />
        <BarPatron dialogue={this.barPatron} />
        <NoddingPatron dialogue={this.noddingPatron} />
        <StandingPatron
          active={this.state.laughPatron}
          dialogue={this.standingPatron}
        />
        <Fireplace />
        <p className={`bard-dialogue ${this.state.bard}`}>
          MovieTracker is a web application that allows users to search and
          filter films and favorite them. It uses the Movie Database API.
          Powered by React.js, Redux, and Express.
        </p>
        <p className={`barkeep-dialogue ${this.state.barkeep}`}>
          SWAPIBox, aka "Jedi Archives Access", is an application that requires
          a series of nested API calls for displaying Star Wars-related data. A
          highly-narrative experience powered by React.
        </p>
        <p className={`bar-patron-dialogue ${this.state.barPatron}`}>
          NOM NOM Snake is a fun take on the classic arcade game, 'Snake'.
          Powered by object-oriented JavaScript and HTML Canvas.
        </p>
        <p className={`nodding-patron-dialogue ${this.state.noddingPatron}`}>
          Headcount is a React application used to sort, display, and compare
          test score information for different Colorado school districts.
        </p>
        <p className={`standing-patron-dialogue ${this.state.standingPatron}`}>
          Nmbus Weather is a web-application built for phones the utilizies the
          Weather Underground API to display weather forecasts. Locations are
          searchable by city name or zip code. Powered by React.
        </p>
      </section>
    );
  }
}

export default Projects;