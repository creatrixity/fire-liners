import React from 'react';
import { Flex, Text } from 'pcln-design-system'
import { SyncLoader } from 'react-spinners';

const AppLoadingScreen = props => (
    <Flex style={{ height: "100vh", position: "fixed", top: 0, bottom: 0, width: "100%" }} bg="lightYellow" flexDirection="column" align="center" justify="center">
        <SyncLoader
          color={'#a1a1a1'}
          loading={true}
        />

        <Text mt={3} bold>Whipping up Awesomeness...</Text>
    </Flex>
)

export default AppLoadingScreen
