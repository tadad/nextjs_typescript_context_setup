import React from 'react';

export const AppContext = React.createContext(undefined);

type Props = {
  children: React.ReactChild,
}

class AppProvider extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      test: 123,
    };
  }

  render() {
    const { children } = this.props;
    return (
      <AppContext.Provider value={{ ...this.state }}>
        {children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
