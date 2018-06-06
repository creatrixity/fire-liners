import React, {Component} from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Feed from '../../components/Feed';
import {
    Box,
    Flex,
    Text
} from 'pcln-design-system';
import { fetchAuthorLinersRequest, fetchAuthorsRequest } from './actions';
import { getAppState } from '../../containers/App/reducer';
import { getAuthorLiners } from '../../services/DataService';

class Author extends Component {
    constructor(props) {
        super(props)
        this.state = {
            linersSetIndex: 0,
            hasMoreItems: true,
            linersTotal: 0
        }
    }

    componentDidMount() {

        this.setState({
            linersTotal: getAuthorLiners(this.getAuthor()).length
        })

        this.props.fetchAuthorLiners({
            linersSetIndex: this.state.linersSetIndex,
            author: this.getAuthor()
        })
    }

    render() {
        return (
            <Flex justify="center" alignItems="center">

              <Box width={[ 0.9, 0.8, 0.6 ]} p={3}>
                  <Text fontSize={3} mb={3} bold>All Quotes By {this.getAuthor().name}</Text>

                  <InfiniteScroll
                    dataLength={this.props.liners.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMoreItems}
                    loader={<h4 style={{textAlign: 'center'}}>Loading...</h4>}
                    endMessage={
                      <p style={{textAlign: 'center'}}>
                        <b>Homie, you done seen all the liners we got.</b>
                      </p>
                    }
                  >

                  <Feed
                      liners={this.getAuthorLiners()}
                      linersSetIndex={this.state.linersSetIndex}
                      authors={this.props.authors}
                  />
                  </InfiniteScroll>

                  {!this.props.liners.length && <div>Sorry, No Liners are available</div>}

               </Box>
            </Flex>
        )
    }

    fetchMoreData = () => {
      // a fake async api call like which sends
      // 20 more records in 1.5 secs
      setTimeout(() => {

          this.setState({
            linersSetIndex: this.state.linersSetIndex + 1,
            hasMoreItems: this.props.liners.length < this.state.linersTotal
          });

          if (this.state.hasMoreItems) {
              this.props.fetchAuthorLiners({
                  linersSetIndex: this.state.linersSetIndex,
                  author: this.getAuthor()
              })
          }
      }, 1500);
    };

    getAuthorLiners() {
        let author = this.getAuthor()
        return this.props.liners.filter(liner => liner.author === author.name)
    }

    getAuthor() {
        return this.props.authors.filter(author => author.slug === this.props.match.params.slug)[0]
    }
}

const mapStateToProps = (state) => {
    return {
        liners: getAppState(state).get('liners').toJS(),
        authors: getAppState(state).get('authors')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAuthorLiners: data => dispatch(fetchAuthorLinersRequest(data)),
        fetchAuthors: data => dispatch(fetchAuthorsRequest(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Author);
