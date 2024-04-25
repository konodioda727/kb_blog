import {
  DialogInputProps,
  DialogTemplateProps,
} from '@/common/components/dialog/types';
import { Button } from '@/common/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/common/components/ui/dialog';
import { Input } from '@/common/components/ui/input';
import { Label } from '@/common/components/ui/label';
import { useDynamic } from '@/common/hooks/useDynamic';
import { genKey } from '@/common/utils/genKey';
import React, { useState } from 'react';

const data: { [key: string]: string } = {};
const handleInput = (name: string, context: string) => {
  data[name] = context;
};
export const DialogInput: React.FC<DialogInputProps> = (props) => {
  const { name, label, defaultValue, ...restProps } = props;
  return (
    <>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor={name} className="text-right">
          {label}
        </Label>
        <Input
          id={name}
          defaultValue={defaultValue && name}
          className="col-span-3"
          onChange={(e) => handleInput(name, e.target.value)}
          {...restProps}
        />
      </div>
    </>
  );
};
export const DialogTemplate: React.FC<DialogTemplateProps> = (props) => {
  const {
    inputs,
    children,
    onClose,
    onConfirm,
    withClose,
    enterButtonText,
    desc,
    title,
  } = props;
  const [elem, setShow] = useDynamic({ elem: <div>123123</div> });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleConfirm = async () => {
    const res = onConfirm && (await onConfirm(data));
    res ? setIsOpen(false) : setShow(true);
  };
  const handleClose = () => {
    onClose && onClose();
    setIsOpen(false);
  };
  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={() => setIsOpen(true)}>
            {enterButtonText && title}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {desc && <DialogDescription>{desc}</DialogDescription>}
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {inputs &&
              inputs.map((inputProps, index) => (
                <DialogInput
                  key={genKey.next().value as number}
                  {...inputProps}
                />
              ))}
          </div>
          {children}
          {elem}
          <DialogFooter>
            <Button type="submit" onClick={handleConfirm}>
              确认
            </Button>
            {withClose && (
              <DialogClose asChild>
                <Button onClick={handleClose} type="button">
                  关闭
                </Button>
              </DialogClose>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
