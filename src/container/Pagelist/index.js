import React, { Component } from 'react';
import './pagelist.scss';
import config from '../../config.js';
import { Link } from 'react-router-dom';

class Pagelist extends Component {

   state = {
      datalists: []
   }

   async componentDidMount() {
      const urlAPI = config.url,
            data   = await fetch(urlAPI),
            result = await data.json()        
      this.setState({
         datalists: result.datalists
      })
   }

   

   render() {
      const formatter = new Intl.NumberFormat('id-ID', {
         style: 'currency',
         currency: 'IDR',
      });
      const { datalists } =  this.state;
      return (
         <div className="pagelist">
            <div className="pagelistHeader">
               <h4>Search Page List</h4>
            </div>
            <div className="pagelistBody">
               <div className="stickList">
                  {
                     datalists.map((ls, id) => {
                        return (
                           <div className="stick" key={id}>
                              <div className="left">
                                 <Link to={`/detail/${ls.id}`}>
                                    <figure>
                                       <img src={ls.photo} alt={ls.name}/>
                                    </figure>
                                 </Link>
                                 <div className="infoName">
                                    <strong><Link to={`/detail/${ls.id}`}>{ls.name}</Link></strong>
                                    <ul>
                                       <li>
                                          <small>{ls.speciality}</small>
                                       </li>
                                       <li>
                                          <svg width="15" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M12 0C10.5273 0 9.33333 1.17235 9.33333 2.61538C9.33333 4.35788 11.6667 6.73854 11.6667 9.13358H12.3333C12.334 6.73854 14.6667 4.42654 14.6667 2.61538C14.6667 1.17235 13.4727 0 12 0ZM12 1.26715C12.1806 1.26724 12.3594 1.30221 12.5263 1.37008C12.6931 1.43795 12.8447 1.53738 12.9723 1.6627C13.1 1.78801 13.2012 1.93676 13.2702 2.10045C13.3393 2.26413 13.3748 2.43955 13.3747 2.61669C13.3746 2.79383 13.3389 2.96922 13.2697 3.13284C13.2005 3.29646 13.0991 3.44511 12.9714 3.57031C12.8436 3.6955 12.6919 3.79479 12.525 3.8625C12.3581 3.9302 12.1793 3.96501 11.9987 3.96492C11.6338 3.96475 11.284 3.82243 11.0261 3.56929C10.7683 3.31614 10.6235 2.97289 10.6237 2.61506C10.6238 2.25722 10.7689 1.91412 11.0271 1.66121C11.2852 1.40831 11.6352 1.26633 12 1.2665V1.26715ZM8 1.30769C3.58867 1.30769 0 4.82735 0 9.15385C0 13.4803 3.58867 17 8 17C12.4113 17 16 13.4803 16 9.15385C16 7.83962 15.668 6.60646 15.0833 5.5165C14.9947 5.68912 14.9053 5.85323 14.8127 6.02781C14.6373 6.35996 14.4527 6.69538 14.2913 7.02885C14.458 7.49635 14.5727 7.99065 14.6247 8.5H13.75C13.702 8.71904 13.6667 8.925 13.6667 9.13358V9.80769H14.6253C14.5349 10.7295 14.2434 11.6214 13.7707 12.4231H11.8133C11.96 11.8098 12.0447 11.1317 12.1047 10.4413H10.7913C10.7292 11.1103 10.611 11.7731 10.438 12.4231H5.562C5.33669 11.5673 5.20396 10.6907 5.166 9.80769H10.3327V9.13358C10.3275 8.92011 10.2996 8.70776 10.2493 8.5H5.16667C5.20463 7.61698 5.33736 6.74035 5.56267 5.88462H9.12533C8.89409 5.45635 8.6784 5.02018 8.47867 4.57692H6.02067C6.572 3.34312 7.30067 2.61538 8 2.61538C8 2.16096 8.08333 1.734 8.22933 1.32796C8.15267 1.32535 8.07733 1.30769 8 1.30769ZM5.25 3.20777C4.9845 3.64265 4.7613 4.10105 4.58333 4.57692H3.25C3.82506 4.00369 4.50309 3.53953 5.25 3.20777ZM2.22933 5.88462H4.18667C3.98503 6.74355 3.86651 7.61922 3.83267 8.5H1.37467C1.46482 7.57814 1.75631 6.68613 2.22933 5.88462V5.88462ZM1.37467 9.80769H3.83333C3.87267 10.7394 3.99533 11.6188 4.18733 12.4231H2.22933C1.75689 11.6213 1.46543 10.7294 1.37467 9.80769ZM3.25 13.7308H4.58333C4.77533 14.2382 5 14.6939 5.25 15.0999C4.50309 14.7682 3.82506 14.304 3.25 13.7308V13.7308ZM6.02067 13.7308H9.97933C9.428 14.9646 8.69933 15.6923 8 15.6923C7.30067 15.6923 6.57133 14.9646 6.02067 13.7308ZM11.4167 13.7308H12.75C12.1749 14.304 11.4969 14.7682 10.75 15.0999C11 14.6945 11.2247 14.2388 11.4167 13.7308Z" fill="#707783"/>
                                          </svg>
                                          {ls.area}
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="center"></div>
                              <div className="right">
                                 <div className="infoRate">
                                    <small>Rate</small>
                                    <strong>{formatter.format(ls.rate).slice(0,-3)}</strong>
                                 </div>
                              </div>
                           </div>
                        )
                     })
                  }
               </div>
            </div>
         </div>
      )
   }
}

export default Pagelist;