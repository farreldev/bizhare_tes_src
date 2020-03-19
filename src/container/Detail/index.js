import React, { Component } from 'react';
import './detail.scss';
import config from '../../config.js';

class Detail extends Component {
   state = {
      details: []
   }

   async componentDidMount() {
      // const urlAPI = await `http://52.76.85.10/test/profile/${this.props.match.params.id}.json`,
      const urlAPI = config.url,
            data   = await fetch(urlAPI),
            result = await data.json();

      this.setState({
         details: result.profiles
      })
   }
   

   render() {
      const { details } = this.state;
      // const { match } = this.props;
      // const formatter = new Intl.NumberFormat('id-ID', {
      //    style: 'currency',
      //    currency: 'IDR',
      // });
      // const { details } =  this.state;
      let detail = details.filter(list => {
         return list.id.toString().indexOf(this.props.match.params.id.toString()) !== -1;
      })
      console.log(detail)
      return (
         <div className="detail">
            <div className="detailHeader">
               <h4>Detail Profile</h4>
            </div>
            <div className="detailBody">
               <div className="panelBoxDetail">
                  <div className="top">
                     <figure>
                        <img src="https://i.pravatar.cc" alt="images"/>
                        {/* <img src={detail.photo} alt={detail.name}/> */}
                     </figure>
                     <div className="fieldDetail">
                        <div className="left">
                           <ul>
                              <li>
                                 <small>Name</small>
                                 {/* <strong>{detail.name}</strong> */}
                                 <strong>Kennedy Stella</strong>
                              </li>
                              <li>
                                 <small>Speciality</small>
                                 {/* <strong>{detail.speciality}</strong> */}
                                 <strong>Dentist</strong>
                              </li>
                              <li>
                                 <small>Rate</small>
                                 {/* <strong>{detail.rate}</strong> */}
                                 <strong>Rp. 400.000</strong>
                              </li>
                           </ul>
                        </div>
                        <div className="right">
                           <ul>
                              <li>
                                 <small>Experience</small>
                                 {/* <strong>{detail.experience}</strong> */}
                                 <strong>16 Years</strong>
                              </li>
                              <li>
                                 <small>Recommendation</small>
                                 <strong>
                                    {/* {detail.recomendation} */}
                                    737
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M15.3 5.05263H10.5298L11.4843 2.21726C11.656 1.70526 11.5693 1.13768 11.2506 0.69979C10.9318 0.261895 10.415 0 9.8702 0H8.5C8.24755 0 8.0087 0.111158 7.84635 0.303158L3.85135 5.05263H1.7C0.76245 5.05263 0 5.808 0 6.73684V14.3158C0 15.2446 0.76245 16 1.7 16H13.0109C13.3568 15.9989 13.6942 15.8938 13.9784 15.6986C14.2627 15.5034 14.4805 15.2274 14.603 14.9069L16.9464 8.71663C16.982 8.62208 17.0002 8.52196 17 8.42105V6.73684C17 5.808 16.2375 5.05263 15.3 5.05263ZM1.7 6.73684H3.4V14.3158H1.7V6.73684ZM15.3 8.26863L13.0109 14.3158H5.1V6.19958L8.8978 1.68421H9.8719L8.5442 5.62779C8.5011 5.75437 8.48908 5.88931 8.50913 6.02141C8.52918 6.15352 8.58074 6.27898 8.65951 6.3874C8.73829 6.49583 8.84202 6.58408 8.9621 6.64485C9.08218 6.70562 9.21516 6.73716 9.35 6.73684H15.3V8.26863Z" fill="#A7ADB8"/>
                                       </svg>
                                 </strong>
                              </li>
                              <li>
                                 <small>Schedule</small>
                                 {/* <strong>{detail.schedule}</strong> */}
                                 <strong>Weekdays 10AM - 18PM</strong>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="description">
                     <strong>Description</strong>
                     {/* <p>{detail.description}</p> */}
                     <p>Dr. Kennedy Stella has an excellent eye for detail and is greatly revered by his patients. Having completed Masters in Pediatric and Preventive Dentistry, he also has multiple Certifications in Cosmetic Dentistry including those from the likes of NYU.</p>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Detail;