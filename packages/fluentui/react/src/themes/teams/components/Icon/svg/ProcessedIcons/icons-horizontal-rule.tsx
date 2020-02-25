import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(teamsIconClassNames.outline, classes.outlinePart)}
          d="M23.25,17H8.75C8.3359,17,8,16.6641,8,16.25s0.3359-0.75,0.75-0.75h14.5c0.4141,0,0.75,0.3359,0.75,0.75
          S23.6641,17,23.25,17z M21,12.5c0-0.2764-0.2236-0.5-0.5-0.5h-9c-0.2764,0-0.5,0.2236-0.5,0.5s0.2236,0.5,0.5,0.5h9
          C20.7764,13,21,12.7764,21,12.5z M21,9.5C21,9.2236,20.7764,9,20.5,9h-9C11.2236,9,11,9.2236,11,9.5s0.2236,0.5,0.5,0.5h9
          C20.7764,10,21,9.7764,21,9.5z M21,23.5c0-0.2764-0.2236-0.5-0.5-0.5h-9c-0.2764,0-0.5,0.2236-0.5,0.5s0.2236,0.5,0.5,0.5h9
          C20.7764,24,21,23.7764,21,23.5z
          M21,20.5c0-0.2764-0.2236-0.5-0.5-0.5h-9c-0.2764,0-0.5,0.2236-0.5,0.5s0.2236,0.5,0.5,0.5h9
          C20.7764,21,21,20.7764,21,20.5z"
        />
        <path
          className={cx(teamsIconClassNames.filled, classes.filledPart)}
          d="M22.75,17.5H9.25C8.5596,17.5,8,16.9404,8,16.25S8.5596,15,9.25,15h13.5c0.6904,0,1.25,0.5596,1.25,1.25
          S23.4404,17.5,22.75,17.5z M21,12.5c0-0.2764-0.2236-0.5-0.5-0.5h-9c-0.2764,0-0.5,0.2236-0.5,0.5s0.2236,0.5,0.5,0.5h9
          C20.7764,13,21,12.7764,21,12.5z M21,9.5C21,9.2236,20.7764,9,20.5,9h-9C11.2236,9,11,9.2236,11,9.5s0.2236,0.5,0.5,0.5h9
          C20.7764,10,21,9.7764,21,9.5z M21,23.5c0-0.2764-0.2236-0.5-0.5-0.5h-9c-0.2764,0-0.5,0.2236-0.5,0.5s0.2236,0.5,0.5,0.5h9
          C20.7764,24,21,23.7764,21,23.5z M21,20.5c0-0.2764-0.2236-0.5-0.5-0.5h-9c-0.2764,0-0.5,0.2236-0.5,0.5s0.2236,0.5,0.5,0.5h9
          C20.7764,21,21,20.7764,21,20.5z"
        />
      </g>
    </svg>
  ),
  styles: {},
  exportedAs: 'horizontal-rule'
} as TeamsProcessedSvgIconSpec;
