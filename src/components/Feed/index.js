import React from 'react';
import {
    Box,
    Image,
    Flex,
    Link,
    Text
} from 'pcln-design-system';
import styled from 'styled-components';

const Circle = styled(Flex)`
    border-radius: 50px;
    width: 45px;
    height: 45px;
`;

const getLinerAuthor = (liner, authors) => authors.filter(author => author.name === liner.author)[0]

export const Feed = (props) => {
    return props.liners.length > 0 &&
            props
            .liners
            .sort()
            .map((liner, index) => (
                    <Box key={index}>
                        <Flex
                          bg={index === (props.linersSetIndex * 5) ? 'lightBlue' : "lightGray"}
                          style={{borderRadius: '4px'}}
                          p={3}
                          mb={3}>
                            <Flex width={[0.5, 0.7, 0.2]}>
                                <Circle bg={"lightGray"} mr={5} flexDirection="column" justify="center" align="center">
                                  {getLinerAuthor(liner, props.authors).photo &&
                                  <Image src={require(`../../assets/img/${getLinerAuthor(liner, props.authors).photo}`)} style={{ borderRadius: '50%', width: '60px' }}/>
                                  }
                                </Circle>
                            </Flex>
                            <Flex flexDirection="column" width={[0.5, 0.7, 0.7]}>
                                <Text mb={3} width={1} italic fontSize={[1, 2, 3]}>
                                    {liner.body}
                                </Text>
                                <Link href={'/authors/' + getLinerAuthor(liner, props.authors).slug}>
                                    <Text fontSize={1} mb={3} color="gray" align="right" bold>{liner.author}</Text>
                                </Link>
                            </Flex>

                        </Flex>

                    </Box>
                )
            )
}

export default Feed;
