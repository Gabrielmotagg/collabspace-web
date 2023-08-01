import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--zinc-900);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  padding: 0 16px;
  flex-direction: column;
  width: 320px;

  h1 {
    color: #f4f4f5;
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 40px;
  }

  section {
    div {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 20px;
    }
  }
`;

export const Label = styled.label`
  color: #f4f4f5;
  font-weight: 300;
`;

export const Input = styled.input`
  height: 48px;
  background: #27272a;
  color: #f4f4f5;
  font-size: 16px;
  padding: 20px 16px;
  border-radius: 4px;
  border: 0;
  outline: 0;

  ::placeholder {
    color: #737373;
  }
`;

export const Button = styled.button`
  height: 40px;
  background: #059669;
  color: #f4f4f5;
  font-size: 18px;
  font-weight: bold;
  padding: 0 16px;
  border: 0;
  outline: 0;
  border-radius: 4px;

  cursor: pointer;
`;
