import React from 'react';
import Select from 'react-select';
import { groupedOptions } from './locations';

export const LocationFilter = props => (
    <div className="filter">
        <h3>Select/Search Location</h3>
        <Select
            value={props.location}
            options={groupedOptions}
            onChange={props.handleChange}
            isSearchable={true}
            defaultValue={{ value: 'toronto', label: 'Toronto' }}
            styles={props.styles}
        />
    </div>
)