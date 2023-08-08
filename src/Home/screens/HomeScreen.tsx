import React from 'react';
import {FlatList} from 'react-native';
import {Box, Icon, Image, Text} from 'react-native-magnus';
import SlotItem from '../components/SlotItem';

const HomeScreen = () => {
  const slots = ['Lugar 1', 'Lugar 2', 'Lugar 3'];
  return (
    <Box mx="xl" mt="md">
      <Image
        borderColor="gray300"
        borderWidth={1}
        h={140}
        resizeMode="cover"
        rounded="lg"
        source={{
          uri: 'https://i.stack.imgur.com/zvx9E.png',
        }}
      />
      <Text
        fontSize="lg"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing={2}
        color="blue400"
        mt="lg">
        Rosario - Buenos Aires
      </Text>
      <Text fontWeight="bold" fontSize="4xl" mt="md">
        Viaje #32444
      </Text>
      <Box mt="md" row>
        <Text fontWeight="bold" mr="sm">
          4.6
        </Text>
        <Text color="gray500">(1.139 reviews)</Text>
      </Box>
      <Text mt="md" color="gray700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
        veritatis necessitatibus sunt quaerat nulla vel dicta voluptate cumque
        facere quos, ullam numquam incidunt sint, quidem, sit quo. Expedita,
        quidem cumque.
      </Text>
      <Box mt="md">
        <FlatList
          data={slots}
          renderItem={({item, index}) => (
            <SlotItem
              status={index === 0 ? 'busy' : index === 1 ? 'free' : undefined}
              text={item}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default HomeScreen;
