import React, { useRef, useState } from 'react';
import InputList from './InputList';
import TodoList from './TodoList';
import { todoList } from '../data/data';
import FinishedList from './FinishedList';
import './reset.css';
import { FcTodoList } from "react-icons/fc";

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
                        isDel: false
                    }
                )
            )
        }
    };

    // 미완료된 todo
    const unFinish = filterLists.filter(n => !n.isFinish)

    // 완료된 todo
    const finish = filterLists.filter(n => n.isFinish)

    // 미완료된 todo 개수 표현
    const countUnFinish = filterLists.filter(n => !n.isFinish).length;
    // 완료된 todo 개수 표현
    const countFinish = filterLists.filter(n => n.isFinish).length;

    // 체크로 isFinish 값 변경하기
    const onToggle = (id) => {
        setLists(
            filterLists.map(list => list.id === id ? { ...list, isFinish: !list.isFinish } : list)
        )
    }
    // 삭제
    const onRemove = (id) => {
        setLists(
            lists.map(list => list.id === id ? { ...list, isDel: !list.isDel } : list)
        )
        // list.filter( n => !n.isDel)
    }

    return (
        <div className='Main'>
            <div className="inner">
                <p className='left-tit'><FcTodoList /><span>Check TODO</span></p>
                <InputList
                    addTodo={addTodo}
                />
                <div className="finished">
                    <p className='tit'>WORK</p>
                    {/* 미완료 */}
                    <p className='isFinished'>{countUnFinish}개 미완료</p>
                    {/* 완료 */}
                    <p className='isFinished'>{countFinish}개 완료</p>
                </div>
                <TodoList
                    lists={unFinish}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
                <p className='tit'>FINISH</p>
                <FinishedList
                    lists={finish}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            </div>
        </div>
    );
};

export default Main;