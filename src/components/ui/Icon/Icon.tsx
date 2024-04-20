import * as React from 'react';

export type SVGElement = React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>;

export interface IconProps {
  IconEl: SVGElement;
  size?: 'small' | 'medium' | 'large';
  thickness?: 'thin' | 'normal';
}
function Icon({ IconEl, size, thickness }: IconProps) {
  const iconSize = size === 'small' ? 16 : size === 'large' ? 48 : 24;
  const iconStrokeWidth = thickness === 'thin' ? 1 : 1.5;

  return <IconEl height={iconSize} width={iconSize} strokeWidth={iconStrokeWidth} />;
}

export default Icon;
