import styled from "styled-components";

export const PostpageWrap = styled.div`
  font-size: 1.3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.25rem;
`;

export const PostWrap = styled.div`
  width: 100%;
  height: 43.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

export const ContentsWrap = styled.div`
  width: 100%;
  height: 18.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

export const UserSection = styled.div`
  width: 70%;
  height: 6.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.0625rem solid black;
  border-radius: 0.5rem;
  gap: 1.25rem;
`;

export const TitleSection = styled.div`
  input {
    width: 31.25rem;
    height: 2rem;
    font-size: 1.3rem;
    border: 0;
    border-radius: 0.9375rem;
    outline: none;
    padding-left: 0.625rem;
    background-color: transparent;
  }
  width: 100%;
  height: 20%;
  color: white;
  text-shadow: 0.125rem 0.125rem 0.125rem #1a5ab5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.25rem;
  gap: 1.25rem;
  background: rgb(58, 139, 254);
  background: linear-gradient(
    90deg,
    rgba(58, 139, 254, 1) 0%,
    rgba(43, 221, 255, 1) 100%
  );
  box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -webkit-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -moz-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
`;

export const ContentSection = styled.div`
  textarea {
    /* width: 31.25rem; */
    height: 2rem;
    font-size: 1.3rem;
    border: 0;
    border-radius: 0.9375rem;
    outline: none;
    padding-left: 0.625rem;
    background-color: transparent;
  }

  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 1.25rem;
  gap: 1.25rem;
  box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -webkit-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -moz-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
`;

export const CommentSection = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  overflow: auto;
  border-radius: 1.25rem;
  flex-direction: column;
  gap: 1.25rem;
  box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -webkit-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -moz-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
`;

export const ButtonSection = styled.div`
  /* background-color: green; */
  width: 70%;
  height: 6.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

export const EditBtn = styled.button`
  width: 80px;
  height: 15%;
  cursor: pointer;
  padding: 10px;
  border: none;
  background-color: #3a8bfe;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  margin: 0px 5px;
`;

export const CommentCreateBtn = styled.button`
  width: 100px;
  height: 15%;
  cursor: pointer;
  border-radius: 10px;
  background-color: #3a8bfe;
  color: white;
  font-weight: bold;
  border: none;
`;

// EditCompleteBtn.defaultProps = {
//   disabled: false,
// };

// export const EditCompleteButton = ({ disabled }) => {
//     if()
//   return <EditCompleteBtn disabled={disabled}>수정완료</EditCompleteBtn>;
// };

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 1.875rem;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.125rem 4.375rem;
  flex-grow: 1;
  overflow: auto;
  background-color: #f6f8fb;
`;

export const CommentTitle = styled.div`
  margin-right: 85%;
  font-size: 24px;
  font-weight: bold;
  color: #696969; ;
`;

export const Input = styled.input`
  height: 4rem;
  background: white;
  width: 1030px;
  border: 0;
  margin: 0 0 15px;
  padding: 25px;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 20px;
  box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -webkit-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
  -moz-box-shadow: 0.0625rem 0.0625rem 2.5rem -0.9375rem rgba(108, 169, 255, 1);
`;
