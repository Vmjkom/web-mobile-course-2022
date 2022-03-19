import React from "react"

const Yhteystieto = ({yhteystieto}) => {
    return(
        <li>{yhteystieto.name} {yhteystieto.number} {yhteystieto.id}</li>
        
    )
}

export default Yhteystieto
