import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  __getPost,
  __deletePost,
  __updatePost,
} from "../../redux/modules/posts";
import { __getComment } from "../../redux/modules/comments";
import * as S from "./DetailPageStyle";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import CommentContainer from "../../components/Layout/Container/CommentContainer";
import { usePostEdit } from "../../hooks/usePostEdit";
import { useCommentCreate } from "../../hooks/useCommentCreate";

const DetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();
  const { posts } = useSelector((state) => state.posts);
  const { comments } = useSelector((state) => state.comments);
  const { user } = useSelector((state) => state.user);
  const post = posts.find((post) => post.id === param.id);
  const [{ title, content }, changeTitle, changeContent] = usePostEdit(""); //post 수정 커스텀 훅 적용
  const [commentContent, changeCommentContent, onCommentSubmitHandler] =
    useCommentCreate(""); //comment 생성 커스텀 훅 적용
  const [edit, setEdit] = useState(false);
  const [commentWindow, setCommentWindow] = useState(false);

  const DeletePost = () => {
    dispatch(__deletePost(post.id));
    navigate("/");
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
    dispatch(__getPost());
  }, [dispatch]);

  useEffect(() => {
    dispatch(__getComment());
  }, [dispatch]);

  return (
    <>
      <Sidebar />
      <S.Wrapper>
        <S.MainContainer>
          <S.Header>
            <h2>Detail</h2>
          </S.Header>
          <S.PostpageWrap>
            <S.PostWrap>
              <S.TitleSection>
                {edit ? (
                  <form id="editInput" onSubmit={updateTodoHandler}>
                    <input
                      id="title-input2"
                      value={title}
                      placeholder="제목을 입력해주세요"
                      onChange={changeTitle}
                    />
                  </form>
                ) : (
                  post?.title
                )}
              </S.TitleSection>
              <S.ContentSection>
                {edit ? (
                  <form id="editInput" onSubmit={updateTodoHandler}>
                    <textarea
                      cols="40"
                      rows="8"
                      id="content-input2"
                      value={content}
                      placeholder="내용을 입력해주세요"
                      onChange={changeContent}
                    ></textarea>
                  </form>
                ) : (
                  post?.content
                )}
              </S.ContentSection>
              <div>
                {post?.userId === user?.[0]?.id ? (
                  <div style={{ gap: "10px" }}>
                    {edit && (
                      <S.EditBtn
                        id="edit-complete"
                        form="editInput"
                        onClick={updateTodoHandler}
                        disabled={title === "" || content === "" ? true : false}
                      >
                        수정완료
                      </S.EditBtn>
                    )}
                    <S.EditBtn
                      onClick={() => {
                        setEdit(!edit);
                      }}
                    >
                      {edit ? "수정취소" : "수정"}
                    </S.EditBtn>
                    <S.EditBtn onClick={DeletePost}>삭제</S.EditBtn>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>

              <S.CommentTitle>Comment</S.CommentTitle>
              <S.CommentSection>
                {user.length > 0 ? ( //로그인 했을 때만 보이도록
                  <div>
                    {comments
                      .filter((comment) => comment.parentId === param.id)
                      .map((comment) => {
                        return (
                          <CommentContainer
                            key={comment.id}
                            comment={comment}
                          ></CommentContainer>
                        );
                      })}
                  </div>
                ) : (
                  <div></div>
                )}
              </S.CommentSection>
              <S.CommentCreateBtn
                onClick={() => {
                  setCommentWindow(!commentWindow);
                }}
              >
                댓글작성
              </S.CommentCreateBtn>
              {commentWindow && (
                <div>
                  <S.Input
                    id="comment-input"
                    value={commentContent}
                    placeholder="댓글 내용을 입력해주세요"
                    onChange={changeCommentContent}
                  ></S.Input>
                  <button
                    onClick={onCommentSubmitHandler}
                    disabled={commentContent === "" ? true : false}
                    style={{
                      width: "80px",
                      height: "40px",
                      cursor: "pointer",
                      padding: "10px",
                      border: "none",
                      backgroundColor: "transparent",
                      borderRadius: "10px",
                      fontWeight: "bold",
                      margin: "0 0 0 25px;",
                    }}
                  >
                    등록
                  </button>
                </div>
              )}
            </S.PostWrap>
          </S.PostpageWrap>
        </S.MainContainer>
      </S.Wrapper>
    </>
  );
};

export default DetailPage;
