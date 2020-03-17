import React, { Component, Fragment } from 'react';
import Autocomplete from '../../components/Autocomplete';
import config from '../../config.js';

class Home extends Component {

   state = {
      locations: [],
      textInput: '',
   }

   async componentDidMount() {
      const urlAPI = config.url,
            data   = await fetch(urlAPI),
            result = await data.json()
            
      this.setState({
         locations: result.locations
      })
   }

   render() {
      const { locations } = this.state
      return (
         <Fragment>
            <Autocomplete listAutocomplete={ locations }/>
         </Fragment>
      )
   }
}

export default Home;