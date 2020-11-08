import React from 'react';
import Styled from 'styled-components';

export interface SpinnerProps {
  type?: 'primary' | 'secondary';
  size?: string;
}
const SpinnerStyled = Styled.div<SpinnerProps>`

  display: inline-block;
  width: ${(props) => (props.size ? props.size : '18px')};
  height: ${(props) => (props.size ? props.size : '18px')};
  border: ${(props) =>
    props.type === 'primary'
      ? '3px solid #1B31F9'
      : '3px solid rgba(255,255,255,.3)'};
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;


@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
`;

const Spinner: React.FC<SpinnerProps> = ({ type, size }: SpinnerProps) => {
  return <SpinnerStyled type={type} size={size} />;
};
export default Spinner;
