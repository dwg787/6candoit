import React, { useState, useEffect } from 'react';
import PostContainer from './PostContainer';
import { useDispatch, useSelector } from 'react-redux';
import { __getPost } from '../../../redux/modules/posts';
import * as S from './PostsContainerStyle';
import blankProfile from '../../../images/blankProfile.webp';
import DateSellector from './DateSellector';
import { usePostCreate } from '../../../hooks/usePostCreate';

const PostsContainer = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.user);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  //post 생성 커스텀 훅 적용
  const [
    { title, content, imgUrl, imgDownloadUrl },
    changeTitle,
    changeContent,
    onSubmitHandler,
  ] = usePostCreate({
    title: '',
    content: '',
    imgUrl: blankProfile,
    imgDownloadUrl: null,
  });

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  return (
    <S.CommentsWrap>
      <S.AddWrap>
        <S.WriteTitle>Write down what to do</S.WriteTitle>

        <S.Form onSubmit={onSubmitHandler}>
          {/* {userName} */}
          <S.TitleCommentText>제목</S.TitleCommentText>
          <S.TitleInput
            className='title'
            type='text'
            value={title}
            onChange={changeTitle}
          />
          <S.TitleCommentText>내용</S.TitleCommentText>

          <S.ContentInput
            cols='30'
            rows='10'
            type='text'
            value={content}
            onChange={changeContent}
          />

          {/* {Calendar} */}
          <DateSellector setFromDate={setFromDate} setToDate={setToDate} />

          <S.AddBtn disabled={title === '' || content === '' ? true : false}>
            추가
          </S.AddBtn>
        </S.Form>
      </S.AddWrap>

      <S.DoingTodo>
        <S.DoneTitle>Doing</S.DoneTitle>
        {/* <div style={{ marginBottom: 10 }}>Doing</div> */}
        {user.length > 0 && ( //로그인 했을 때만 보이도록
          <div>
            {posts
              ?.filter(
                (post) =>
                  (user[0].id === post.userId ||
                    user[0].id === post.invitedId) &&
                  post.isDone === false
              )
              ?.map((post) => {
                return (
                  <PostContainer key={post.id} post={post}></PostContainer>
                );
              })}
          </div>
        )}
      </S.DoingTodo>

      <S.DoneTodo>
        {/* <S.DoneTitle>Done</S.DoneTitle> */}

        <S.DoneTitle>Done</S.DoneTitle>

        {user.length > 0 && ( //로그인 했을 때만 보이도록
          <div>
            {posts
              ?.filter(
                (post) =>
                  (user[0].id === post.userId ||
                    user[0].id === post.invitedId) &&
                  post.isDone === true
              )
              ?.map((post) => {
                return (
                  <PostContainer key={post.id} post={post}></PostContainer>
                );
              })}
          </div>
        )}
      </S.DoneTodo>
    </S.CommentsWrap>
  );
};

export default PostsContainer;
