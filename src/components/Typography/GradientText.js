import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

const GradientText = (props) => {
    return (
      <MaskedView maskElement={<Text {...props} />}>
        <LinearGradient
          colors={["rgba(232, 123, 248, 1)", "rgba(132, 86, 236, 1)"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Text {...props} style={[props.style, { opacity: 0 }]} />
        </LinearGradient>
      </MaskedView>
    );
  }

export default GradientText