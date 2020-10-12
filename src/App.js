import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
    render() {
      const characters = [
        {
          FName: 'Charlie',
          LName: 'Brown',
          Possition: 'Janitor',
          Department: 'Health and safety'
        },
        {
            FName: 'Mac',
            LName: 'Divian',
            Possition: 'Bouncer',
            Department: 'Security'
        },
        {
            FName: 'Dee',
            LName: 'Vila',
            Possition: 'Actress',
            Department: 'Broadcasting'
        },
        {
            FName: 'Dennis',
            LName: 'Shuller',
            Possition: 'Bartender',
            Department: 'Food and Alcohol'
        },
      ]
  
      return (
        <div className="container">
          <Table characterData={characters} />
        </div>
      )
    }
  }

export default App