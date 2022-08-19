import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  padding: 2rem;
  color: white;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  input,
  textarea {
    padding: 10px;
  }
`;
