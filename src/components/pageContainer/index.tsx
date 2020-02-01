import * as React from 'react';
import * as cn from 'classnames';

interface Props {
    children: React.ReactNode;
    center?: boolean;
    middle?: boolean;
    big?: boolean;
    className?: string;
    id?: string;
}

const PageContainer: React.SFC<Props> = ({children, center, middle, big, id, className}) => (
    <div className={cn('page-container', 'container-fluid', className)} id={id}>
        <div className={cn('row', {'center-xs': center}, {'middle-xs': middle}, {'full-row': middle}, {big})}>
            {children}
        </div>
    </div>
);

export default PageContainer;