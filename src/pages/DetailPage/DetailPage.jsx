import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import CustomButton from '../../components/Tools/CustomButton';
import {
  __getPost,
  __deletePost,
  __updatePost,
} from '../../redux/modules/posts';
import * as S from './DetailPageStyle';
// import CommentAddForm from './CommentAddForm';
// import CommentsContainer from './CommentsContainer';
// import { __getComment } from '../../../redux/modules/comments';

const DetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.posts);
  // console.log('post 값: ', posts);
  const param = useParams();
  const post = posts.find((post) => post.id === param.id);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.content);
  const [edit, setEdit] = useState(false);
  const [commentWindow, setCommentWindow] = useState(false);
  const [comment, setComment] = useState('');

  useEffect(() => {
    // dispatch(__getComment());
    dispatch(__getPost());
  }, [dispatch]);

  const DeletePost = () => {
    dispatch(__deletePost(post.id));
    navigate('/');
  };

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeContent = (event) => {
    setContent(event.target.value);
  };

  const updateTodoHandler = (event) => {
    event.preventDefault();

    let EditedPost = {
      id: post.id,
      title,
      content,
      isDone: post.isDone,
    };

    setEdit(!edit);
    dispatch(__updatePost(EditedPost));
  };

  useEffect(() => {
    if (posts.length < 1) {
      return;
    }
    // const post = posts.find((post) => post.id === param.id);
    setTitle(title);
    setContent(content);
  }, [post]);

  const changeComment = (event) => {
    setComment(event.target.value);
  };

  return (
    <>
      <Sidebar />
      <S.PostpageWrap>
        <S.PostWrap>
          {/* {post?.title} */}
          {/* {post?.content} */}
          <S.UserSection>{post?.id}</S.UserSection>
          <S.TitleSection>
            {edit ? (
              <form id='editInput' onSubmit={updateTodoHandler}>
                <input
                  id='title-input2'
                  value={title || post.title}
                  placeholder='제목을 입력해주세요'
                  onChange={changeTitle}
                />
              </form>
            ) : (
              post?.title
            )}
          </S.TitleSection>
          <S.ContentSection>
            {edit ? (
              <form id='editInput' onSubmit={updateTodoHandler}>
                <input
                  id='content-input2'
                  value={content || post.content}
                  placeholder='내용을 입력해주세요'
                  onChange={changeContent}
                />
              </form>
            ) : (
              post?.content
            )}
            {edit && (
              <S.EditBtn
                id='edit-complete'
                form='editInput'
                onClick={updateTodoHandler}
                disabled={post.title === '' || content === '' ? true : false}
              >
                수정완료
              </S.EditBtn>
            )}
            <S.EditBtn
              onClick={() => {
                setEdit(!edit);
              }}
            >
              {edit ? '수정취소' : '수정'}
            </S.EditBtn>
            <S.EditBtn onClick={DeletePost}>삭제</S.EditBtn>
          </S.ContentSection>
          {/* <S.ButtonSection></S.ButtonSection> */}
          <S.CommentSection>댓글이 보여지는 영역</S.CommentSection>
          <S.EditBtn
            onClick={() => {
              setCommentWindow(!commentWindow);
            }}
          >
            댓글작성
          </S.EditBtn>
          {commentWindow && (
            <div>
              <input
                id='comment-input'
                value={comment}
                placeholder='댓글 내용을 입력해주세요'
                onChange={changeComment}
              ></input>
              <button>등록</button>
            </div>
          )}
        </S.PostWrap>
        {/* <CommentAddForm post_id={post?.id}></CommentAddForm> */}
        {/* <CommentsContainer post_id={post?.id}></CommentsContainer> */}
      </S.PostpageWrap>
    </>
  );
};

export default DetailPage;
