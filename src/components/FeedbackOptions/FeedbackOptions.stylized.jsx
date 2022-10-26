import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  display: flex;
`;
export const Button = styled.button`
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  background-color: #fff;
  border: 1px solid;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    background-color: #1976d2;
  }
`;
