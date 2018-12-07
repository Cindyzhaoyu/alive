import React from 'react';
import { defaultData } from '../../mock/index';
import './index.less';

class List extends React.Component {
  render() {
    return (
      <div className="alive-list">
        {defaultData.list.map((ele, i) => {
          return (
            <div className="item" key={i.toString()}>
              <div className="cover">
                <img src={ele.cover} alt="" />
              </div>
              <div className="alive-info">
                <div className="alive-part">
                  <p className="alive-name">{ele.name}</p>
                  <p className="alive-count">{ele.count}</p>
                </div>
                <p className="alive-desc">{ele.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
