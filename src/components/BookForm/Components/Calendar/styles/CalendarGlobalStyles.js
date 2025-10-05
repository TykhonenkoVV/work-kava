import { css } from '@emotion/react';
import arrow from '../images/arrow.svg';
import whiteArrow from '../images/arrow_white.svg';

export const CalendarGlobalStyles = css`
  :root {
    /* colors */
    --color-text: #434141;
    --color-placeholder: rgba(0, 0, 0, 0.5);
    --color-additional: #93b1ff;
    --color-additional7: rgba(147, 177, 255, 0.7);
    --background-color-calendar: #ededed;
    --background-color-calendar-header: #ffffff;

    /* images */
    --images-arrow: url('${arrow}');
    /* spacing */
    /* text */
  }

  /* :root { */
  /* colors */
  /* --color-text: #434141;
    --color-placeholder: rgba(0, 0, 0, 0.5);
    --color-additional: rgb(100, 188, 255);
    --color-additional7: rgba(100, 188, 255, 0.7);
    --background-color-calendar: #ededed;
    --background-color-calendar-header: rgb(136, 202, 252); */

  /* images */
  /* --images-arrow: url('${whiteArrow}'); */
  /* spacing */
  /* text */
  /* } */

  /* :root { */
  /* colors */
  /* --color-text: #ffffff;
    --color-placeholder: rgba(255, 255, 255, 0.5);
    --color-additional: #93b1ff;
    --color-additional7: rgba(147, 177, 255, 0.7);
    --background-color-calendar: #3a3e42;
    --background-color-calendar-header: #575c63; */

  /* images */
  /* --images-arrow: url('${arrow}'); */
  /* spacing */
  /* text */
  /* } */
`;
