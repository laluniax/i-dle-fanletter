import React from "react";
import * as St from "./FanletterFormStyle";
import Fanletter from "./Fanletter";
function LetterForm() {
  return (
    <>
      <St.LetterFormContainer>
        <St.LetterForm>
          <St.SelectBox>
            <St.SelectText>Send To: </St.SelectText>
            <St.MemberSelect>
              <option>Ugi</option>
              <option>Miyeon</option>
              <option>Soyeon</option>
              <option>Shuhwa</option>
              <option>Minnie</option>
            </St.MemberSelect>
          </St.SelectBox>

          <St.InputandBtnBox>
            <St.InputText>Comment :</St.InputText>
            <St.CommentInput placeholder="코멘트를 입력해주세요." type="text" />
            <St.SubmitButton>submit</St.SubmitButton>
          </St.InputandBtnBox>
        </St.LetterForm>
      </St.LetterFormContainer>
      <Fanletter />
    </>
  );
}

export default LetterForm;
