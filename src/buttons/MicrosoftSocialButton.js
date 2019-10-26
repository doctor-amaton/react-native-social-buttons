import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  microsoftStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0078d7',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 220,
    borderRadius: 5,
    margin: 5,
  },
  imageIconStyle: {
    padding: 10,
    marginLeft: 15,
    height: 25,
    width: 25,
    resizeMode: "stretch"
  },
  textStyle: {
    color: "#ffffff",
    marginLeft: 15,
    marginRight: 20
  },
});

export class MicrosoftSocialButton extends React.Component {

  render() {
    return (
      <TouchableOpacity
        style={{...styles.microsoftStyle, ...this.props.style}}
        onPress={this.props.onPress}
      >
        <Image
          source={require("../images/microsoft.png")}
          style={styles.imageIconStyle}
        />
        <Text style={styles.textStyle}>{this.props.buttonText ? this.props.buttonText : "Sign in with Microsoft"}</Text>
      </TouchableOpacity>
    );
  }
}
