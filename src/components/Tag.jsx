import React from 'react';
import { useState } from 'react';

const Tag = ({lists}) => {

    const [isClickedTag, setIsClickedTag] = useState(false);


    const onTag = () => {
        lists.map( list => list.isFinish ? setIsClickedTag(false) : setIsClickedTag(!isClickedTag))
        // if(lists.isFinish){
        //     setIsClickedTag(!isClickedTag);
        // }else{
        //     setIsClickedTag(false);
        // }
    }
    return (
        <div className='Tag'>
            <button
                onClick={onTag}
            >TAG</button>
            <div
                className='tagBox'
                style={{ display: isClickedTag ? 'block' : 'none' }}
            >   <p>태그목록</p>
                <button>공부</button>
                <button>일</button>
                <button>코딩</button>
                <button>계획</button>
                <button>여행</button>
            </div>
        </div>
    );
};

export default Tag;