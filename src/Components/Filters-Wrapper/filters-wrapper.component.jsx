import React from 'react';
import {LocationFilter} from '../Filters/filter.location.component';
import NewRow from '../New-Row/new-row.component';

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        padding: '5px 5px 5px 10px',
        border: state.isFocused ? '1px solid black' : '1px solid #c8c8c8',
        '&:hover': '1px solid #c8c8c8',
        outline: '0 !important'
    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected || state.isFocused ? 'black' : '#666666',
        background: state.isSelected || state.isFocused ? '#e8e8e8' : 'transparent',
        padding: '10px 15px',
        width: 'auto',
        transition: 'all 0.2s ease'
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: '#c8c8c8 !important',
        '&:hover': '#c8c8c8'
    }),
    menu: (provided) => ({
        ...provided,
        background: 'white',
        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
        borderRadius: '10px'
    }),
    menuList: (provided) => ({
        ...provided,
        padding: '8px 0'
    })
  }

const FiltersWrapper = props => (
    <div className="filters-wrapper">
        <LocationFilter
            value={props.location}
            handleChange={props.handleLocationChange}
            styles={customStyles}
        />
        <NewRow 
            location={props.location}
        />
    </div>
)

export default FiltersWrapper;