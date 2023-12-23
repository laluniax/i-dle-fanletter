import styled from "styled-components";
import UgiImg from "../../assets/images/우기.jpg";
import MiyeonImg from "../../assets/images/미연.jpg";
import SoyeonImg from "../../assets/images/소연.jpg";
import ShuhwaImg from "../../assets/images/슈화.jpg";
import MinnieImg from "../../assets/images/민니.jpg";

export const MemberImgCover = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
`;

export const Ugi = styled.div`
  background-image: url(${UgiImg});
  background-size: cover;
  width: 400px;
  height: 600px;
  display: flex;

  &:hover {
    cursor: pointer;
    filter: brightness(60%);
    transition: 0.3s;
  }
`;

export const UgiText = styled.p`
  all: unset;
  position: absolute;
  color: white;
  font-size: 60px;
  opacity: 0;

  ${Ugi}:hover & {
    opacity: 1;
    color: white;
  }
`;

export const Miyeon = styled.div`
  background-image: url(${MiyeonImg});
  background-size: cover;
  width: 400px;
  height: 600px;

  &:hover {
    cursor: pointer;
    filter: brightness(60%);
    transition: 0.3s;
  }
`;

export const MiyeonText = styled.p`
  all: unset;
  position: absolute;
  color: white;
  font-size: 60px;
  opacity: 0;

  ${Miyeon}:hover & {
    opacity: 1;
    color: white;
  }
`;

export const Soyeon = styled.div`
  background-image: url(${SoyeonImg});
  background-size: cover;
  width: 400px;
  height: 600px;
  position: relative;

  &:hover {
    cursor: pointer;
    filter: brightness(60%);
    transition: 0.5s;
    width: 800px;
  }
`;

export const SoyeonText = styled.p`
  all: unset;
  position: absolute;
  color: white;
  font-size: 60px;
  opacity: 0;

  ${Soyeon}:hover & {
    opacity: 1;
    color: white;
  }
`;

export const Shuhwa = styled.div`
  background-image: url(${ShuhwaImg});
  background-size: cover;
  width: 400px;
  height: 600px;

  &:hover {
    cursor: pointer;
    filter: brightness(60%);
    transition: 0.3s;
  }
`;

export const ShuhwaText = styled.p`
  all: unset;
  position: absolute;
  color: white;
  font-size: 60px;
  opacity: 0;

  ${Shuhwa}:hover & {
    opacity: 1;
    color: white;
  }
`;

export const Minnie = styled.div`
  background-image: url(${MinnieImg});
  background-size: cover;
  width: 400px;
  height: 600px;

  &:hover {
    cursor: pointer;
    filter: brightness(60%);
    transition: 0.3s;
  }
`;

export const MinnieText = styled.p`
  all: unset;
  position: absolute;
  color: white;
  font-size: 60px;
  opacity: 0;

  ${Minnie}:hover & {
    opacity: 1;
    color: white;
  }
`;
