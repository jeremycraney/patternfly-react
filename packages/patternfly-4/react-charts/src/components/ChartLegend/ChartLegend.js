/* eslint-disable react/require-default-props,react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryLegend } from 'victory';
import ChartContainer from '../ChartContainer/ChartContainer';
import ChartPoint from '../ChartPoint/ChartPoint';
import { getTheme } from '../ChartUtils/chart-theme';

export const propTypes = {
  /**
   * See TypeScript API docs: https://formidable.com/open-source/victory/docs/victory-legend/
   */
  '': PropTypes.any,
  /**
   * The containerComponent prop takes an entire component which will be used to
   * create a container element for standalone charts.
   * The new element created from the passed containerComponent wil be provided with
   * these props from VictoryArea: height, width, children
   * (the chart itself) and style. Props that are not provided by the
   * child chart component include title and desc, both of which
   * are intended to add accessibility to Victory components. The more descriptive these props
   * are, the more accessible your data will be for people using screen readers.
   * Any of these props may be overridden by passing in props to the supplied component,
   * or modified or ignored within the custom component itself. If a dataComponent is
   * not provided, VictoryArea will use the default VictoryContainer component.
   * @example <ChartContainer title="Chart of Dog Breeds" desc="This chart shows how popular each dog breed is by percentage in Seattle." />
   * @default <ChartContainer/>
   */
  containerComponent: PropTypes.element,
  /**
   * Specifies the height the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   */
  height: PropTypes.number,
  /**
   * The responsive prop specifies whether the rendered container should be a responsive container with a viewBox
   * attribute, or a static container with absolute width and height.
   *
   * Useful when legend is located inside a chart -- default is false.
   *
   * Note: Not compatible with containerComponent prop
   */
  responsive: PropTypes.bool,
  /**
   * Specifies the theme color. Valid values are 'blue', 'green', 'grey' (recomended), 'multi', etc.
   *
   * Note: Not compatible with theme prop
   *
   * @example themeColor={ChartThemeColor.blue}
   */
  themeColor: PropTypes.string,
  /**
   * Specifies the theme variant. Valid values are 'dark' or 'light'
   *
   * Note: Not compatible with theme prop
   *
   * @example themeVariant={ChartThemeVariant.light}
   */
  themeVariant: PropTypes.string,
  /**
   * Specifies the width of the svg viewBox of the chart container. This value should be given as a
   * number of pixels.
   *
   * Because Victory renders responsive containers, the width and height props do not determine the width and
   * height of the chart in number of pixels, but instead define an aspect ratio for the chart. The exact number of
   * pixels will depend on the size of the container the chart is rendered into.
   */
  width: PropTypes.number
};

const ChartLegend = ({
  dataComponent = <ChartPoint />,
  responsive = true,
  themeColor,
  themeVariant,

  // destructure last
  theme = getTheme(themeColor, themeVariant),
  containerComponent = <ChartContainer responsive={responsive} theme={theme} />,
  ...rest
}) => <VictoryLegend containerComponent={containerComponent} dataComponent={dataComponent} theme={theme} {...rest} />;

// Note: VictoryLegend.role must be hoisted
hoistNonReactStatics(ChartLegend, VictoryLegend);
ChartLegend.propTypes = propTypes;

export default ChartLegend;
