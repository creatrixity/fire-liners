import React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Image,
    Flex,
    Link,
    Text
} from 'pcln-design-system';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

const Circle = styled(Flex)`
    border-radius: 50px;
    width: 45px;
    height: 45px;
`;

const getLinerAuthor = (liner, authors) => authors.filter(author => author.name === liner.author)[0]

export const Feed = (props) => {
    return props.liners.length > 0 ?
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
                                <Circle bg="#d5d5d5" mr={5} flexDirection="column" justify="center" align="center">
                                  {!props.isLoading && (props.liners.length >= index) ? (
                                      getLinerAuthor(liner, props.authors).photo &&
                                        <Image src={require(`../../assets/img/${getLinerAuthor(liner, props.authors).photo}`)} style={{ borderRadius: '50%', width: '60px' }}/>
                                    ) : null
                                  }
                                </Circle>
                            </Flex>
                            <Flex flexDirection="column" width={[0.5, 0.7, 0.7]}>
                                <Text mb={3} width={1} italic fontSize={[1, 2, 3]}>
                                    {!props.isLoading && ((props.liners.length) >= index) ? liner.body : <Skeleton count={3}/>}
                                </Text>
                                {
                                    !props.isLoading && (props.liners.length) >= index ? (
                                        <Link href={'/authors/' + getLinerAuthor(liner, props.authors).slug}>
                                            <Text fontSize={1} mb={3} color="gray" align="right" bold>{liner.author}</Text>
                                        </Link>
                                    ) : (
                                        <Flex flexDirection="row-reverse">
                                            <Skeleton width={100}/>
                                        </Flex>
                                    )
                                }
                            </Flex>

                        </Flex>

                    </Box>
                )
            ) :
            (
                <div>Nothing found</div>
            )
}

Feed.propTypes = {
    liners: PropTypes.array,
    linersSetIndex: PropTypes.number,
    authors: PropTypes.array,
    isLoading: PropTypes.bool
}

Feed.defaultProps = {
    liners: [],
    linersSetIndex: 0,
    authors: [],
    isLoading: false
}

export default Feed;
