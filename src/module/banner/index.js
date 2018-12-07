import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import { defaultData } from '../../mock/index.js';
import './index.less';

class Banner extends React.Component {
  componentDidMount() {
    let swiperItem = document.querySelectorAll('.banner-item').length;
    swiperItem > 1 &&
      new Swiper('.banner', {
        wrapperClass: 'banner-inner',
        slideClass: 'banner-item',
        spaceBetween: 15,
        centeredSlides: true,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false
        // },
        pagination: {
          el: '.banner-pagination',
          bulletClass: 'banner-pagination-item',
          bulletActiveClass: 'active'
        }
      });
  }
  render() {
    return (
      <div className="banner">
        <div className="banner-inner">
          {defaultData.bannerDefault.map((ele, i) => {
            return (
              <div className="banner-item" key={i.toString()}>
                <a href={ele.link}>
                  <img src={ele.imageUrl} alt="" />
                </a>
              </div>
            );
          })}
        </div>
        <div className="banner-pagination" />
      </div>
    );
  }
}
export default Banner;
