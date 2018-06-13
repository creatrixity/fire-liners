import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { TransitionGroup } from "react-transition-group";
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';
import { ThemeProvider, Flex, Banner } from 'pcln-design-system'
import Header from '../../components/Header';
import FadeTransition from "../../components/Transitions/fade";
import AppLoadingScreen from '../../screens/Loading';

import { getAppState } from '../../containers/App/reducer';
import { fetchAuthorsRequest } from '../../screens/Home/actions';
import { deleteNotification } from './actions';

const LoadableHomeScreen = Loadable({
    loader: () => import('../../screens/Home'),
    loading: AppLoadingScreen,
    delay: 200
})

const LoadableAuthorScreen = Loadable({
    loader: () => import('../../screens/Author'),
    loading: AppLoadingScreen,
    delay: 200
})

const LoadableAddLineScreen = Loadable({
    loader: () => import('../../screens/AddLine'),
    loading: AppLoadingScreen,
    delay: 200
})

class App extends React.Component {
    componentDidMount() {
        this.props.fetchAuthors()
    }

    render() {
        return (
            <TransitionGroup>
                <FadeTransition>
                    <ThemeProvider>
                        <Flex flexDirection="column" className="App" style={{ minHeight: '100vh' }}>
                            <Header {...this.props}/>

                            {this.props.notifications.length > 0 && (
                                <Flex>
                                    <Flex
                                        width={[ 0.4, 0.4, 0.27 ]}
                                        style={{
                                            position: 'fixed',
                                            top: 100,
                                            right: 0
                                        }}
                                        flexDirection="column" p={3}>
                                    {this.props.notifications.map((notification, i) => (
                                        <Banner
                                            key={i}
                                            bg={notification.type === 'info' ? 'darkBlue': 'black'}
                                            py={2}
                                            px={3}
                                            iconName="circleInfo"
                                            iconSize={20}
                                            onClose={() => {
                                                this.props.deleteNotification(notification)
                                            }}
                                            showIcon={true}
                                            mb={3}
                                            style={{
                                                color: 'white',
                                                borderRadius: '3px',
                                                fontSize: '11px'
                                            }}
                                            textAlign="center"
                                            text={notification.message}
                                            />
                                        ))}
                                        </Flex>
                                </Flex>
                            )}


                            <Route exact path="/" component={LoadableHomeScreen} />
                            <Route path="/add" component={LoadableAddLineScreen} />
                            <Route path="/authors/:slug" component={LoadableAuthorScreen} />
                        </Flex>
                    </ThemeProvider>
                </FadeTransition>
            </TransitionGroup>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notifications: getAppState(state).get('notifications').toJS()
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAuthors: data => dispatch(fetchAuthorsRequest(data)),
        deleteNotification: data => dispatch(deleteNotification(data))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
