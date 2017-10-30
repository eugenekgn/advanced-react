import React, {Component} from 'react';
import ArticlesList from './ArticlesList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';

export default class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  state = this.props.store.getState();
  setSearchTerm = (searchTerm) => {
    this.setState({searchTerm});
  };

  render() {
    let {articles, searchTerm} = this.state;

    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
    }

    return [
      <SearchBar
        key={1}
        doSearch={this.setSearchTerm}/>,
      <ArticlesList
        key={2}
        articles={articles}
        store={this.props.store}
      />
    ];
  }
}
