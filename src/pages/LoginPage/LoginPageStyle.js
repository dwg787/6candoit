import styled from "styled-components";

export const Outer = styled.div`
  width: 50%;
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LinkBox = styled.div`
  display: flex;
`;

export const Input = styled.input`
  height: 4rem;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 25px;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 10px;
`;

export const SignUp = styled.div`
  margin-top: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 400px;
`;

export const Align = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: ${({ isRegistered }) => {
    return isRegistered ? "flex" : "none";
  }};
`;

export const Register = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: ${({ isRegistered }) => {
    return isRegistered ? "none" : "flex";
  }};
`;

export const LoginWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const SignUpText = styled.div`
  margin-bottom: 10px;
  text-align: center;
`;
