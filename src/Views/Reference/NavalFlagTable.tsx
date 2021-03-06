import React from 'react';
import { NavalFlags } from 'puzzle-lib';
import Table from 'react-bootstrap/Table';
import './NavalFlagTable.scss';

function NavalFlagTable() {
  return (
    <div className="NavalFlagTable">
      <Table striped={true} responsive={true}>
        <thead>
          <tr>
            <th>Letter</th>
            <th>Flag</th>
          </tr>
        </thead>
        <tbody>
          {NavalFlags.instance.entries.map((value) => (
            <tr key={value.character}>
              <td>{value.character}</td>
              <td>
                <img
                  className="NavalFlagTable-flagImage"
                  src={`data:image/svg+xml,${encodeURIComponent(value.image.render())}`}
                  alt={value.character}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default NavalFlagTable;
