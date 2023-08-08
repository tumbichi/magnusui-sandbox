import React from 'react';
import {Box, Icon, Text} from 'react-native-magnus';

const getColor = (status?: 'busy' | 'free') => {
  switch (status) {
    case 'busy': {
      return 'red700';
    }
    case 'free': {
      return 'green700';
    }
    default: {
      return 'black';
    }
  }
};

interface SlotItemProps {
  status?: 'busy' | 'free';
  text: string;
}

const SlotItem = ({status, text}: SlotItemProps) => {
  return (
    <Box row mt="lg">
      <Icon
        name="flight-class"
        fontFamily="MaterialIcons"
        color={getColor(status)}
        fontSize="6xl"
      />
      <Text ml="lg">{text}</Text>
    </Box>
  );
};

export default SlotItem;
