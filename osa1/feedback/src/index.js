import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({stat1,stat2,stat3,stat4,stat5,ehto}) => {
 const bol = ehto;
 if (ehto){
   return(
     <div>
    <table>
    <tbody>
    <Statistic  text={"Hyvä"} stat={stat1}/>
    <Statistic text="Neutraali" stat={stat2}></Statistic>
    <Statistic text={"Huono"} stat={stat3}></Statistic>
    <Statistic text={"Keskiarvo"} stat={stat4}></Statistic>
    <Statistic text={"Positiivisia"} stat={stat5} ></Statistic>
    </tbody>
    
    </table>
    </div>
   )
 } else {
   return(
   <p> Ei yhtään palautetta anettu</p>
   )
 }
 
  }
  


const Statistic = ({stat,text}) => (
  <tr><td>{text}</td><td>{stat}</td></tr>
)

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


  render() {
    
    
      return (
        <>
        
    
        <h1>Anna palautetta</h1>
    <Button handleClick={this.klikhyvä} text="Hyvä"/>
    <Button handleClick={this.klikneutraali} text="Neutraali"/>
    <Button handleClick={this.klikhuono} text="Huono"/>
    <h1>Statistiikkaa</h1>
    <Statistics stat1={this.state.hyvä} 
    stat2={this.state.neutraali} 
    stat3={this.state.huono} 
    stat4={(this.state.summa / this.state.kaikki.length).toFixed(1)} 
    stat5={(this.state.posit.length/this.state.kaikki.length).toFixed(1)*100 + " %"} 
    ehto = {this.state.kaikki.length != 0}/>
      </>
      )
    
    
      
    
  
    
    
      
      
    }
  
  
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



