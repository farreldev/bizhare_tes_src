import React, { useState } from 'react';

const Autocomplete = ({listAutocomplete}) => {
  
  const [suggestion, setSuggestion] = useState('');
  const [hidding, setHidding] = useState(true);
  
  const onTxtChange = (e) => {
    const value = e.target.value;
    setSuggestion(value)
  }

  const onBlurTxt = () => {
    setHidding(true)
  }

  const showList = () => {
    setHidding(false)
  }


  let filterList = listAutocomplete.filter(list => {
    return list.area.toLowerCase().indexOf(suggestion.toLowerCase()) !== -1;
  })

  return (
    <div className="boxSearch">
      <h1>Find Our Doctor</h1>
      <div className="autocomplete">
        <input
          onKeyDown={showList}
          onBlur={onBlurTxt} 
          onChange={(e) => onTxtChange(e)} 
          type="text" 
          placeholder="Type the area - ex: Depok"/>
      </div>
      { !hidding && <ul className="autocompleteList">
          {
            filterList.map((item, i) => {
              return <li onClick={() => console.log(item.area)} key={i}><span>{item.area}</span></li>
            })
          }
        </ul> 
        }
    </div>
  )
}


export default Autocomplete;