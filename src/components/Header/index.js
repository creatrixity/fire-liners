import React from 'react';
import {
    Button,
    Icon,
    IconButton,
    Flex,
    Link,
    Text
} from 'pcln-design-system';

const MenuButton = props => (
    <Flex width={1 / 3} align="center">
        <IconButton name="menu" />
    </Flex>
);

const Brand = props => (
    <Flex width={1 / 3} justify="center" align="center">
        <Link href="http://a.t">
            <Text color="black">FireLiners</Text>
        </Link>
    </Flex>
);

const AddLineButton = props => (
    <Flex width={1 / 3} justify="right">
        <Button radius={15} size="small">
            <Flex>
                <Icon name="plus"/>
                <Text mt={1}>New</Text>
            </Flex>
        </Button>
    </Flex>
);

const Header = props => (
    <Flex className="App-header" mb={3} justify="center" bg="yellow">
        <Flex width={[ 0.9, 0.8, 0.6 ]}>
            <MenuButton />
            <Brand/>
            <AddLineButton/>
        </Flex>
    </Flex>
)

export default Header;
