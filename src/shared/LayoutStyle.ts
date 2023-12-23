import styled from "styled-components";
import Logo from "../assets/images/I-dle_logo.png";

export const HeaderWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 20;
  background-color: #600985;
  color: #fff;
  box-shadow: 0px 4px 27px 0px rgba(0, 0, 0, 0.05);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitleLogo = styled.button`
  background-image: url(${Logo});
  width: 70px;
  height: 70px;
  border-radius: 20px;
  background-color: transparent;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
  top: 0.5%;
  color: #fff;
  z-index: 20;
`;

export const LoginBtn = styled.button`
  position: fixed;
  right: 2%;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`;
export const RegisterBtn = styled.button`
  position: absolute;
  right: 10px;
  left: 90%;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 10;

  width: 100%;
  height: 80px;
  background-color: #600985;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  p {
    color: #aeaeae;
    font-size: 18px;
  }
`;
