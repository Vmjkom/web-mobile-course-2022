import './App.css';
import React from 'react';
import Yhteystieto from './components/Yhteystieto'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      yhteystiedot: props.yhteystiedot,
      newName: '',
      newNumber: ''
    }
  }

  addContact = (event) => {
    event.preventDefault()
    
    const yObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    const yhteystiedot = 
      this.state.yhteystiedot.some((n => n.name === yObject.name)) ?
      this.state.yhteystiedot :
      this.state.yhteystiedot.concat(yObject)
     
      
    this.setState({
        yhteystiedot: yhteystiedot,
        newName: "",
        newNumber: ""
      })
      
    }
    
  

  handleNimiChange = (event) => {
    
    this.setState({newName: event.target.value})
  }
  handleNumChange = (event) => {
    
    this.setState({newNumber: event.target.value})
  }

  render() {
    
    return (
      
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addContact}>
          <div>
          nimi: <input
                  value={this.state.newName}
                  onChange={this.handleNimiChange}
                  
                />
          </div>
          <div>
          numero: <input
                    value={this.state.newNumber}
                    onChange={this.handleNumChange}
                    />
          </div>
            <button type="submit">lisää</button>
         </form>       
        <h2>Numerot</h2>
        <ul>
          {this.state.yhteystiedot.map(yhteystieto => <Yhteystieto key={yhteystieto.name} yhteystieto={yhteystieto}/>)}
        </ul>
      </div>
    )
  }
}

export default App
