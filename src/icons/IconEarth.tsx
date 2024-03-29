/* eslint-disable max-len */

import { IconProps, IconSize } from '@/components/Icon/IconTypes';
import Icon from '@/components/Icon';

const IconEarth = ({ size = IconSize.l, ...restProps }: IconProps) => {
  return (
    <Icon {...restProps} customWidth={52} customHeight={52} viewBox='0 0 64 64'>
      <g fill='none' fillRule='evenodd'>
        <path
          fill='#9C4D4D'
          d='M32,41 C52.336554,41 61,61 61,61 L3,61 C3,61 11.663446,41 32,41 Z'
        />
        <path
          fill='#80D25B'
          d='M32,28 C36.418278,28 40,24.418278 40,20 C40,15.581722 32,2 32,2 C32,2 24,15.581722 24,20 C24,24.418278 27.581722,28 32,28 Z'
        />
        <path
          fill='#80D25B'
          d='M47.5044647,38.529591 C50.2658885,38.529591 52.5044647,36.1876959 52.5044647,33.2988218 C52.5044647,30.4099477 47.5044647,21.529591 47.5044647,21.529591 C47.5044647,21.529591 42.5044647,30.4099477 42.5044647,33.2988218 C42.5044647,36.1876959 44.743041,38.529591 47.5044647,38.529591 Z'
          transform='rotate(75 47.504 30.03)'
        />
        <path
          fill='#80D25B'
          d='M17.5044647,38.529591 C20.2658885,38.529591 22.5044647,36.1876959 22.5044647,33.2988218 C22.5044647,30.4099477 17.5044647,21.529591 17.5044647,21.529591 C17.5044647,21.529591 12.5044647,30.4099477 12.5044647,33.2988218 C12.5044647,36.1876959 14.743041,38.529591 17.5044647,38.529591 Z'
          transform='scale(-1 1) rotate(75 0 7.217)'
        />
        <path stroke='#22BA8E' strokeLinecap='square' strokeWidth='2' d='M32,52 L32,16.9545689' />
        <path
          stroke='#22BA8E'
          strokeLinecap='round'
          strokeWidth='2'
          d='M44,31 C37.372583,31 32,36.372583 32,43'
        />
        <path
          stroke='#22BA8E'
          strokeLinecap='round'
          strokeWidth='2'
          d='M32,31 C25.372583,31 20,36.372583 20,43'
          transform='matrix(-1 0 0 1 52 0)'
        />
      </g>
    </Icon>
  );
};

export default IconEarth;
