import { FC } from "react";

interface CustomButtonProps {
    title: string;
    handleClick: () => void;
    className?: string;
}

export const CustomButton: FC<CustomButtonProps> = ({
    title,
    handleClick,
    className,
}) => {
    return (
        <button className={className} onClick={handleClick}>
            {title}
        </button>
    );
};
