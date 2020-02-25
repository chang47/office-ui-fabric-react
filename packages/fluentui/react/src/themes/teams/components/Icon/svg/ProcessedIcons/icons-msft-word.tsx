import * as React from 'react';
import { TeamsProcessedSvgIconSpec } from '../types';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path d="M8.5 10.477l9-2.079v15.204l-9-2.079V10.477zm1.234 2.734l1.055 5.094 1.094.062.742-3.406a.74.74 0 0 1 .016-.066 1.825 1.825 0 0 0 .047-.3c.004-.08.012-.157.023-.236h.016c0 .105.006.206.019.305.013.1.03.198.05.297l.75 3.5 1.188.07 1.328-5.695-1.14.062-.672 3.758a4.225 4.225 0 0 0-.05.309 2.4 2.4 0 0 0-.02.308h-.008l-.031-.3a3.094 3.094 0 0 0-.047-.301L13.328 13l-1.086.063-.781 3.515a2.266 2.266 0 0 0-.078.61h-.024c0-.1-.005-.2-.015-.301a5.88 5.88 0 0 0-.04-.301l-.585-3.438-.985.063zM22.5 10.492c.192 0 .322.038.39.113.068.076.102.208.102.395v10c0 .188-.034.32-.101.395-.069.076-.199.113-.391.113H18V20h4v-.492h-4v-1.016h4V18h-4v-.992h4v-.516h-4v-.984h4v-.5h-4V14h4v-.492h-4v-1.016h4V12h-4v-1.508h4.5z" />
    </svg>
  ),
  styles: {},
  exportedAs: 'word, word-color'
} as TeamsProcessedSvgIconSpec;
