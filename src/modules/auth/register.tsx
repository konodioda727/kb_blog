import React from "react";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {firebase_app} from "@/common/configs/firebase.config";
import {DialogTemplate} from "@/common/components/dialog";

const RegisterModule: React.FC = () => {
    const auth = getAuth(firebase_app)
    const handleConfirm = (data: {[key: string] : string}) => {
        console.log(data)
        return true
    }
    return (
        <DialogTemplate title="注册" inputs={[{
            name: 'email',
            label: '邮箱',
        }, {
            name: 'password',
            label: '密码',
        }]} onConfirm={handleConfirm}></DialogTemplate>
    )
}

export default RegisterModule