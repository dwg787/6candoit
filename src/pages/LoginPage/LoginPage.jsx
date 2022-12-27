import { auth } from "../../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import TodoImage from "./TodoImage.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/";
import { Link, useNavigate } from "react-router-dom";
import googleLogin from "../../images/googleLogin.png";
import googleLoginHover from "../../images/googleLoginHover.png";
import * as S from "./LoginPageStyle";
import { __addUser } from "../../redux/modules/userSlice";
import {
  __addUserList,
  __getUserList,
} from "../../redux/modules/allUserListSlice";

function LoginPage() {
  //이메일 회원가입용 state
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  //로그인용 state
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  //회원가입, 로그인 토글용
  const [isRegistered, setIsRegistered] = useState(true);
  //구글 로그인 이미지 변환용
  const [isHover, setIsHover] = useState(false);
  // const [idx, setIdx] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Todo 회원가입 완료 시 alert 뜨고 3초 후에 로그인으로 넘어가도록 수정
  // Todo2 로그인 ↔ 회원가입 왔다갔다 할 때 input창 데이터 안지워지는 부분 수정
  // Todo3 메인, 디테일 페이지에서 로그인 정보 보여주기 세션?쿠키?
  // Todo4 마이페이지 구현(닉네임 수정)
  useEffect(() => {
    dispatch(__getUserList());
  }, [dispatch]);
  const { allUserList } = useSelector((state) => state.allUserList);
  // 회원가입
  const handleRegister = async () => {
    try {
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      dispatch(
        __addUserList({
          id: createdUser.user.uid,
          email: createdUser.user.email,
        })
      ); // user data 설정
      alert(`${createdUser.user.email}님 안녕하세요!`);
      setIsRegistered(!isRegistered); //로그인 창으로 돌아가기
      setRegisterEmail(""); //state 초기화
      setRegisterPassword(""); // state 초기화
    } catch (err) {
      console.log(err.code);
      switch (err.code) {
        case "auth/weak-password":
          setErrorMsg("비밀번호는 6자리 이상이어야 합니다");
          alert(errorMsg);
          break;
        case "auth/invalid-email":
          setErrorMsg("잘못된 이메일 주소입니다");
          alert(errorMsg);
          break;
        case "auth/email-already-in-use":
          setErrorMsg("이미 가입되어 있는 계정입니다");
          alert(errorMsg);
          break;
        default:
          setErrorMsg("예기치 않은 오류가 발생했습니다. 새로고침을 해주세요.");
          alert(errorMsg);
          break;
      }
    }
  };

  //로그인
  const handleLogin = async () => {
    const idList = allUserList.map((user) => user.id);

    try {
      const curUserInfo = await signInWithEmailAndPassword(
        auth,
        LoginEmail,
        LoginPassword
      );
      const idx = idList.indexOf(curUserInfo.user.uid);
      alert("로그인완료!");
      navigate("/");

      dispatch(
        __addUser({
          id: auth.currentUser.uid,
          email: auth.currentUser.email,
          photoURL: auth.currentUser.photoURL,
          displayName: auth.currentUser.displayName,
          invitedUid: allUserList[idx].invitedUid,
          invitedEmail: allUserList[idx].invitedEmail,
        })
      );
    } catch (err) {
      // setIsAppropriate(false);
      switch (err.code) {
        case "auth/wrong-password":
          setErrorMsg("비밀번호를 확인해 주세요.");
          alert(errorMsg);
          break;
        case "auth/invalid-email":
          setErrorMsg("이메일 형식이 맞는지 확인해 주세요.");
          alert(errorMsg);
          break;
        case "auth/user-not-found":
          setErrorMsg("이메일 주소를 확인해 주세요.");
          alert(errorMsg);
          break;
        default:
          setErrorMsg("예기치 않은 오류가 발생했습니다. 새로고침을 해주세요.");
          alert(errorMsg);
          break;
      }
    }
  };

  //구글 로그인
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    const idList = allUserList.map((user) => user.id);
    const idx = idList.indexOf(auth?.currentUser?.uid);
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        dispatch(
          __addUser({
            id: auth.currentUser.uid,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
            displayName: auth.currentUser.displayName,
            invitedUid: allUserList?.[idx]?.invitedUid,
            invitedEmail: allUserList?.[idx]?.invitedEmail,
          })
        );
        alert("로그인 완료!");
        navigate("/");
      })
      .then((data) => {
        dispatch(
          __addUserList({
            id: auth.currentUser.uid,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
            displayName: auth.currentUser.displayName,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <S.LoginWrapper>
      <img
        alt="이미지"
        src={TodoImage}
        style={{ width: "45%", margin: "200px 50px 200px 100px" }}
      ></img>
      <S.Outer>
        <S.Align>
          {/* 로그인영역 isRegistered => styled 컴포넌트에 props 전달 */}
          <S.Login isRegistered={isRegistered}>
            <S.LinkBox>
              <Link
                style={{
                  marginBottom: "15px",
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
                to={"/"}
              >
                돌아가기
              </Link>
            </S.LinkBox>
            <S.Form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
                e.target[0].value = ""; //제출시 input창 초기화
                e.target[1].value = ""; //제출시 input창 초기화
              }}
            >
              <S.Input
                type="email"
                placeholder="Enter your email address"
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
              />
              <S.Input
                type="password"
                placeholder="Password"
                onChange={(e) => setLoginPassword(e.target.value)}
              />

              <input
                style={{
                  height: "4rem",
                  background: "#3a8bfe",
                  width: "100%",
                  border: "0",
                  marginTop: "20px",
                  padding: "25px",
                  boxSizing: "border-box",
                  borderRadius: "10px",
                  color: "white",
                  fontWeight: "bold",
                }}
                type="submit"
                value="LOGIN"
              />
            </S.Form>
            <S.SignUp>
              <S.SignUpText>계정이 없으세요?</S.SignUpText>
              <S.SignUpText>
                <button
                  style={{
                    width: "60px",
                    height: "30px",
                    borderRadius: "10px",
                    border: "1px solid #eee",
                  }}
                  onClick={() => {
                    setIsRegistered(!isRegistered);
                  }}
                >
                  회원가입
                </button>
                하러 가기
              </S.SignUpText>
            </S.SignUp>
          </S.Login>
        </S.Align>
        <S.Login
          isRegistered={isRegistered}
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
        >
          <img
            src={isHover ? googleLoginHover : googleLogin}
            onClick={handleGoogleLogin}
            alt="google logo"
            style={{ cursor: "pointer", width: "25%", marginTop: "20px" }}
          />
        </S.Login>
        {/* 회원가입 영역 */}
        <S.Register isRegistered={isRegistered}>
          <S.LinkBox>
            <Link
              style={{
                marginBottom: "15px",
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
              to={"/"}
            >
              돌아가기
            </Link>
          </S.LinkBox>

          <S.Form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
              e.target[0].value = ""; //input창 초기화
              e.target[1].value = ""; //input창 초기화
            }}
          >
            <S.Input
              type="email"
              placeholder="Enter your email address"
              defaultValue=""
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <S.Input
              type="password"
              placeholder="Password"
              defaultValue=""
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <input
              style={{
                height: "4rem",
                background: "#3a8bfe",
                width: "100%",
                border: "0",
                marginTop: "20px",
                padding: "25px",
                boxSizing: "border-box",
                borderRadius: "10px",
              }}
              type="submit"
              value="회원가입"
            />
          </S.Form>
          <button
            onClick={() => {
              setIsRegistered(!isRegistered);
            }}
            style={{
              marginTop: "20px",
              width: "200px",
              height: "30px",
              borderRadius: "10px",
              border: "1px solid #eee",
              fontWeight: "bold",
            }}
          >
            로그인 페이지로 돌아가기
          </button>
          {/* <button onClick={handleRegister}>회원가입</button> */}
        </S.Register>
      </S.Outer>
    </S.LoginWrapper>
  );
}

export default LoginPage;
