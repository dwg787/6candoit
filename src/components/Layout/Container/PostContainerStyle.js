import styled from "styled-components";

export const BoxWrap = styled.div`
  background-size: 100%;
  background: linear-gradient(to bottom right, #3a8bfe, #2bddff);
  margin-bottom: 1rem;
  padding: 15px;
  height: 9rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  border-radius: 1rem;
  /* padding-top: 1.2rem; */
`;

export const ContentsWrap = styled.div`
  /* height: 15rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const CreatedAtWrap = styled.div`
  width: 90%;
  color: white;
  text-shadow: 0.125rem 0.125rem 0.125rem #1a5ab5;
  font-size: 0.8rem;
  /* color: grey; */
  justify-content: space-between;
  display: flex;
`;
export const UserDiv = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
`;

export const UserProfile = styled.img`
  width: 50%;
  border-radius: "10px";
  display: flex;
  flex-direction: column;
  border: 0px solid transparent;
  background-color: transparent;
`;

// export const UserImgView = styled.img`
//   width: 3rem;
//   height: 3rem;
//   border-radius: 50%;
//   justify-content: center;
// `;

// export const UserNameWrap = styled.div`
//   width: 90%;
//   font-size: 1rem;
//   justify-content: center;
// `;

// export const TitleWrap = styled(ContentsWrap)`
export const TitleWrap = styled.div`
  width: 90%;
  color: white;
  font-size: 1.3rem;
  justify-content: center;
  text-shadow: 0.125rem 0.125rem 0.125rem #1a5ab5;
`;

export const ContentWrap = styled.div`
  width: 90%;
  font-size: 1rem;
  color: white;
  justify-content: center;
  padding-left: 0.3rem;
  text-shadow: 0.125rem 0.125rem 0.125rem #1a5ab5;
`;

// export const ButtonWrap = styled(ContentsWrap)`
export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  justify-content: center;
  margin-left: 20px;
`;

export const CusttomButton = styled.button`
  width: 3rem;
  height: 1.5rem;
  cursor: pointer;
  border: 1px solid #eee;
  border-radius: 0.5rem;
  font-size: 0.7rem;
`;
