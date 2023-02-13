import styled from "styled-components";

export const TitleRegister = styled.h2`
  text-align: center;
  margin: 5%;
`;
export const FormWrapper = styled.div`
  margin: auto;
  width: 60%;
  border: 1px solid #000;
  border-radius: 10px;
  form {
    padding: 6%;
    input {
      height: 40px;
      width: 100%;
      border-radius: 3px;
      border: 1px #000 solid;
      margin-top: 1%;
      margin-bottom: 5%;
    }
  }
`;

export const ButtonSubmit = styled.button`
  height: 40px;
  width: fit-content;
  color: white;
  background: #000;
  display: block;
  margin-top: 10%;
`;
