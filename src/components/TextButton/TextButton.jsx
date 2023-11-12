import React from 'react';
import { TextButtonCss } from './TextButton.styled';

export function TextButton({ text, onClick, disabled, type }) {
  return (
    <TextButtonCss onClick={onClick} disabled={disabled} type={type}>
      {text}
    </TextButtonCss>
  );
}
