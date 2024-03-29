/* eslint-disable max-len */

import { IconProps, IconSize } from '@/components/Icon/IconTypes';
import Icon from '@/components/Icon';

const IconCalendar = ({ size = IconSize.l, ...restProps }: IconProps) => {
  return (
    <Icon {...restProps} customWidth={52} customHeight={52} viewBox='0 0 64 64'>
      <g fill='none' fillRule='evenodd'>
        <path
          fill='#B4DFFB'
          d='M8,7 L60,7 L60,55.0059907 C60,57.2118211 58.2100423,59 56.0059907,59 L11.9940093,59 C9.78817888,59 8,57.2100423 8,55.0059907 L8,7 Z'
        />
        <path
          fill='#80D25B'
          d='M49.5044647,43.529591 C52.2658885,43.529591 54.5044647,41.1876959 54.5044647,38.2988218 C54.5044647,35.4099477 49.5044647,26.529591 49.5044647,26.529591 C49.5044647,26.529591 44.5044647,35.4099477 44.5044647,38.2988218 C44.5044647,41.1876959 46.743041,43.529591 49.5044647,43.529591 Z'
          transform='rotate(75 49.504 35.03)'
        />
        <path
          fill='#80D25B'
          d='M18.5044647,43.529591 C21.2658885,43.529591 23.5044647,41.1876959 23.5044647,38.2988218 C23.5044647,35.4099477 18.5044647,26.529591 18.5044647,26.529591 C18.5044647,26.529591 13.5044647,35.4099477 13.5044647,38.2988218 C13.5044647,41.1876959 15.743041,43.529591 18.5044647,43.529591 Z'
          transform='scale(-1 1) rotate(75 0 10.914)'
        />
        <path
          stroke='#22BA8E'
          strokeLinecap='round'
          strokeWidth='2'
          d='M46,36 C39.372583,36 34,41.372583 34,48'
        />
        <path
          stroke='#22BA8E'
          strokeLinecap='round'
          strokeWidth='2'
          d='M33,36 C26.372583,36 21,41.372583 21,48'
          transform='matrix(-1 0 0 1 54 0)'
        />
        <rect width='52' height='14' x='8' y='7' fill='#D650C7' />
        <rect width='5' height='11' x='17' y='3' fill='#B4DFFB' rx='2' />
        <rect width='5' height='11' x='32' y='3' fill='#B4DFFB' rx='2' />
        <rect width='5' height='11' x='47' y='3' fill='#B4DFFB' rx='2' />
      </g>
    </Icon>
  );
};

export default IconCalendar;
