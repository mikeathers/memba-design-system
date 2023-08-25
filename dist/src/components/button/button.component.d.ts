import React from 'react';
import type { Spacing } from '../../styles';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactElement | React.ReactElement[] | string[] | string | undefined;
    variant: 'primary' | 'secondary' | 'text';
    $marginBottomX?: keyof Spacing;
    $marginTopX?: keyof Spacing;
    $marginLeftX?: keyof Spacing;
    $marginRightX?: keyof Spacing;
    isLoading?: boolean;
    isDisabled?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
//# sourceMappingURL=button.component.d.ts.map