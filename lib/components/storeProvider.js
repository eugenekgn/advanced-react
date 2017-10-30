import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps) => (GenericComponent) => {

  return class extends React.Component {
    static displayName = `${GenericComponent.name}Container`;
    static contextTypes = {
      store: PropTypes.object
    };

    render() {
      return <GenericComponent
        {...this.props}
        {...extraProps(this.context.store, this.props)}
      />;
    }
  };
};
export default storeProvider;
