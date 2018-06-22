import React, {Component} from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { SyncLoader } from 'react-spinners';
import { debounce } from 'lodash';

import {
    Box,
    Flex,
    Heading
} from 'pcln-design-system';
import { fetchLinersRequest, fetchAuthorsRequest } from './actions';
import Feed from '../../components/Feed';
import { getAppState } from '../../containers/App/reducer';
import { getLinersTotal } from '../../services/DataService';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            linersSetIndex: 0,
            hasMoreItems: true,
            linersTotal: 0,
            isLoadingLiners: true,
            activeAuthorCard: null
        }

        this.setActiveAuthorCard = debounce(this.setActiveAuthorCard, 200)
    }

    componentDidMount() {
        if (this.props.liners.length > 0) return;

        let linersTotal = getLinersTotal();

        this.setState({
            linersTotal
        })

        if (this.props.liners.length >= linersTotal) return;

        this.props.fetchLiners({
            linersSetIndex: this.state.linersSetIndex
        })

        setTimeout(() => {
            this.setState({
                isLoadingLiners: false
            })
        }, 3500)
    }

    render() {
        return (
            <Flex justify="center" alignItems="center">

              <Box width={[ 0.9, 0.8, 0.5 ]} p={3}>
                  <Heading fontSize={3} mb={3} bold>Recent Quotes</Heading>

                  <InfiniteScroll
                    dataLength={this.props.liners.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMoreItems}
                    style={{
                        height: 'inherit !important',
                        'overflow': 'hidden !important'
                    }}
                    loader={
                        <Flex justify="center" alignItems="center">
                            <SyncLoader
                              color={'#a1a1a1'}
                              size={10}
                              loading={true}
                            />
                        </Flex>
                    }
                    endMessage={
                      <p style={{textAlign: 'center'}}>
                        <b>Homie, you done seen all the liners we got.</b>
                      </p>
                    }
                  >
                    <Feed
                        liners={this.props.liners}
                        linersSetIndex={this.state.linersSetIndex}
                        authors={this.props.authors}
                        isLoading={this.state.isLoadingLiners}
                        activeAuthorCard={this.state.activeAuthorCard}
                        onAuthorMouseOver={index => this.setActiveAuthorCard(index)}
                        onAuthorMouseLeave={index => this.setActiveAuthorCard(null)}
                    />
                  </InfiniteScroll>

                  {!this.props.liners.length && <div>Sorry, No Liners are available</div>}

               </Box>
            </Flex>
        )
    }

    setActiveAuthorCard = index => this.setState({
        activeAuthorCard: index
    })

    fetchMoreData = () => {
      // a fake async api call like which sends
      // 20 more records in 1.5 secs
      this.setState({
          isLoadingLiners: true
      })

      setTimeout(() => {

          if (this.state.hasMoreItems) {
              this.setState({
                linersSetIndex: this.state.linersSetIndex + 1,
                hasMoreItems: this.props.liners.length < this.state.linersTotal,
              });

              this.props.fetchLiners({
                  linersSetIndex: this.state.linersSetIndex
              })

              this.setState({
                  isLoadingLiners: false
              })
          }
      }, 1500);
    };
}

const mapStateToProps = (state) => {
    return {
        liners: getAppState(state).get('liners').toJS(),
        authors: getAppState(state).get('authors')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLiners: data => dispatch(fetchLinersRequest(data)),
        fetchAuthors: data => dispatch(fetchAuthorsRequest(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
