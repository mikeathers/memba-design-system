import React from 'react';
import type { Colors } from '../../styles';
import type { IconNames } from './icons';
export interface SvgIconProps {
    name: keyof IconNames;
    color?: keyof Colors;
    size?: number;
    style?: any;
    viewBoxHeight?: number;
    viewBoxWidth?: number;
    viewBoxY?: number;
    noFill?: boolean;
}
export declare const icons: {
    rightArrow: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    plusSign: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    remove: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    email: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    visible: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    hidden: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    password: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    information: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    tick: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    user: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    back: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    forward: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    savings: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    usage: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    devices: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    error: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    electric: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    online: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    twitter: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    checkBoxOn: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    checkBoxOff: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    externalLink: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    signOut: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    location: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    help: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    fill: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    minus: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    delete: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    connectionLost: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    google: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    apple: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
};
export declare const SvgIcon: React.FC<SvgIconProps>;
//# sourceMappingURL=svg-icon.component.d.ts.map