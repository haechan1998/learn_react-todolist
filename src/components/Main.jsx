import React, { useRef, useState } from 'react';
import InputList from './InputList';
import TodoList from './TodoList';
import FinishedList from './FinishedList';
import { todoList } from '../data/data';
import { FcTodoList } from "react-icons/fc";
import './reset.css';

// 여기에 전체 컴포넌트를 하나로 모아서 출력

const Main = () => {

    const [lists, setLists] = useState(todoList);
    const nextId = useRef(todoList.length);
    // const [obj, setObj] = useState({})
    // setLists(
    //     ...lists,
    //     lists.filter( n => !n.isDel)
    // );

    // lists 를 다른 객체로 저장해보자.
    const filterLists = lists.filter(n => !n.isDel);
    console.log(lists);


    const addTodo = (todo) => {
        if (todo === '') {
            alert('내용을 입력해주세요.')
        } else {
            // id 의 값 증가
            nextId.current += 1;

            // 추가 한 값을 todoList 객체에 추가
            setLists(
                // 객체 만들고 concat 으로 연결.
                lists.concat(
                    {
                        id: nextId.current,
                        contents: todo,
                        isFinish: false,
                        isDel: false,
                        tags: [
                            { id: 1, selected: false },
                            { id: 2, selected: false },
                            { id: 3, selected: false },
                            { id: 4, selected: false },
                            { id: 5, selected: false },
                        ]
                    }
                )
            )
        }
    };


    // 체크로 isFinish 값 변경하기
    const onToggle = (id) => {
        setLists(lists.map(list =>
            list.id === id ? { ...list, isFinish: !list.isFinish } : list
        ));
    };


    // 삭제
    const onRemove = (id) => {
        setLists(lists.map(list =>
            list.id === id ? { ...list, isDel: true } : list
        ));
    };

    // 태그 선택
    const onSelect = (listId, tagId) => {
        setLists(lists.map(list =>
            list.id === listId
                ? {
                    ...list,
                    tags: list.tags.map(tag =>
                        tag.id === tagId ? { ...tag, selected: !tag.selected } : tag
                    )
                }
                : list
        ));
    };

    // 미완료된 todo
    const unFinish = filterLists.filter(list => !list.isFinish);

    // 완료된 todo
    const finish = filterLists.filter(list => list.isFinish);

    return (
        <div className="Main">
            <div className="inner">
                <p className="left-tit"><FcTodoList /> <span>Check TODO</span></p>
                <InputList addTodo={addTodo} />
                <div className="finished">
                    <p className="tit">WORK</p>
                    {/* 미완료 개수 */}
                    <p className="isFinished">{unFinish.length}개 미완료</p>
                    {/* 완료 개수 */}
                    <p className="isFinished">{finish.length}개 완료</p>
                </div>
                <TodoList
                lists={unFinish}
                onToggle={onToggle}
                onRemove={onRemove}
                onSelect={onSelect} />
                <p className="tit">FINISH</p>
                <FinishedList
                lists={finish}
                onToggle={onToggle}
                onRemove={onRemove}
                onSelect={onSelect} />
            </div>
        </div>
    );
};

export default Main;