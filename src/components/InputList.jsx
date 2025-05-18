import React, { useRef, useState } from 'react';
import { RiMastodonLine } from "react-icons/ri";

const InputList = ({ addTodo }) => {
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

    const [isInputClicked, setIsInputClicked] = useState(false);

    const onKeyDown = (e) => {
        if (e.key === 'Enter') onSubmit();
    };

    return (
        <div className='InputList'>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                // enter 키보드 이벤트
                onKeyDown={onKeyDown}
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
            />
            {/* todo 의 값이 비어있을 경우 disable */}
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