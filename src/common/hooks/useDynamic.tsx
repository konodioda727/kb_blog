import {ReactNode, useState} from "react";

export const useDynamic = (props:{elem: ReactNode}): [ReactNode | null, (status: boolean) => void] => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const renderElem = isShow
        ? props.elem
        : null
    return [renderElem, (status: boolean) => setIsShow(status)]
}