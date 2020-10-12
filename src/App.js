import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
    state = {
        characters: [
        
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
          
        ],
      }
      render() {
        const { characters } = this.state
      
        return (
          <div className="container">
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
          </div>
        )
      }
      removeCharacter = (index) => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
}
  
export default App