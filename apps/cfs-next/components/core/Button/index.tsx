import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    className?: string;
    variant?: string;
    id: string;
    disabled?: boolean;
    onClick?: () => unknown;
}

const Button = (props: ButtonProps) => {
    let buttonStyle = "bg-teal py-2 px-6 text-white flex uppercase items-center rounded border border-[#008686] shadow-[inset_0_1px_0_#00B9B9] enabled:hover:bg-[#00B9B9] enabled:cursor-pointer flex content-center justify-center text-center";
    if (props.variant == "secondary") {
        buttonStyle = "bg-shakespeare py-2 px-6 text-white flex items-center rounded border border-[#2E84B3] shadow-[inset_0_1px_0_#5DB9E8] enabled:hover:bg-[#5DB9E8] enabled:cursor-pointer flex justify-center text-center"
    } else if (props.variant == "invert") {
        buttonStyle = "bg-transparent py-2 px-0 lg:px-6 text-mine flex items-center rounded border border-teal hover:bg-teal enabled:hover:text-white enabled:cursor-pointer flex justify-center text-center"
    }

    if(props.disabled) buttonStyle = buttonStyle.concat(" !cursor-not-allowed !opacity-80");

    return <button className={`${buttonStyle} ${props.className}`} id={props.id} onClick={props.onClick} disabled={props.disabled}>
        { props.children }
    </button>
};

export default Button;
