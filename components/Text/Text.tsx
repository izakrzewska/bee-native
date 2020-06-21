import React from 'react';
import { Text as NativeText } from 'react-native';

type fontType = 'regular' | 'medium' | 'bold';

interface TextProps {
  fontFamily?: fontType;
  fontSize?: number;
  style?: Object;
}

const getFontFamily = (fontFamily: fontType) => {
  switch (fontFamily) {
    case 'regular': {
      return 'montserrat-regular';
    }
    case 'medium': {
      return 'montserrat-medium';
    }
    case 'bold': {
      return 'montserrat-semibold';
    }
  }
};

export const Text: React.FC<TextProps> = ({
  fontFamily = 'regular',
  fontSize = 16,
  style,
  children,
}) => {
  return (
    <NativeText
      style={{ fontSize, fontFamily: getFontFamily(fontFamily), ...style }}
    >
      {children}
    </NativeText>
  );
};
