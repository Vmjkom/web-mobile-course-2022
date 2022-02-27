import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyvä: 0,
      neutraali: 0,
      huono: 0,
      kaikki: [],
      posit: [],
      summa: 0
    }
  }
  klikhyvä = () => {
    this.setState({
      hyvä: this.state.hyvä + 1,
      kaikki: this.state.kaikki.concat(1),
      summa: this.state.summa + 1,
      posit: this.state.posit.concat(1)
    })
  }

  klikhuono = () => {
    this.setState({
      huono: this.state.huono + 1,
      kaikki: this.state.kaikki.concat(-1),
      summa: this.state.summa - 1
    })
  }

  klikneutraali = () => {
    
    this.setState({
      neutraali: this.state.neutraali + 1,
      kaikki: this.state.kaikki.concat(0),
      summa: this.state.summa + 0
    })
  }

  laskekarvo  = (props) => {
    const t = props.arr
    return(
      <>
      {}
      </>
    )
  }
  render() {
    return (
      <div>
    <h1>anna palautetta</h1>
    {console.log(this.state.posit)}
    <button onClick={this.klikhyvä}>hyvä</button>
    <button onClick={this.klikneutraali}>neutraali</button>
    <button onClick={this.klikhuono}>huono</button>
      <h1>Statistiikkaa</h1>
      <p> hyvä {this.state.hyvä}</p>
      <p> neutraali {this.state.neutraali}</p>
      <p> huono {this.state.huono}</p>
      <p> keskiarvo {this.state.summa / this.state.kaikki.length}</p>
      <p> positiivisia {this.state.posit.length / this.state.kaikki.length}%</p>
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



