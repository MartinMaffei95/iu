import { CSSProperties, FC, ReactNode } from 'react';
import { base64Pattern } from './base64Patterns';

type ClassNameConfig = {
  bg?: string;
  color?: string;
};
type Props = {
  children: ReactNode;
  variant?: 'SKEWED' | 'BASIC' | 'NONE';
  classNameConfig?: ClassNameConfig;
};
const Highlighted: FC<Props> = ({
  children,
  variant = 'BASIC',
  classNameConfig,
}) => {
  const skewedStyle: CSSProperties = {
    backgroundColor: classNameConfig?.bg || 'fuchsia',
    color: classNameConfig?.color || 'black',
    transform: 'skew(-15deg)',
    display: 'inline-block',
    padding: '.25rem .5rem',
    fontWeight: '800',
  };

  const basicStyle: CSSProperties = {
    backgroundColor: classNameConfig?.bg || 'yellow',
    color: classNameConfig?.color || 'black',
  };
  const HighLightStyles = {
    SKEWED: skewedStyle,
    BASIC: basicStyle,
    NONE: {},
  };
  return <span style={HighLightStyles[variant]}>{children}</span>;
};

export default Highlighted;
