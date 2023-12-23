import { Outlet, useNavigate } from "react-router-dom";
import * as St from "./LayoutStyle";
function Layout() {
  // 로고 눌렀을 때 home으로 이동
  const navigate = useNavigate();
  const handleNavigateAndReload = (path: string) => {
    navigate(path);
  };
  return (
    <>
      <St.HeaderWrapper>
        <St.HeaderTitleLogo
          onClick={() => {
            handleNavigateAndReload("/");
          }}
        />
      </St.HeaderWrapper>
      <St.ButtonWrapper>
        <St.RegisterBtn
          onClick={() => {
            handleNavigateAndReload("/login");
          }}
        >
          Register
        </St.RegisterBtn>
        <St.LoginBtn
          onClick={() => {
            handleNavigateAndReload("/login");
          }}
        >
          Login
        </St.LoginBtn>
      </St.ButtonWrapper>
      <Outlet />
      <St.FooterWrapper>
        <p>Copyright 2023. (G)-Idle Fanletter All rights reserved</p>
      </St.FooterWrapper>
    </>
  );
}

export default Layout;
