import React from 'react';
import styled from 'styled-components'
import {
    Box,
    BlockLink,
    Flex,
    Link,
    Text,
    ThemeProvider
} from 'pcln-design-system'
import Header from '../../components/Header';

const Circle = styled(Box)`
    border-radius: 100%;
    width: 60px;
    height: 60px;
    display: inline-block;
`;

const liners = [
    {
        id: 1,
        author: "Immortal Technique",
        government_name: "Felipe Andres Coronel",
        body: "The purpose of life is a life with a purpose. Rather die for what I believe in than live a life that is worthless.",
        photo: "immortal-technique.jpg"
    },
    {
        id: 2,
        author: "Eminem",
        government_name: "Marshall Mathers",
        body: "I don't rap for dead presidents. I'd rather see the president dead.",
        photo: "eminem.jpg"
    },
    {
        id: 3,
        author: "Andre 3000",
        body: "Hell just fell 3000 more degrees cooler but y'all can't measure my worth; and before you do, you'll need a ruler made by all the Greek gods.",
        photo: "andre-3k.jpg"
    }
]

class App extends React.Component {
  render() {
    return (
        <ThemeProvider>
            <div className="App">
              <Header/>

              <Flex justify="center" alignItems="center">

                <Box width={[ 0.9, 0.8, 0.6 ]} p={3}>
                    <Text fontSize={3} mb={3} bold>Recent Quotes</Text>
                    {
                        liners.map(liner => (
                            <BlockLink href={'/liners/' + liner.id}>
                                <Flex bg="lightGray" style={{borderRadius: '4px'}} p={3} mb={3}>
                                    <Flex width={[0.5, 0.7, 0.2]}>
                                        <Circle bg="gray" mr={5}></Circle>
                                    </Flex>
                                    <Flex flexDirection="column" width={[0.5, 0.7, 0.7]}>
                                        <Text mb={3} width={1} italic fontSize={[1, 2, 3]}>
                                            {liner.body}
                                        </Text>
                                        <Link href={'/authors/' + liner.author}>
                                            <Text fontSize={1} mb={3} color="gray" align="right" bold>{liner.author}</Text>
                                        </Link>
                                    </Flex>

                                </Flex>
                            </BlockLink>
                        ))
                    }

                 </Box>
              </Flex>
            </div>
        </ThemeProvider>
    );
  }
}

export default App;
