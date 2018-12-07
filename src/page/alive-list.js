import React from 'react';
import Banner from '../module/banner/index.js';
import THL from '../module/tanghulu/index.js';
import List from '../module/list/index.js';

class ListPage extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <THL />
        <List />
      </div>
    );
  }
}
export default ListPage;
