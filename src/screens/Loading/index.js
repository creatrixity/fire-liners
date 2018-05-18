import React from 'react';
import { Flex, Text } from 'pcln-design-system'

const AppLoadingScreen = props => (
    <Flex style={{ height: "100vh", position: "fixed", top: 0, bottom: 0, width: "100%" }} bg="lightYellow" flexDirection="column" align="center" justify="center">
        <Text bold>Whipping up Awesomeness...</Text>
    </Flex>
)

export default AppLoadingScreen
