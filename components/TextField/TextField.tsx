import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { FieldError } from 'react-hook-form';

interface TextFieldProps {
  label: string;
  error?: FieldError;
  name: string;
  setTextValue: (name: string, text: string, boolean: boolean) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  error,
  setTextValue,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTextValue(name, text, true)}
      />
      {error && <Text>This is required.</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
