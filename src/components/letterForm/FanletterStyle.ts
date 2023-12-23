import styled from "styled-components";
import Img from "../../assets/images/avatar.png";

export const LetterContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: #600985;
  display: flex;
  justify-content: center;
`;

export const LetterBox = styled.div`
  position: relative;
  width: 700px;
  height: 250px;
  margin-top: 30px;
  border: 1px solid white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Avatar = styled.p`
  background-image: url(${Img});
  background-size: cover;
  border-radius: 200px;
  position: absolute;
  width: 40px;
  height: 40px;
  top: 7%;
  left: 4%;
`;

export const NickName = styled.p`
  position: absolute;
  top: 8%;
  left: 12%;
  font-size: 20px;
`;

export const Time = styled.p`
  position: absolute;
  font-size: 16px;
  top: 16%;
  left: 12%;
  font-size: 18px;
`;
export const SendTo = styled.p`
  position: absolute;
  top: 29%;
  left: 4%;
  font-size: 20px;
`;

export const Comment = styled.p`
  position: absolute;
  width: 640px;
  height: 50px;
  left: 4%;
  font-size: 20px;
  white-space: normal;
  text-overflow: ellipsis;
`;
