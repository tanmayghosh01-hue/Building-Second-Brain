import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg" | "full";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
  disable?: boolean;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

const defaultStyles = "rounded flex";

const sizeStyles = {
  sm: "py-1 px-2 text-sm",
  md: "py-1 px-4 text-md",
  lg: "py-4 px-6 text-xl",
  full: "w-[200px] h-[35px] justify-center"
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[props.variant]} ${defaultStyles} ${
        sizeStyles[props.size]
      } items-center`} onClick={props.onClick}

      disabled={props.disable}
    >
      
      {props.startIcon ? <div className="pr-2 pt-[2px]">{props.startIcon}</div> : null}
      <div className="p-1">{props.text}</div>{props.endIcon}
    </button>
  );
};
