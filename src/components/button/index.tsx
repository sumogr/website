import * as React from 'react';
import * as cn from 'classnames';

interface Props {
    children: React.ReactChild;
    uppercase?: boolean;
    fill?: boolean;
    round?: boolean;
    full?: boolean;
    right?: boolean;
    left?: boolean;
    disabled?: boolean;
    onClick?: Function;
    className?: string;
    block?: boolean;
}

const Button: React.SFC<Props> = ({children, uppercase, fill, round, full, right, left, disabled, onClick, className, block}) => (
    <button className={cn({uppercase}, {fill}, {round}, {full}, {right}, {left}, {block}, className)} disabled={disabled} onClick={() => onClick && onClick()}>{children}</button>
);

export default Button;