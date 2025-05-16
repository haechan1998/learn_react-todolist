import React from 'react';
import List from './List';

const FinishedList = ( {lists, onToggle, onRemove} ) => {
    return (
        <div className='FinishedList todoBox'>
            <List 
                lists={lists}
                onToggle={onToggle}
                onRemove={onRemove}
            />
            {/* {
                list.map( t => (
                    <div key={t.id}>{t.id} / {t.contents}</div>
                ))
            } */}
        </div>
    );
};

export default FinishedList;