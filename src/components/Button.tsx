 export interface ButtonProps {
    varient: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: string;
    endIcon?: string;
    onClick: () => void;
 }

