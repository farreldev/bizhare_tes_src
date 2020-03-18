import React, { Component } from 'react';
import config from '../../config.js';

class Pagelist extends Component {

   state = {}

   async componentDidMount() {
      const urlAPI = config.url,
            data   = await fetch(urlAPI),
            result = await data.json()
            
   }

   render() {
      return <div />
   }
}

export default Pagelist;