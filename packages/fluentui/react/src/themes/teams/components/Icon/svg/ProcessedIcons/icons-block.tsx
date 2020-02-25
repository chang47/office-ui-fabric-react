import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path
        className={cx(teamsIconClassNames.outline, classes.outlinePart)}
        d="M23 16c0 .64-.084 1.258-.25 1.852a7.03 7.03 0 0 1-1.809 3.09 7.082 7.082 0 0 1-3.09 1.808c-.593.167-1.21.25-1.851.25s-1.258-.083-1.852-.25a7.05 7.05 0 0 1-3.09-1.809 7.044 7.044 0 0 1-1.808-3.09C9.083 17.259 9 16.642 9 16s.083-1.258.25-1.852c.167-.593.403-1.15.71-1.671a7.096 7.096 0 0 1 2.517-2.516 7.01 7.01 0 0 1 1.671-.711C14.742 9.084 15.36 9 16 9s1.258.084 1.852.25a7.027 7.027 0 0 1 3.09 1.809 7.039 7.039 0 0 1 1.809 3.09c.165.593.249 1.21.249 1.851zm-3.21-4.547A5.924 5.924 0 0 0 16 10.078c-.812 0-1.577.156-2.293.469-.716.312-1.344.738-1.883 1.277s-.964 1.167-1.277 1.883A5.671 5.671 0 0 0 10.078 16c0 .693.118 1.365.356 2.016a5.893 5.893 0 0 0 1.02 1.773l8.335-8.336zM21.921 16a5.918 5.918 0 0 0-1.375-3.789l-8.336 8.336a5.871 5.871 0 0 0 1.773 1.02 5.84 5.84 0 0 0 2.016.355c.813 0 1.576-.156 2.293-.469.716-.312 1.344-.738 1.883-1.277s.965-1.166 1.277-1.883A5.67 5.67 0 0 0 21.922 16z"
      />
      <path
        className={cx(teamsIconClassNames.filled, classes.filledPart)}
        d="M23.5 15.969c0 .687-.09 1.35-.27 1.984a7.556 7.556 0 0 1-1.937 3.309 7.592 7.592 0 0 1-3.309 1.937c-.635.18-1.297.27-1.984.27s-1.35-.09-1.984-.27a7.565 7.565 0 0 1-4.485-3.457 7.553 7.553 0 0 1-.762-1.789c-.18-.635-.269-1.297-.269-1.984s.09-1.349.27-1.985a7.58 7.58 0 0 1 5.246-5.246c.635-.18 1.296-.27 1.984-.27s1.349.09 1.984.27a7.59 7.59 0 0 1 4.485 3.457 7.58 7.58 0 0 1 .761 1.79c.18.635.27 1.296.27 1.984zM18.953 11.5a5.668 5.668 0 0 0-1.418-.66 5.238 5.238 0 0 0-2.95-.035 5.434 5.434 0 0 0-2.359 1.39 5.408 5.408 0 0 0-1.39 2.363 5.215 5.215 0 0 0 .035 2.945c.153.504.373.977.66 1.419l7.422-7.422zm2.406 4.469c0-.52-.077-1.032-.23-1.535a5.664 5.664 0 0 0-.66-1.418l-7.422 7.422c.442.287.915.506 1.418.66a5.2 5.2 0 0 0 2.945.035 5.422 5.422 0 0 0 2.363-1.39 5.432 5.432 0 0 0 1.39-2.363c.13-.457.196-.927.196-1.411z"
      />
    </svg>
  ),
  styles: {},
  exportedAs: 'ban'
} as TeamsProcessedSvgIconSpec;
