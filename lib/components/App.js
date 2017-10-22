import React, { Component } from 'react';
import DataApi from '../dataApi';
import { data } from '../testData.json';
import ArticlesList from './ArticlesList';

const api = new DataApi(data);

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }

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
