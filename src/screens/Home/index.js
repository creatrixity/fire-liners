import React, {Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
    Box,
    Flex,
    Link,
    Text
} from 'pcln-design-system';
import { fetchLinersRequest } from './actions';

const Circle = styled(Box)`
    border-radius: 100%;
    width: 60px;
    height: 60px;
    display: inline-block;
`;

class Home extends Component {
    componentDidMount() {
        this.props.fetchLiners()
    }

    render() {
        return (
            <Flex justify="center" alignItems="center">

              <Box width={[ 0.9, 0.8, 0.6 ]} p={3}>
                  <Text fontSize={3} mb={3} bold>Recent Quotes</Text>
                  {
                      this.props.liners.map(liner => (
                          <Box key={liner.id}>
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
                          </Box>
                      ))
                  }

               </Box>
            </Flex>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        liners: state.app.get('liners')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLiners: data => dispatch(fetchLinersRequest(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
