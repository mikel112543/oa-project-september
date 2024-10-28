import {Button, ButtonGroup, Dropdown} from "react-bootstrap";
import React from "react";

// The state of this component has been lifted to the App for use.
// Once lifted the state is then passed as a prop to this component

const SortDropdown = ({filterType, setFilterType}) => {
    return (
        <Dropdown as={ButtonGroup}>
            <Button variant="secondary">{filterType === 'ascending' ? 'A-Z' : 'Z-A'}</Button>
            <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic"/>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => setFilterType('ascending')}>Sort A-Z</Dropdown.Item>
                <Dropdown.Item onClick={() => setFilterType('descending')}>Sort Z-A</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default SortDropdown;