import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  title: string;
}

const StyledHeader = styled.h1`
  color: blue;
`;

export function Header({ title }: HeaderProps) {
  return <StyledHeader>{title}</StyledHeader>;
}
