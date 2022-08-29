import React from 'react'
import styles from './Header.module.css'


const Header = () => {
  return (
    <nav>
      <ul className={styles.listaMenu}>
        <li >Home</li>
        <li>Respostas</li>
        <li>Download</li>
        <li>Atualizações</li>
        
      </ul>
    </nav>
  )
}

export default Header