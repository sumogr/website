import * as React from 'react';
import * as cn from 'classnames';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Box: React.SFC<Props> = ({children, className}) => (
    <div className={cn('box-component', className)}>
        {children}
    </div>
);

export default Box;