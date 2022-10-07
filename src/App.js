import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
      {
        name: 'Linda',
        id: '12fd1231df',
      },
      {
        name: 'Frank',
        id: '12frtg1123',
      },
      {
        name: 'Jacky',
        id: '12ewedtgfwer3',
      },
      {
        name: 'Andrei',
        id: 'sdgfewr123',
      }
    ]
    }
  }

  render() {

    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
            );
          })
        }
      </div>
    );

  }
}

export default App;
