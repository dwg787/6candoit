import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as S from "./SidebarStyle.js";
import candylogo from "./candylogo.png";
import Ellipse from "./Ellipse.png";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { __getUser, __deleteUser } from "../../../redux/modules/userSlice.js";
import { auth } from "../../../firebase.js";
import CustomButton from "../../Tools/CustomButton.jsx";
import blankProfile from "../../../images/blankProfile.webp";
export default function Sidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(__getUser());
  }, [dispatch]);
  const { user } = useSelector((state) => state.user);
  // console.log(auth.currentUser);
  const handleLogout = async () => {
    //세션 or 쿠기 삭제
    dispatch(__deleteUser(user));
    // dispatch(__getUser());
    navigate("/");
    await signOut(auth);
  };

  return (
    <>
      <S.SideBar>
        <S.ProfileDetail>
          <Link to={"/"}>
            <S.SideBarLogo alt="로고" src={candylogo}></S.SideBarLogo>
          </Link>
        </S.ProfileDetail>
        <S.SideWrapper>
          <S.ProfileWrapper>
            <S.SideLogin>
              {user?.length === 0 ? (
                <S.ProfileDetail>
                  <S.AppLogo src={Ellipse} />
                  <div>환영합니다!</div>
                  <Link
                    style={{
                      marginBottom: "15px",
                      textDecoration: "none",
                      color: "black",
                    }}
                    to="/login"
                  >
                    LOGIN
                  </Link>
                </S.ProfileDetail>
              ) : (
                <S.ProfileDetail>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#696969",
                      fontSize: "20px",
                    }}
                    to={"/mypage"}
                  >
                    {user?.[0]?.photoURL !== null ? (
                      <S.AppLogo src={user?.[0]?.photoURL ?? blankProfile} />
                    ) : (
                      <S.AppLogo src={Ellipse} />
                    )}
                  </Link>
                  <CustomButton onClick={handleLogout}>로그아웃</CustomButton>
                </S.ProfileDetail>
              )}
            </S.SideLogin>
          </S.ProfileWrapper>
          <S.ContentsWrapper>
            <S.SideTitle>MENU</S.SideTitle>
            <S.SideMenu>
              {location?.pathname !== "/" && (
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#696969",
                  }}
                  to="/"
                >
                  <S.MenuList>Main</S.MenuList>
                </Link>
              )}
              <Link
                style={{
                  textDecoration: "none",
                  color: "#696969",
                }}
                to="/Calendar"
              >
                <S.MenuList>Calendar</S.MenuList>
              </Link>
            </S.SideMenu>
          </S.ContentsWrapper>
        </S.SideWrapper>
      </S.SideBar>
    </>
  );
}
