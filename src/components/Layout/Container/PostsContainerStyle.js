import styled from "styled-components";

export const CommentsWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TitleInput = styled.input`
  border: 0.0625rem solid #eee;
  border-radius: 10px;
  width: 100%;
  height: 2rem;
  outline: none;
  padding: 0.3125rem 0.625rem;
`;

export const ContentInput = styled.textarea`
  border: 0.0625rem solid #eee;
  border-radius: 10px;
  width: 100%;
  outline: none;
  padding: 0.3125rem 0.625rem;
`;

export const AddWrap = styled.div`
  margin: 0.625rem;
  background-size: 80%;
  background: linear-gradient(to bottom right, #3a8bfe, #2bddff);
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 37.5rem;
  padding: 1.875rem;
  border-radius: 1.25rem;
  align-self: stretch;
  overflow: hidden;
  position: relative;
  box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -webkit-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -moz-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
`;

export const DoingTodo = styled.div`
  margin: 0.625rem;
  background-size: 80%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 37.5rem;
  padding: 1.875rem;
  border-radius: 1.25rem;
  align-self: stretch;
  /* overflow: hidden; */
  overflow: auto;
  position: relative;
  font-size: 1.5rem;
  box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -webkit-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -moz-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
`;

export const DoneTodo = styled.div`
  margin: 0.625rem;
  background-size: 80%;
  background-color: #eff2f7;
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 37.5rem;
  padding: 1.875rem;
  border-radius: 1.25rem;
  align-self: stretch;
  /* overflow: hidden; */
  overflow: auto;
  position: relative;
  font-size: 1.5rem;
  box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -webkit-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -moz-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
`;

export const AddBtn = styled.button`
  width: 5rem;
  height: 1.875rem;
  cursor: pointer;
  border: 0.0625rem solid #eff2f7;
  border-radius: 0.3rem;
  margin: 0 100px;
  /* font-size: 0.5rem; */
`;

export const ProfileImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
`;

export const ProfileImgInput = styled.input`
  display: none;
`;

export const DoneTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 3.125rem;
  color: #696969;
`;

export const WriteTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 3.125rem;
  color: white;
  text-shadow: 0.125rem 0.125rem 0.125rem #1a5ab5;
`;

export const TitleCommentText = styled.div``;
