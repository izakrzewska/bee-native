import React from 'react';
import { AddApiaryForm, Layout } from '../components';
import { NewApiaryScreenProps } from '../navigation/types';

export const NewApiaryScreen: React.FC<NewApiaryScreenProps> = () => {
  return (
    <Layout>
      <AddApiaryForm />
    </Layout>
  );
};
