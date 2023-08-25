import type { Colors, Spacing } from '../../styles';
export interface StyledTextProps {
    color?: keyof Colors;
    $marginBottomX?: keyof Spacing;
    $marginTopX?: keyof Spacing;
    $marginLeftX?: keyof Spacing;
    $marginRightX?: keyof Spacing;
    $textAlign?: 'center';
}
export declare const BaseText: import("styled-components").StyledComponent<"p", any, StyledTextProps, never>;
export declare const Hero: import("styled-components").StyledComponent<"h1", any, StyledTextProps, never>;
export declare const H1: import("styled-components").StyledComponent<"h1", any, StyledTextProps, never>;
export declare const H2: import("styled-components").StyledComponent<"h2", any, StyledTextProps, never>;
export declare const H3: import("styled-components").StyledComponent<"h3", any, StyledTextProps, never>;
export declare const H4: import("styled-components").StyledComponent<"h4", any, StyledTextProps, never>;
export declare const Body: import("styled-components").StyledComponent<"p", any, StyledTextProps, never>;
export declare const BodyBold: import("styled-components").StyledComponent<"p", any, StyledTextProps, never>;
export declare const Caption: import("styled-components").StyledComponent<"p", any, StyledTextProps, never>;
export declare const FootNote: import("styled-components").StyledComponent<"p", any, StyledTextProps, never>;
export declare const Label: import("styled-components").StyledComponent<"p", any, StyledTextProps, never>;
export declare const Tab: import("styled-components").StyledComponent<"p", any, StyledTextProps, never>;
//# sourceMappingURL=text.styles.d.ts.map