import './App.css';
import React from 'react';
import Yhteystieto from './components/Yhteystieto'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      yhteystiedot: props.yhteystiedot,
      newName: ''
    }
  }

  addName = (event) => {
    event.preventDefault()
    
    const yObject = {
      name: this.state.newName
    }
    const yhteystiedot = 
      this.state.yhteystiedot.some((n => n.name === yObject.name)) ?
      this.state.yhteystiedot :
      this.state.yhteystiedot.concat(yObject)
     
      
    this.setState({
        yhteystiedot: yhteystiedot,
        newName: ""
      })
      
    }
    
  

  handleNimiChange = (event) => {
    
    this.setState({newName: event.target.value})
  }

  render() {
    
    return (
      
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          nimi: <input
                  value={this.state.newName}
                  onChange={this.handleNimiChange}
                  
                />
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
