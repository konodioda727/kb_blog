import { DialogTemplate } from '@/common/components/dialog';
import { firebase_app } from '@/common/configs/firebase.config';
import { getAuth } from 'firebase/auth';
import React from 'react';

const RegisterModule: React.FC = () => {
  const auth = getAuth(firebase_app);
  const handleConfirm = (data: { [key: string]: string }) => {
    console.log(data);
    return true;
  };
  return (
    <DialogTemplate
      title="注册"
      inputs={[
        {
          name: 'email',
          label: '邮箱',
        },
        {
          name: 'password',
          label: '密码',
        },
      ]}
      onConfirm={handleConfirm}
    ></DialogTemplate>
  );
};

export default RegisterModule;
