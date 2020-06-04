import React from 'react';
import Row from '../Row/row.component';

const Table = props => (
    <table>
        <tbody>
            <tr>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>LINK</th>
            <th>TYPE</th>
            </tr>
            {
            props.data.map((item, i) => (
                <Row 
                    key={i}
                    id={item.id}
                    displayName={item.displayName}
                    description={item.description}
                    link={item.link}
                    type={item.type}
                    location={props.location}
                />
            ))
            }
        </tbody>
    </table>
)

export default Table;