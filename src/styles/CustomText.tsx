import React from 'react';
import { Text, StyleSheet, TextProps, TextStyle } from 'react-native';
import * as Font from 'expo-font';

interface CustomTextProps extends TextProps {
  style?: TextStyle;
  children?: React.ReactNode;
}

interface CustomTextState {
  fontsLoaded: boolean;
}

export default class CustomText extends React.Component<CustomTextProps, CustomTextState> {
  constructor(props: CustomTextProps) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      NotoSansKR: require('../../assets/font/NotoSansKR-Regular.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { style, children, ...restProps } = this.props;

    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <Text style={[styles.text, style]} {...restProps}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'NotoSansKR',
  },
});
