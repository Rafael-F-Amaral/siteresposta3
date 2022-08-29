import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Adg1 from '../../pages/respostas/engenharia-software/adg/adg1'
import Adg2 from '../../pages/respostas/engenharia-software/adg/adg2'
import Adg3 from '../../pages/respostas/engenharia-software/adg/adg3'
import Adg4 from '../../pages/respostas/engenharia-software/adg/adg4'

const TabsResp = () => {
  const [key, setKey] = useState('adg1');
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="adg1" title="ADG1" >
          <Adg1 />
        </Tab>
        <Tab eventKey="adg2" title="ADG2">
          <Adg2 />
        </Tab>
        <Tab eventKey="ad3" title="ADG3">
          <Adg3 />
        </Tab>
        <Tab eventKey="adg4" title="ADG4">
          <Adg4 />
        </Tab>
      </Tabs>
    </div>
  )
}

export default TabsResp