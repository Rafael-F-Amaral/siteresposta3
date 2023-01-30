import React from 'react'

const AlternativasProps = (props) => {
    return (
        <div className='AlternativaProps'>
            <h2>{props.nomemateria}</h2>
            <li>
                {props.questao1}
                <span style={{ color: 'green', fontWeight: '600' }}> {props.correto1} </span>
            </li>
            <li>
                {props.questao2}
                <span style={{ color: 'green', fontWeight: '600' }}> {props.correto2} </span>
            </li>
            <li>
                {props.questao3}
                <span style={{ color: 'green', fontWeight: '600' }}> {props.correto3} </span>
            </li>
            <li>
                {props.questao4}
                <span style={{ color: 'green', fontWeight: '600' }}> {props.correto4} </span>
            </li>
            <li>
                {props.questao5}
                <span style={{ color: 'green', fontWeight: '600' }}> {props.correto5} </span>
            </li>

        </div>
    )
}

export default AlternativasProps