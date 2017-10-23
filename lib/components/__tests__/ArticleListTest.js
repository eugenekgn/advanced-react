import React from 'react';
import ArticleList from '../ArticlesList';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {

  const testProps = {
    articles: {
      article1: { id: 1 },
      article2: { id: 2 }
    },
    articleActions: {
      lookupAuthor: jest.fn(() => ({})),
    }

  };

  it('render correctly', () => {
    const tree = renderer.create(
      <ArticleList
        {...testProps}
      />
    ).toJSON();

		expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
	});
	

});