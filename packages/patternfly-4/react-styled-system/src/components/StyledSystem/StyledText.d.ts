import { FunctionComponent, ReactNode } from 'react';
import {
  SpaceProps,
  ColorProps,
  DisplayProps,
  MaxWidthProps,
  MinWidthProps,
  WidthProps,
  HeightProps,
  MaxHeightProps,
  MinHeightProps,
  VerticalAlignProps,
  FlexProps,
  OrderProps,
  FlexBasisProps,
  AlignSelfProps,
  FontSizeProps,
  BordersProps,
  BorderColorProps,
  BorderRadiusProps,
  BoxShadowProps,
  OpacityProps,
  OverflowProps,
  RatioProps,
  BackgroundProps,
  BackgroundImageProps,
  BackgroundSizeProps,
  BackgroundPositionProps,
  BackgroundRepeatProps,
  PositionProps,
  ZIndexProps,
  LeftProps,
  TopProps,
  RightProps,
  BottomProps,
  FontFamilyProps,
  FontWeightProps,
  LineHeightProps,
  LetterSpacingProps,
  TextAlignProps
} from 'styled-system';

export interface StyledTextProps extends
  SpaceProps,
  ColorProps,
  DisplayProps,
  MaxWidthProps,
  MinWidthProps,
  WidthProps,
  HeightProps,
  MaxHeightProps,
  MinHeightProps,
  VerticalAlignProps,
  FlexProps,
  OrderProps,
  FlexBasisProps,
  AlignSelfProps,
  FontSizeProps,
  BordersProps,
  BorderColorProps,
  BorderRadiusProps,
  BoxShadowProps,
  OpacityProps,
  OverflowProps,
  RatioProps,
  BackgroundProps,
  BackgroundImageProps,
  BackgroundSizeProps,
  BackgroundPositionProps,
  BackgroundRepeatProps,
  PositionProps,
  ZIndexProps,
  LeftProps,
  TopProps,
  RightProps,
  BottomProps,
  FontFamilyProps,
  FontWeightProps,
  LineHeightProps,
  LetterSpacingProps,
  TextAlignProps {
  className?: string,
  children?: ReactNode,
  component?: string
}

declare const StyledText: FunctionComponent<StyledTextProps>;

export default StyledText;
