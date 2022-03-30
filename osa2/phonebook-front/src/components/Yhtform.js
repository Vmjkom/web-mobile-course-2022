import React from "react";

const Yhtform = ({event,nimi,change1,numero,change2}) => {
    return(
        
        <form onSubmit={event}>
            <div>
            Nimi:
                <input
            value={nimi}
            onChange={change1}
            />
            </div>
            <div>
                Numero:
                <input
                value={numero}
                onChange={change2}
                />

            </div>
            <button type="submit">lisää</button>
        </form>
    )
}
export default Yhtform