import React, { Component, createContext } from 'react';

export const StoreContext = createContext();

export const withStore = WrappedComponent =>
  class HOC extends Component {
    state = {
      testState: true,
    };

    //   setAuth = (detail) => {
    //     this.setState({
    //       loggedIn: detail
    //     });
    //   };

    render() {
      return (
        <StoreContext.Provider
          value={{
            store: { ...this.state },
          }}
        >
          <WrappedComponent {...this.props} />
        </StoreContext.Provider>
      );
    }
  };
