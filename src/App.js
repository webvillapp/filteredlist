import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Now7 Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania', 'Władysław'];

const UsersList = ({users}) => {
  if(users.length>0) {
    return (
      <ul>
        {users.map(user => <li key={user}>{user}</li>)}
      </ul>
    );
  }

  return (
    <p>No results!</p>
  )
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: allUsers
    };
    this.filterUsers = this.filterUsers.bind(this);
  }

  // filterUsers(e) {
  //   const text = e.currentTarget.value;
  //   const newFilteredUsers = this.getFilteredUsersForText(text);
  //   this.setState({
  //     filteredUsers: newFilteredUsers
  //   })
  // }
  filterUsers(e) {
    const text = e.currentTarget.value;
    this.getFilteredUsersForText(text).then(
      newFilteredUsers => this.setState({filteredUsers:newFilteredUsers})
    ).catch(err => console.log(err));
  }

  // getFilteredUsersForText(text) {
  //   return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
  // }
  getFilteredUsersForText(text) {
    return new Promise(resolve => {
      const time = (Math.random() + 1) * 250;
      setTimeout(() => {
        const filteredUsers = allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
        resolve(filteredUsers);
      }, time) ;
    });
  }

  render() {
    return (
      <div>
        <input onInput={this.filterUsers} />
        <UsersList users={this.state.filteredUsers} />
      </div>
    );
  }
}

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

export default App;
