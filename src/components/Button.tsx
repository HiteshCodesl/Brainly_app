import { ReactElement } from "react";

interface ButtonInterface {
   text: string;
   size: "lg" | "md" | "sm";
   startIcon?: ReactElement;
   variant: "primary" | "secondary";
   onClick?: () => void;
}

const sizeStyles = {
    "lg": "px-8 py-6 text-lg rounded-xl",
    'md': "px-4 py-1 text-md rounded-md",
    "sm": "px-4 py-1 text-sm rounded-sm"
}

const variantStyle = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"
}

const defaultStyles = "m-2 rounded-md"

export function Button ({variant, size, startIcon, text, onClick}: ButtonInterface){

 return <button onClick={onClick} className={sizeStyles[size] + " " + variantStyle[variant] + " "+ defaultStyles} >

    <div className="flex items-center p-3">
    {startIcon}
    <div className="px-2">
    {text}
    </div>
    </div>
    </button>
}
