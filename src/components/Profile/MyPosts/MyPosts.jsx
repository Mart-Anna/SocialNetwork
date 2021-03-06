import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {


    let newPostElement = React.createRef();

    let addPost = () => {
        props.onAddPost();
    };

    let onChangeNewPost = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.myPosts}> my posts
            <div>
                <div>
                    <textarea ref={newPostElement}
                              placeholder='enter your message'
                              onChange={ onChangeNewPost }
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.posts.map(p => <Post message={p.message} like={p.likesCounts}/>)}
            </div>
        </div>
    )
};

export default MyPosts;