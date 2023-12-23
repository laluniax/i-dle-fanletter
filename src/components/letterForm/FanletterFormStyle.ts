import styled from "styled-components";

export const LetterFormContainer = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #600985;
`;

export const LetterForm = styled.form`
  width: 900px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #fff;
`;

//셀렉트
export const SelectBox = styled.div`
  display: flex;
  align-items: center;
`;

export const SelectText = styled.p`
  font-size: 25px;
  color: #fff;
  margin-right: 10px;
`;

export const MemberSelect = styled.select`
  padding: 10px;
  font-size: 23px;
  border-radius: 10px;
  color: white;
  background-color: black;
`;

export const SelectOption = styled.option`
  background-color: #600985;
`;

// 인풋
export const InputandBtnBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

export const InputText = styled.p`
  font-size: 25px;
  color: #fff;
`;
export const CommentInput = styled.input`
  color: #000;
  width: 20rem;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid white;
  margin-left: 10px;
  font-size: 20px;
`;

export const SubmitButton = styled.button`
  font-size: 20px;
  color: #fff;
  padding: 12px;
  border: 1px solid white;
  border-radius: 10px;
  margin-left: 10px;
  padding-left: 20px;
  padding-right: 20px;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: black;
  }
`;
