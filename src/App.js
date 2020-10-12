import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
    render() {
      const characters = [
        {
          fname: 'Charlie',
          lname: 'Brown',
          possition: 'Janitor',
          department: 'Health and safety'
        },
        {
            fname: 'Mac',
            lname: 'Divian',
            possition: 'Bouncer',
            department: 'Security'
        },
        {
            fname: 'Dee',
            lname: 'Vila',
            possition: 'Actress',
            department: 'Broadcasting'
        },
        {
            fname: 'Dennis',
            lname: 'Shuller',
            possition: 'Bartender',
            department: 'Food and Alcohol'
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