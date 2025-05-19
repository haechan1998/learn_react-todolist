import React from 'react';
import Form from 'react-bootstrap/Form';
import { IoTrashOutline } from "react-icons/io5";
import Tag from './Tag';
import 'bootstrap/dist/css/bootstrap.min.css';
import './list.css';

const tagLabels = ['공부', '일', '코딩', '계획', '여행'];

const List = ({ lists, onToggle, onRemove, onSelect }) => {
    return (
        <div className="List">
            {lists.map(list => (
                <div key={list.id} className="todo">
                    <Form>
                        <Form.Check
                            type="switch"
                            checked={list.isFinish}
                            onChange={() => onToggle(list.id)}
                        />
                    </Form>
                    <div className="todoContents">
                        <div className="tagBox top">
                            {/* 조건부 랜더링을 사용해서 출력문 제어 */}
                            {/* true 일 경우 랜더링 false 일 경우 랜더링 X */}
                            {list.tags.map((tag, idx) =>
                                tag.selected && (
                                    <div key={tag.id} className={`tag tag${tag.id}`}>
                                        {tagLabels[idx]}
                                    </div>
                                )
                            )}
                        </div>
                        <div
                            className='contentsBox'
                            style={{
                                textDecoration: list.isFinish ? 'line-through' : 'none',
                                marginRight: '10px'
                            }}
                        >
                            {list.contents}
                        </div>
                    </div>
                    {/* 여기에 태그를 달아보자... */}
                    {/* 태그가 달리는 곳은 todo 아래 */}
                    <Tag
                        lists={lists}
                        listIsFinished={list.isFinish}
                        listId={list.id}
                        tags={list.tags}
                        onSelect={onSelect} />
                    <button onClick={() => onRemove(list.id)}><IoTrashOutline /></button>
                </div>
            ))}
        </div>
    );
};

export default List;