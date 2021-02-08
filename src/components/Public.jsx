import React from 'react';
import StyledPost from './Post.view'
import approvalIcon from '../img/approvalIcon.png';

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const DATA = {
    name: "Anakin Skywalker",
    photo: ANAKIN_IMAGE,
    nickname: "@dart_vader",
    content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date: "26 февр."
}

const Post = () => (
    <StyledPost>            
        <img src={DATA.photo} className='avatar' alt='avatar' />
        <div className='postInfo'>
            <div className='authorInfo'>
                <p className='authorName'>{DATA.name}</p>
                <img className='active' src={approvalIcon}  alt='approval' />
                <p className='nickName'>{DATA.nickname}</p>                   
                <p className='postDate'>{DATA.date}</p>
            </div>
            <p className='postText'>{DATA.content}</p>
            <img className='postImage' src={DATA.image} alt='postImage' />
        </div>
    </StyledPost>
)


export default Post;