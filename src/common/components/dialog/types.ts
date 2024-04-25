import { ReactNode } from 'react';

export interface DialogTemplateProps {
  title: string;
  enterButtonText?: string;
  children?: ReactNode;
  desc?: string;
  withClose?: boolean;
  inputs?: DialogInputProps[];
  onConfirm?: (data: { [key: string]: string }) => Promise<boolean> | boolean;
  onClose?: () => void;
}
export interface DialogInputProps {
  name: string;
  label: string;
  defaultValue?: string;
}
