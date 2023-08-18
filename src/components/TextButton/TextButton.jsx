import React from 'react';
import { TextButtonCss } from './TextButton.styled';

export function TextButton({ text, onClick, disabled }) {
  return (
    <TextButtonCss onClick={onClick} disabled={disabled}>
      {text}
    </TextButtonCss>
  );
}
