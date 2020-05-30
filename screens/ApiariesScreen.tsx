import React from 'react';
import { useSelector } from 'react-redux';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Text } from 'native-base';
import { RootState } from '../store/types';

const ApiariesScreen = () => {
  const apiaries = useSelector((state: RootState) => state.apiaries.apiaries);

  return (
    <Container>
      <Content style={{ margin: 20 }}>
        {apiaries.map((apiary) => (
          <Card key={apiary.id}>
            <CardItem header>
              <Text>{apiary.name}</Text>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require('../assets/apiary.jpg')}
                style={{ height: 200 }}
              />
            </CardItem>
            <CardItem footer>
              <Text>{apiary.beehives.length} uli</Text>
            </CardItem>
          </Card>
        ))}
      </Content>
    </Container>
  );
};

export default ApiariesScreen;
