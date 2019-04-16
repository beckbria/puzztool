import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import TabViewBase from '../TabViewBase';
import MorseBulkInput from '../../Morse/MorseBulkInput';
import MorseStream from '../../Morse/MorseStream';
import MorseTable from '../../Morse/MorseTable';
import './Morse.css';

class Morse extends TabViewBase {
  public render() {
    return (
      <div className="Morse">
        <div className="Morse-content">
          <Tabs
            activeKey={this.state.activeKey}
            animation={false}
            id="Morse-tabs"
            // tslint:disable-next-line: no-any
            onSelect={(activeKey: any) => this.onTabSelect(activeKey as number)}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <Tab className="Morse-tab-value" eventKey={1} title="Value">
              <MorseStream />
            </Tab>
            <Tab eventKey={2} title="Bulk Input">
              <MorseBulkInput />
            </Tab>
            <Tab eventKey={3} title="Reference">
              <MorseTable />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }

  protected getLocalStorageKey() {
    return 'Morse';
  }
}

export default Morse;
