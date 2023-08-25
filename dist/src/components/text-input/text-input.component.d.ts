import React from 'react';
import { FormikError } from '@memba-labs/shared';
import type { Spacing } from '../../styles';
export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    $marginBottomX?: keyof Spacing;
    $marginTopX?: keyof Spacing;
    $marginLeftX?: keyof Spacing;
    $marginRightX?: keyof Spacing;
    label?: string;
    error?: FormikError | undefined;
}
export declare const TextInput: React.FC<TextInputProps>;
//# sourceMappingURL=text-input.component.d.ts.map