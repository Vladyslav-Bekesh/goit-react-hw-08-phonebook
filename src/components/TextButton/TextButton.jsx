import React from 'react';
import { TextButtonCss } from './TextButton.styled';

export function TextButton({ text, onClick }) {
  return <TextButtonCss onClick={onClick}>{text}</TextButtonCss>;
}
