import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'toronto', label: 'Toronto' },
    { value: 'nyc', label: 'NYC' }
]

export const LocationFilter = props => (
    <div className="filter">
        <h3>Select Location</h3>
        <Select
            value={props.location}
            options={options}
            onChange={props.handleChange}
            isSearchable={false}
            defaultValue={{ value: 'toronto', label: 'Toronto' }}
            styles={props.styles}
        />
    </div>
)