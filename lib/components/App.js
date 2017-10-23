import React, { Component } from 'react';
import ArticlesList from './ArticlesList';

export default class App extends Component {

  state = this.props.store.getState();
  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  }

  render() {
    return (
      <ArticlesList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}
