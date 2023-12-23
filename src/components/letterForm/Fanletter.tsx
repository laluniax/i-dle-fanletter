import React from "react";
import * as St from "./FanletterStyle";

function Fanletter() {
  return (
    <St.LetterContainer>
      <St.LetterBox>
        {/* <p>아이디 들어갈 곳 </p> */}
        <St.Avatar />
        <St.NickName>닉네임</St.NickName>
        <St.Time>2023/12/23/토/오후 8시 30분</St.Time>
        <St.SendTo>Send to : 우기</St.SendTo>

        <St.Comment>
          사랑해 사랑해사랑해 사랑해사랑해 사랑해사랑해 사랑해사랑해
          사랑해사랑해 사랑해사랑해 사랑해사랑해 사랑해사랑해 사랑해사랑해
          사랑해사랑해 사랑해 사랑해 사랑해사랑해 사랑해사랑해 사랑해사랑해
          사랑해사랑해 사랑해사랑해 사랑해사랑해 사랑해사랑해 사랑해사랑해
          사랑해사랑해 사랑해사랑해 사랑해 사랑해 사랑해사랑해 사랑해사랑해
          사랑해사랑해 사랑해사랑해 사랑해사랑해 사랑해사랑해 사랑해사랑해
          사랑해사랑해 사랑해사랑해 사랑해사랑해 사랑해
        </St.Comment>
      </St.LetterBox>
    </St.LetterContainer>
  );
}

export default Fanletter;
