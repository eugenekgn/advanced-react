import React from 'react';
import ArticleList from '../ArticlesList';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({adapter: new Adapter()});


describe('ArticleList', () => {

  const testProps = {
    articles: {
      article1: {id: 1},
      article2: {id: 2}
    },
    articleActions: {
      lookupAuthor: jest.fn(() => ({})),
    }

  };

  it('render correctly', () => {
    const wrapper = Enzyme.shallow(
      <ArticleList
        {...testProps}
      />
    );

    const instance = wrapper.instance();

    // expect(wrapper.node.props.children.length).toBe(2);
    // expect(wrapper).toMatchSnapshot();
  });


});