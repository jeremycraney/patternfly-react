import * as React from 'react';
import { Gallery } from '../Gallery';
import { shallow, mount } from 'enzyme';

test('gutter', () => {
  const view = shallow(<Gallery hasGutter />);
  expect(view).toMatchSnapshot();
});

test('gutter breakpoints', () => {
  const view = mount(
    <Gallery
      hasGutter
      minWidths={{
        default: '100%',
        md: '100px',
        xl: '300px'
      }}
      maxWidths={{
        md: '200px',
        xl: '1fr'
      }}
    />
  );
  expect(view).toMatchSnapshot();
});
