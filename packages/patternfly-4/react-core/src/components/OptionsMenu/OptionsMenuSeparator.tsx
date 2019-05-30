import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/OptionsMenu/options-menu.css';

export interface OptionsMenuSeparatorProps extends React.HTMLProps<HTMLLIElement> {
  /** Classes applied to root element of Options menu separator item */
  className?: string;
}

export const OptionsMenuSeparator: React.FunctionComponent<OptionsMenuSeparatorProps> = ({
  className = '',
  ...props
}: OptionsMenuSeparatorProps) => (
  <li
    className={css(styles.optionsMenuSeparator, className)}
    role="separator"
    {...props}
  />
);
