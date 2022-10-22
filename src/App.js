import Users from "./user";
import "./styles.css";
import React, { Component } from "react";

class App extends Component {  
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: true };
    this.showUsers = this.showUsers.bind(this);
  }

  showUsers() {
    document.getElementById("main").style.display = "flex";
    const source = "https://reqres.in/api/users?page=1";
    fetch(source)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    
    return (
      
      <>
        
          <nav id="col-sm-6 col-md-4">
            <ul>
                <li><h1 id="logo">LetsGrowMore</h1></li>         
                <li><button onClick={this.showUsers}>Get Users</button></li>
            </ul>
          </nav>
        

        <Users loading={this.state.loading} users={this.state.users_data} />
      </>
    );
  }
}
export default App;