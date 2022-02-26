import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyvä: 0,
      neutraali: 0,
      huono: 0
    }
  }
  render() {
    return (
      <div>
    <h1>anna palautetta</h1>
  
    <button onClick={() => this.setState({ hyvä: this.state.hyvä + 1 })}>
  hyvä
</button>
<button onClick={() => this.setState({ neutraali: this.state.neutraali + 1 })}>
  neutraali
</button>
<button onClick={() => this.setState({ huono: this.state.huono + 1 })}>
  huono
</button>
    <h1>Statistiikkaa</h1>
    <p> hyvä {this.state.hyvä}</p>
    <p> neutraali {this.state.neutraali}</p>
    <p> huono {this.state.huono}</p>
      </div>
    
    )
  }
  
  
}








ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



