import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownToggleCheckbox,
  DropdownItem,
  DropdownSeparator
} from '@patternfly/react-core';

export const DropdownSplitButton: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggle = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const onFocus = () => {
    const element = document.getElementById('toggle-split-button');
    element.focus();
  };

  const onSelect = () => {
    setIsOpen(false);
    onFocus();
  };

  const dropdownItems = [
    <DropdownItem key="link">Link</DropdownItem>,
    <DropdownItem key="action" component="button">
      Action
    </DropdownItem>,
    <DropdownItem key="disabled link" isDisabled href="www.google.com">
      Disabled link
    </DropdownItem>,
    <DropdownItem
      key="disabled action"
      isAriaDisabled
      component="button"
      tooltip="Tooltip for disabled item"
      tooltipProps={{ position: 'top' }}
    >
      Disabled action
    </DropdownItem>,
    <DropdownSeparator key="separator" />,
    <DropdownItem key="separated link">Separated link</DropdownItem>,
    <DropdownItem key="separated action" component="button">
      Separated action
    </DropdownItem>
  ];

  return (
    <Dropdown
      onSelect={onSelect}
      toggle={
        <DropdownToggle
          splitButtonItems={[
            <DropdownToggleCheckbox id="split-button-toggle-checkbox" key="split-checkbox" aria-label="Select all" />
          ]}
          onToggle={onToggle}
          id="toggle-split-button"
        />
      }
      isOpen={isOpen}
      dropdownItems={dropdownItems}
    />
  );
};
