import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

const ProgressBar = ({ step, totalSteps }) => {
  const getProgress = () => {
    return step / totalSteps;
  };

  return (
    <View style={styles.container}>
      <Progress.Bar progress={getProgress()} width={280} color="#007EB1" unfilledColor="#FFFFFF" borderColor="#5CA6CE" borderWidth={1} height={10}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
    paddingLeft:18,
  },
});

export default ProgressBar;
