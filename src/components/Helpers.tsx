import {
  Dimensions,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const WINDOW = Dimensions.get('window');

export const PATCHVALUE = (
  value: number | string | undefined,
  maxValue: number | false = false,
) => {
  if (typeof value === 'number' && value < maxValue) {
    return RFValue(value);
  }
  if (typeof value === 'number' && maxValue === false) {
    return RFValue(value);
  }
  if (typeof value === 'string' && value.indexOf('!') >= 0) {
    return parseFloat(value.replace('!', ''));
  }
  if (typeof value === 'string' && value.indexOf('%') >= 0) {
    return value;
  }
  return value as number;
};

export const AUTO_PATCH_STYLE = (
  style:
    | ViewStyle
    | TextStyle
    | StyleProp<ViewStyle>
    | StyleProp<TextStyle>
    | ImageStyle
    | StyleProp<ImageStyle>,
) => {
  if (!style) {
    return undefined;
  }
  const patchedStyle: ViewStyle = JSON.parse(
    JSON.stringify(StyleSheet.flatten(style)),
  );
  if (patchedStyle) {
    if (patchedStyle.height) {
      patchedStyle.height = PATCHVALUE(patchedStyle.height, WINDOW.height);
    }
    if (patchedStyle.minHeight) {
      patchedStyle.minHeight = PATCHVALUE(
        patchedStyle.minHeight,
        WINDOW.height,
      );
    }
    if (patchedStyle.width) {
      patchedStyle.width = PATCHVALUE(patchedStyle.width, WINDOW.width);
    }
    if (patchedStyle.minWidth) {
      patchedStyle.minWidth = PATCHVALUE(patchedStyle.minWidth, WINDOW.width);
    }
    if (patchedStyle.borderRadius) {
      patchedStyle.borderRadius = PATCHVALUE(
        patchedStyle.borderRadius,
      ) as number;
      patchedStyle.overflow = 'hidden';
    }
    if (patchedStyle.margin) {
      patchedStyle.margin = PATCHVALUE(patchedStyle.margin);
    }
    if (patchedStyle.marginTop) {
      patchedStyle.marginTop = PATCHVALUE(patchedStyle.marginTop);
    }
    if (patchedStyle.marginBottom) {
      patchedStyle.marginBottom = PATCHVALUE(patchedStyle.marginBottom);
    }
    if (patchedStyle.marginLeft) {
      patchedStyle.marginLeft = PATCHVALUE(patchedStyle.marginLeft);
    }
    if (patchedStyle.marginRight) {
      patchedStyle.marginRight = PATCHVALUE(patchedStyle.marginRight);
    }
    if (patchedStyle.marginHorizontal) {
      patchedStyle.marginHorizontal = PATCHVALUE(patchedStyle.marginHorizontal);
    }
    if (patchedStyle.marginVertical) {
      patchedStyle.marginVertical = PATCHVALUE(patchedStyle.marginVertical);
    }
    if (patchedStyle.padding) {
      patchedStyle.padding = PATCHVALUE(patchedStyle.padding);
    }
    if (patchedStyle.paddingTop) {
      patchedStyle.paddingTop = PATCHVALUE(patchedStyle.paddingTop);
    }
    if (patchedStyle.paddingBottom) {
      patchedStyle.paddingBottom = PATCHVALUE(patchedStyle.paddingBottom);
    }
    if (patchedStyle.paddingLeft) {
      patchedStyle.paddingLeft = PATCHVALUE(patchedStyle.paddingLeft);
    }
    if (patchedStyle.paddingRight) {
      patchedStyle.paddingRight = PATCHVALUE(patchedStyle.paddingRight);
    }
    if (patchedStyle.paddingHorizontal) {
      patchedStyle.paddingHorizontal = PATCHVALUE(
        patchedStyle.paddingHorizontal,
      );
    }
    if (patchedStyle.paddingVertical) {
      patchedStyle.paddingVertical = PATCHVALUE(patchedStyle.paddingVertical);
    }
    if (patchedStyle.bottom) {
      patchedStyle.bottom = PATCHVALUE(patchedStyle.bottom);
    }
    if (patchedStyle.left) {
      patchedStyle.left = PATCHVALUE(patchedStyle.left);
    }
    if (patchedStyle.right) {
      patchedStyle.right = PATCHVALUE(patchedStyle.right);
    }
    if (patchedStyle.top) {
      patchedStyle.top = PATCHVALUE(patchedStyle.top);
    }
  }
  return patchedStyle;
};
