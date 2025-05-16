import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoTrashOutline } from "react-icons/io5";
import './list.css';
import Tag from './Tag';

const List = ({ lists, onToggle, onRemove }) => {

    return (
        <div className='List'>
            {
                lists.map(list => (
                    <div key={list.id} className='todo'>
                        <Form>
                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch"
                                // label="Check this switch"
                                checked={list.isFinish}
                                onChange={() => onToggle(list.id)}
                            // onClick={() => onToggle(list.id)}
                            />
                        </Form>
                        <div
                            className='todoContents'
                            style={{
                                textDecoration: list.isFinish ? 'line-through' : 'none',
                                marginRight: '10px'
                            }}
                        >
                            {list.contents}
                        </div>
                        {/* 여기에 태그를 달아보자... */}
                        {/* 태그가 달리는 곳은 todo 아래 */}
                        <Tag 
                        lists = {lists}
                        />
                        <button onClick={() => onRemove(list.id)}><IoTrashOutline /></button>

                    </div>
                ))
            }
        </div>
    );
};

export default List;