import React, { useState } from 'react';

const tagLabels = ['공부', '일', '코딩', '계획', '여행'];

const Tag = ({ listIsFinished, listId, tags, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="Tag">
            <button onClick={() => setIsOpen(!isOpen)}>TAG</button>

            {/* 조건부 랜더링을 사용해서 출력문 제어 */}
            {/* true 일 경우 랜더링 false 일 경우 랜더링 X */}
            {(isOpen && !listIsFinished) && (
                <div className="tagBox bottom">
                    {tags.map(tag => (
                        <button
                            key={tag.id}    
                            // 태그당 id 별도 지정
                            className={`tag tag${tag.id}`}
                            onClick={() => onSelect(listId, tag.id)}
                        >
                            {/* 해당 id 의 태그 명 */}
                            {tagLabels[tag.id - 1]}
                        </button>
                    ))}
                    <button className='xbtn' onClick={() => {setIsOpen(!isOpen)}}>❌</button>
                </div>
            )}
        </div>
    );
};

export default Tag;