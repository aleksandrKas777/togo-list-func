import React from 'react';
import PropTypes from 'prop-types';

export const ButtonDispList = ({displayList}) => {
    return (
        <div>
            <button key={101} onClick={() => displayList('all')}>все задачи</button>
            <button key={102} onClick={() => displayList('active')}>активные задачи</button>
            <button key={103} onClick={() => displayList('completed')}>завершенные задачи</button>
        </div>
    );
};

ButtonDispList.PropTypes = {
    displayList: PropTypes.func.isRequired
};
