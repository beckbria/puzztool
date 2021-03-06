import React from 'react';
import Tab from 'react-bootstrap/Tab';
import TabsView from '../../Common/TabsView';
import ResistorInput from '../../Resistor/ResistorInput';
import ResistorTable from '../../Resistor/ResistorTable';

function Resistors() {
  return (
    <TabsView id="Resistors-tabs">
      <Tab eventKey={1} title="Value">
        <ResistorInput />
      </Tab>
      <Tab eventKey={2} title="Reference">
        <ResistorTable />
      </Tab>
    </TabsView>
  );
}

export default Resistors;
