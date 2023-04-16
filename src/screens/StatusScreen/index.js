import React from 'react';
import {useSelector} from 'react-redux';
import {ListItem} from '../../components/ListItem';
import {RecentUpdate} from '../../config/fakeData';
import {ViewedUpdate} from '../../config/fakeData';
import Feather from 'react-native-vector-icons/Feather';
import {Text, Box, ScrollView, HStack} from 'native-base';

const StatusScreen = () => {
  const CurentUserData = useSelector(
    state => state.userDataReducer.CurentUserData,
  );

  return (
    <Box safeArea h="100%" bg="muted.100">
      <ScrollView>
        <HStack justifyContent={'space-between'} p={4}>
          <Text fontSize={25} fontWeight={'bold'}>
            Status
          </Text>
          <Feather name="search" size={25} />
        </HStack>

        <ListItem
          title={CurentUserData.firstName}
          belowTitle="Hey there!"
          fromHeader={true}
          fromStatusScreen={true}
          color="tertiary.400"
          image={CurentUserData.image}
        />

        <Box pt={4}>
          <Text pt={4} pl={5} color="grey">
            RECENT UPDATES
          </Text>
        </Box>

        {RecentUpdate.map((data, index) => {
          return (
            <ListItem
              key={index}
              title={data.title}
              belowTitle={data.belowTitle}
              image={data.imagedata}
            />
          );
        })}

        <Box pt={4}>
          <Text pt={4} pl={5} color="grey">
            VIEWED UPDATES
          </Text>
        </Box>

        {ViewedUpdate.map((data, index) => {
          return (
            <ListItem
              key={index}
              title={data.title}
              belowTitle={data.belowTitle}
              image={data.imagedata}
            />
          );
        })}
      </ScrollView>
    </Box>
  );
};
export default StatusScreen;
