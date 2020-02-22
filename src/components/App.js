import React, { Component } from "react";
import { CardList } from "./card-list/CardList";
import { SearchBox } from "./search-box/SearchBox";
import "./App.styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      profiles: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response =>
      response.json().then(users => this.setState({ profiles: users }))
    );
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { profiles, searchField } = this.state;
    const filteredProfiles = profiles.filter(profiles =>
      profiles.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>User Profiles</h1>
        <SearchBox
          placeholder="Search Profile"
          handleChange={this.handleChange}
        />
        <CardList profiles={filteredProfiles} />
      </div>
    );
  }
}

export default App;
