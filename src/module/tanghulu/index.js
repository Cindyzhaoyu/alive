import React from 'react';
import { defaultData } from '../../mock/index';
import './index.less';

class THL extends React.Component {
  render() {
    return (
      <div className="list-part">
        {defaultData.thl.map((ele, i) => {
          return (
            <div className="item" key={i.toString()}>
              <a href={ele.link}>
                <img src={ele.imageUrl} alt="" />
                <p className="title">{ele.title}</p>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
export default THL;
