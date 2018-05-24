import React from 'react';
import { TransitionGroup } from "react-transition-group";
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';
import { ThemeProvider, Flex } from 'pcln-design-system'
import Header from '../../components/Header';
import FadeTransition from "../../components/Transitions/fade";
import AppLoadingScreen from '../../screens/Loading';

const LoadableHomeScreen = Loadable({
    loader: () => import('../../screens/Home'),
    loading: AppLoadingScreen,
    delay: 200
})

const LoadableAddLineScreen = Loadable({
    loader: () => import('../../screens/AddLine'),
    loading: AppLoadingScreen,
    delay: 200
})

class App extends React.Component {
  render() {
    return (
        <TransitionGroup>
            <FadeTransition key={location.key}>
                <ThemeProvider>
                    <Flex flexDirection="column" className="App" style={{ minHeight: '100vh' }}>
                        <Header/>
                        <Route exact path="/" component={LoadableHomeScreen} />
                        <Route path="/add" component={LoadableAddLineScreen} />
                    </Flex>
                </ThemeProvider>
            </FadeTransition>
    );
  }
}

export default App;
