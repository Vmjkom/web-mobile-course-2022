import './App.css';
import React from 'react';
import Yhteystieto from './components/Yhteystieto'
import Yhtform from './components/Yhtform';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      yhteystiedot: [],
      newName: '',
      newNumber: ''
    }
  }
  componentDidMount() {
    console.log('did mount')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ yhteystiedot: response.data })
      })
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
        
        <Yhtform event={this.addContact} nimi={this.state.newName} change1={this.handleNimiChange}
                                          numero={this.state.newNumber} change2={this.handleNumChange}
        />
        
        <h2>Numerot</h2>
        <ul>
          {this.state.yhteystiedot.map(yhteystieto => <Yhteystieto key={yhteystieto.name} yhteystieto={yhteystieto}/>)}
        </ul>
      </div>
    )
  }
}

export default App
