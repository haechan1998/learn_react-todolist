import React, { useState } from 'react';
import { useRef } from 'react';
import { RiMastodonLine } from "react-icons/ri";

const InputList = ({ addTodo }) => {

    const onChange = (e) => {
        setTodo(e.target.value);
    }

    const [todo, setTodo] = useState('');

    // 포커스 맞추기
    const inputRef = useRef();


    // 추가 버튼
    const onSubmit = () => {
        addTodo(todo);
        // input 초기화
        setTodo('');
        // 포커스
        inputRef.current.focus();
    };
    
    const onKeyDown = (e) => {
        if(e.key === 'Enter'){
            addTodo(todo);
            setTodo('');
            // 포커스
            inputRef.current.focus();
        }
    }

    const [isInputClicked, setIsInputClicked] = useState(false);

    return (
        <div className='InputList'>
            <input type="text"
                name='todo'
                value={todo}
                onChange={onChange}
                ref={inputRef}
                // 해당 input 을 클릭하였을 때
                onFocus={() => {
                    setIsInputClicked(true);
                }}
                // 해당 input 을 클릭하지 않았을 때
				onBlur={() => {
					setIsInputClicked(false);
				}}
				placeholder={isInputClicked === true ? "" : "할 일을 입력해주세요."}

                // enter 키보드 이벤트
                onKeyDown={onKeyDown}
            />
            <button
            onClick={onSubmit}
            // todo 의 값이 비어있을 경우 disabled
            disabled={todo === '' ? true : false}
            >
                <RiMastodonLine />
            </button>
        </div>
    );
};

export default InputList;