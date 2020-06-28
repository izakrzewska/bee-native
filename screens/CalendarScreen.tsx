import React from 'react';
import { Layout, Text } from '../components';
import { CalendarScreenProps } from '../navigation/types';

export const CalendarScreen: React.FC<CalendarScreenProps> = () => {
  return (
    <Layout>
      <Text>Kalendarz</Text>
    </Layout>
  );
};
