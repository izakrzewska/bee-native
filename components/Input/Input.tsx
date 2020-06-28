import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Text } from '../Text/Text';

interface InputProps {
  placeholder: string;
  label: string;
  handleChange: any;
  formKey: string;
  textInputProps?: Object;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  handleChange,
  formKey,
  textInputProps,
}) => {
  return (
    <View>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.formFieldText}
        onChange={(event) => handleChange(formKey, event.nativeEvent.text)}
        {...textInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formFieldText: {
    fontSize: 20,
    borderRadius: 15,
    borderWidth: 1,
    padding: 12,
  },
  labelText: {
    fontSize: 20,
    marginBottom: 12,
    paddingLeft: 10,
    paddingTop: 10,
  },
});
