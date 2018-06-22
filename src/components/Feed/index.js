import React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Image,
    Flex,
    Link,
    OutlineButton,
    Text
} from 'pcln-design-system';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

import AuthorCard from '../../components/AuthorCard';
import AuthorCardArrow from '../../components/AuthorCard/AuthorCardArrow';

const Circle = styled(Box)`
    border-radius: 50px;
    width: 45px;
    height: 45px;
`;

const getLinerAuthor = (liner, authors) => authors.filter(author => author.name === liner.author)[0]

const FeedItemAvatar = (props) => (
    <Flex style={{ position: "relative" }} width={[0.5, 0.7, 0.3]}>
        <Circle
            bg="#d5d5d5"
            mr={5}
            flexDirection="column"
            justify="center"
            onMouseOver={e => props.onAuthorMouseOver(props.index)}
            onMouseLeave={e => props.onAuthorMouseLeave()}
            >
          {!props.isLoading && (props.liners.length >= props.index) ? (
              getLinerAuthor(props.liner, props.authors).photo &&
                <Image src={require(`../../assets/img/${getLinerAuthor(props.liner, props.authors).photo}`)} style={{ borderRadius: '50%', width: '60px' }}/>
            ) : null
          }
        </Circle>

        <AuthorCard
            style={{
                opacity: props.activeAuthorCard === props.index ? 1 : 0,
                transform: props.activeAuthorCard === props.index ? 'translateY(0)' : 'translateY(30px)'
            }}
            boxShadowSize="lg"
            onMouseOver={e => props.onAuthorMouseOver(props.index)}
            onMouseLeave={e => props.onAuthorMouseLeave()}
            px={3}
            py={2}
            bg="white">
            <AuthorCardArrow/>
            <Flex mb={2}>
                <Flex style={{ flex: 4 }} flexDirection="column">
                    <Text bold fontSize={0}>{ props.liner.author }</Text>
                    <Text fontSize={0} color="gray">{ getLinerAuthor(props.liner, props.authors).government_name }</Text>
                </Flex>
                <Flex flexDirection="column">
                    <Text color="darkGray" fontSize={4}>32</Text>
                </Flex>
            </Flex>
            <Flex flexDirection="column" align="center">
                <OutlineButton size="small" py={0} px={2} style={{ height: '35px' }}>
                    <Text fontSize={0}>All 32 quotes</Text>
                </OutlineButton>
            </Flex>
        </AuthorCard>
    </Flex>
)

const FeedItemContent = (props) => (
    <Flex flexDirection="column" width={[0.5, 0.7, 0.7]}>
        <Text mb={3} width={1} italic fontSize={[1, 2, 3]}>
            {!props.isLoading && ((props.liners.length) >= props.index) ? props.liner.body : <Skeleton count={3}/>}
        </Text>
        {
            !props.isLoading && (props.liners.length) >= props.index ? (
                <Link href={'/authors/' + getLinerAuthor(props.liner, props.authors).slug}>
                    <Text fontSize={1} mb={3} color="gray" align="right" bold>{props.liner.author}</Text>
                </Link>
            ) : (
                <Flex flexDirection="row-reverse">
                    <Skeleton width={100}/>
                </Flex>
            )
        }
    </Flex>
)

const FeedItem = (props) => (
<Box>
    <Flex
      bg={props.index === (props.linersSetIndex * 5) ? 'lightBlue' : "lightGray"}
      style={{borderRadius: '4px'}}
      p={3}
      mb={3}>
        <FeedItemAvatar {...props}/>
        <FeedItemContent {...props} />
    </Flex>

</Box>
)

export const Feed = (props) => {
    return props.liners.length > 0 ?
            props
            .liners
            .sort()
            .map((liner, index) => <FeedItem key={index} liner={liner} index={index} {...props} />) :
            <div>Nothing found</div>
}

Feed.propTypes = {
    liners: PropTypes.array,
    linersSetIndex: PropTypes.number,
    authors: PropTypes.array,
    isLoading: PropTypes.bool,
    onAuthorMouseOver: PropTypes.func,
    onAuthorMouseLeave: PropTypes.func
}

Feed.defaultProps = {
    liners: [],
    linersSetIndex: 0,
    authors: [],
    isLoading: false,
    onAuthorMouseOver: function () {},
    onAuthorMouseLeave: function () {},
}

export default Feed;
