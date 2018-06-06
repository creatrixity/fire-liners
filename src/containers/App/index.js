import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { TransitionGroup } from "react-transition-group";
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';
import { ThemeProvider, Flex } from 'pcln-design-system'
import Header from '../../components/Header';
import FadeTransition from "../../components/Transitions/fade";
import AppLoadingScreen from '../../screens/Loading';

import { fetchAuthorsRequest } from '../../screens/Home/actions';

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
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAuthors: data => dispatch(fetchAuthorsRequest(data))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
