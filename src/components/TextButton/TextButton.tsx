import React from 'react';
import { TextButtonCss } from './TextButton.styled';
interface Props extends React.HTMLProps<HTMLButtonElement> {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  text: string;
  type: 'submit' | 'reset' | 'button';
}
export function TextButton({ text, onClick, disabled, type }: Props) {
  return (
    <TextButtonCss onClick={onClick} disabled={disabled} type={type}>
      {text}
    </TextButtonCss>
  );
}
