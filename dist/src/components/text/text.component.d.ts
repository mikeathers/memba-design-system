import React from 'react';
import type { StyledTextProps } from './text.styles';
export interface TextProps extends StyledTextProps {
    type: 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-bold' | 'caption' | 'footnote' | 'label' | 'tab';
    children: React.ReactElement | React.ReactElement[] | React.ReactNode | React.ReactNode[] | string[] | string | undefined;
}
export declare const Text: React.FC<TextProps>;
//# sourceMappingURL=text.component.d.ts.map