import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { ADG1q1, ADG2q1, ADG3q1, ADG4q1 } from '../../Components/abasRespostas/LogicaQuestoes/TabsQuestoes/Adg1Logica/Adg1Logica'


const ADG = () => {
  const [key, setKey] = useState('adg1');

  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="sm-3 mb-3">
        <Tab eventKey="adg1" title="ADG1" >
          <ADG1q1 />
        </Tab>
        <Tab eventKey="adg2" title="ADG2">
          <ADG2q1 />
        </Tab>
        <Tab eventKey="ad3" title="ADG3">
          <ADG3q1 />
        </Tab>
        <Tab eventKey="adg4" title="ADG4">
          <ADG4q1 />
        </Tab>
      </Tabs>




    </div >


  )
}


export default ADG;