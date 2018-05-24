import React from "react";
import PropTypes from "prop-types";
import hoistNonReactStatics from "hoist-non-react-statics";

export default (key, reducer) => WrappedComponent => {
  class ReducerInjector extends React.Component {

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  ReducerInjector.contextTypes = {
    store: PropTypes.object.isRequired
  };

  return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};
