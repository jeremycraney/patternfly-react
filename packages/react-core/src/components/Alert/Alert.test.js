import React from 'react';
import { mount } from 'enzyme';

import Alert, { AlertVariant } from './Alert';
import Button, { ButtonVariant } from '../Button/Button';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

Object.keys(AlertVariant).forEach(variant => {
  describe(`Alert - ${variant}`, () => {
    test('Body', () => {
      const view = mount(<Alert variant={variant}>Some alert</Alert>);
      expect(view).toMatchSnapshot();
    });

    test('Title', () => {
      const view = mount(
        <Alert variant={variant} title="Some title">
          Some alert
        </Alert>
      );
      expect(view).toMatchSnapshot();
    });

    test('Action', () => {
      const view = mount(
        <Alert
          variant={variant}
          action={<Button variant={ButtonVariant.secondary}>Title</Button>}
        >
          Some alert
        </Alert>
      );
      expect(view).toMatchSnapshot();
    });

    test('Action and Title', () => {
      const view = mount(
        <Alert
          variant={variant}
          action={<Button variant={ButtonVariant.secondary}>Title</Button>}
          title="Some title"
        >
          Some alert
        </Alert>
      );
      expect(view).toMatchSnapshot();
    });

    test('Custom aria label', () => {
      const view = mount(
        <Alert
          variant={variant}
          ariaLabel={`Custom aria label for ${variant}`}
          action={<Button variant={ButtonVariant.secondary}>Title</Button>}
          title="Some title"
        >
          Some alert
        </Alert>
      );
      expect(view).toMatchSnapshot();
    });
  });
});
