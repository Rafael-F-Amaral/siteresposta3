import React from 'react'

const AlternativasProps = (props) => {
    return (
        <div>
            <h2>{props.nomemateria}</h2>
            <li>{props.questao1}</li>
            <li>{props.questao2}</li>
            <li>{props.questao3}</li>
            <li>{props.questao4}</li>
            <li>{props.questao5}</li>

        </div>
    )
}

export default AlternativasProps