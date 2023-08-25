import React from 'react';
import { Colors } from '../../styles';
import { StyledLoadingSpinnerProps } from './loading-spinner.styles';
/**
 * Required for button loading states but not officially part of the design system (yet) so hidden in the button directory
 * to discourage external use
 */
export interface LoadingSpinnerClassNameProps {
    svg?: string;
    circleForeground?: string;
    circleBackground?: string;
}
export interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLOrSVGElement>, LoadingSpinnerClassNameProps, StyledLoadingSpinnerProps {
    size?: number;
    color?: keyof Colors;
}
export declare const LoadingSpinner: React.FC<LoadingSpinnerProps>;
//# sourceMappingURL=loading-spinner.component.d.ts.map