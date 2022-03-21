import React from "react"

const Yhteystieto = ({yhteystieto,poisto}) => {
    return(
        <li>{yhteystieto.name} {yhteystieto.number}  <button onClick={poisto}> poista </button> </li>
        
        
    )
}

export default Yhteystieto
