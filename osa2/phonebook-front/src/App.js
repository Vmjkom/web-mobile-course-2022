import './App.css';
import React from 'react';
import Yhteystieto from './components/Yhteystieto'
import Yhtform from './components/Yhtform';
import axios from 'axios'
import contacts from './services/contacts';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      yhteystiedot: [],
      newName: '',
      newNumber: ''
    }
  }
  getAll = () => {
    const baseUrl = '/api/persons'
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }

  componentDidMount() {
    console.log('did mount')
    axios
      .get('http://localhost:3001/api/persons')
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
    
      if (this.state.yhteystiedot.some((n => n.name === yObject.name))){
        alert('Nimi on jo käytössä')
        this.setState({
          yhteystiedot: this.state.yhteystiedot,
          newName: '',
          newNumber: ''
        })
            
          
      } else{
        axios
        .post("http://localhost:3001/api/persons",yObject)
        .then(response => {
          this.setState({
            yhteystiedot: this.state.yhteystiedot.concat(response.data),
            newName: '',
            newNumber: ''
          })
        })
      }
}
      
     
handlePoisto = (contact) => {
  return () => {
    
    if (window.confirm(`Poistetaanko ${contact.name}`))
      contacts
      .poista(contact.id)
      .then(res => {
        console.log(res)

        this.setState({
          yhteystiedot: this.state.yhteystiedot.filter(n => n.id !== contact.id)
        }
          
        )
      })
      
  }

}
    
      
    
    
  

  handleNimiChange = (event) => {
    
    this.setState({newName: event.target.value})
  }
  handleNumChange = (event) => {
    
    this.setState({newNumber: event.target.value})
  }

  render() {
    console.log('render')
    return (
      
      <div>
        <h2>Puhelinluettelo</h2>
        
        <Yhtform event={this.addContact} nimi={this.state.newName} change1={this.handleNimiChange}
                                          numero={this.state.newNumber} change2={this.handleNumChange}
        />
        
        <h2>Numerot</h2>
        <ul>
          {this.state.yhteystiedot.map(yhteystieto => <Yhteystieto key={yhteystieto.name} yhteystieto={yhteystieto} poisto={this.handlePoisto(yhteystieto)} />)}
        </ul>
      </div>
    )
  }
}

export default App
