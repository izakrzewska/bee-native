import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { FieldError } from 'react-hook-form';
import { useForm } from 'react-hook-form';

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
  const { setValue } = useForm<FormData>();
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput onChangeText={(text) => setTextValue(name, text, true)} />
      {error && <Text>This is required.</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
