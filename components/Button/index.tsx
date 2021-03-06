import React from 'react';
import Styled from 'styled-components';

export interface ButtonProps {
  isActive: boolean;
  onClick: () => void;
  margin?: string;
  width?: string;
}

const ButtonStyled = Styled.button<ButtonProps>`
padding: 5px 15px;
background: ${(props) => (!props.isActive ? '#C5E09B' : ' #7CBA00;')};
margin: ${(props) => (props.margin ? props.margin : '0px 0px 15px 0px')};
width: ${(props) => (props.width ? props.width : 'fit-content')};
outline: none;
cursor: pointer;
border: none;
border-radius: 5px;
 :hover {
   background: #7CBA00;
 }
`;

const Button: React.FC<ButtonProps> = ({
  isActive,
  onClick,
  ...props
}: ButtonProps) => {
  const [isActiveButton, setIsActiveButton] = React.useState(isActive);

  const handleOnClick = () => {
    setIsActiveButton(!isActiveButton);
    onClick();
  };

  return (
    <ButtonStyled
      isActive={isActive}
      onClick={() => handleOnClick()}
      {...props}
    />
  );
};

export default Button;
