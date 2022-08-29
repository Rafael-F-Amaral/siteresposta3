import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const ADG1 = () => {
  const [key, setKey] = useState('adg1');
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 justify-content-md-center" 
      >
        <Tab eventKey="adg1" title="Questão 1">
          <div className='respostas1'>
            Alternativas:
            <article className='correto'>
              a)
              Ciências da Computação, Tecnologia da Informação e programação / algoritmos / análise de sistemas.
            </article>

            <article>
              b)
              Matemática e Ciências / raciocínios / criação de problemas.
            </article>

            <article>
              c)
              Ciências da Computação e informática / Matemática / análise de sistemas.
            </article>

            <article>
              d)
              Tecnologia de Informação e programação / relatórios / atividades racionais.
            </article>

            <article>
              e)
              Matemática / argumentos / construção de falácias.
            </article>
          </div>
        </Tab>
        <Tab eventKey="adg2" title="Questão 2">
          2
        </Tab>
        <Tab eventKey="ad3" title="Questão 3">
          333333
        </Tab>
        <Tab eventKey="adg4" title="Questão 4">
          4
        </Tab>
      </Tabs>
    </div>
  )
}

const ADG2 = () => {
  const [key, setKey] = useState('adg1');
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 justify-content-md-center"
      >
        <Tab eventKey="adg1" title="Questão 1">
          1
        </Tab>
        <Tab eventKey="adg2" title="Questão 2">
          2
        </Tab>
        <Tab eventKey="ad3" title="Questão 3">
          3
        </Tab>
        <Tab eventKey="adg4" title="Questão 4">
          4
        </Tab>
      </Tabs>
    </div>
  )
}

const ADG3 = () => {
  const [key, setKey] = useState('adg1');
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 justify-content-md-center"
      >
        <Tab eventKey="adg1" title="Questão 1">
          1
        </Tab>
        <Tab eventKey="adg2" title="Questão 2">
          2
        </Tab>
        <Tab eventKey="ad3" title="Questão 3">
          3
        </Tab>
        <Tab eventKey="adg4" title="Questão 4">
          4
        </Tab>
      </Tabs>
    </div>
  )
}

const ADG4 = () => {
  const [key, setKey] = useState('adg1');
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 justify-content-md-center"
      >
        <Tab eventKey="adg1" title="Questão 1">
          1
        </Tab>
        <Tab eventKey="adg2" title="Questão 2">
          2
        </Tab>
        <Tab eventKey="ad3" title="Questão 3">
          3
        </Tab>
        <Tab eventKey="adg4" title="Questão 4">
          4
        </Tab>
      </Tabs>
    </div>
  )
}

export { ADG1, ADG2, ADG3, ADG4 };