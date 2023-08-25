import React from 'react';
import { Spacing } from '../../styles';
export interface StyledTextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    $marginBottomX?: keyof Spacing;
    $marginTopX?: keyof Spacing;
    $marginLeftX?: keyof Spacing;
    $marginRightX?: keyof Spacing;
}
export declare const Container: import("styled-components").StyledComponent<"a", any, StyledTextLinkProps, never>;
//# sourceMappingURL=text-link.styles.d.ts.map