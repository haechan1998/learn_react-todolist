import React from 'react';
import List from './List';
const TodoList = ({lists, onToggle, onRemove}) => {
    
    return (
        <div className='TodoList todoBox'>
            <List 
                lists={lists}
                onToggle={onToggle}
                onRemove={onRemove}
            />
            {/* {
                list.map( t => (
                    <div key={t.id}>{t.id} / {t.contents} <button onClick={onToggle}>체크</button></div>
                ))
            } */}
        </div>
    );
};

export default TodoList;