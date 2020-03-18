import React, { useState } from 'react';

function Autocomplete({listAutocomplete}) {
  const [suggestion, setSuggestion] = useState('');
  const [hidding, setHidding] = useState(true);
  
  const onTxtChange = (e) => {
    const value = e.target.value;
    setSuggestion(value)
  }

  const resetBtn = () => {
    document.querySelector('input').value = '';
    setSuggestion('');
    setHidding(true);
  }

  const getValue = (e) => {
    document.querySelector('input').value = e;
    setSuggestion(e)
    setHidding(true);
  }

  let filterList = listAutocomplete.filter(list => {
    return list.area.toLowerCase().indexOf(suggestion.toLowerCase()) !== -1;
  })

  return (
    <div className="boxSearch">
      <h1>Find Our Doctor</h1>
      <div className="groupBoxSearch">
        <div className="groupAutocomplete">
          <button className="btnSearch">
            <svg width="25" height="25" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.1651 23.3485C28.8226 20.9475 29.7953 18.0367 29.7953 14.8977C29.7953 6.67005 23.1267 0 14.8977 0C6.66865 0 0 6.66998 0 14.8976C0 23.1252 6.66865 29.7953 14.8977 29.7953C18.3324 29.7953 21.493 28.6301 24.0128 26.6778L32.7588 35.4238L36 32.1831L27.1651 23.3485ZM14.8977 26.5866C8.45234 26.5866 3.20871 21.3431 3.20871 14.8976C3.20871 8.45226 8.4522 3.20864 14.8977 3.20864C21.3431 3.20864 26.5866 8.45212 26.5866 14.8976C26.5866 21.3431 21.343 26.5866 14.8977 26.5866Z" fill="white"/>
              <path d="M13.4815 5.72888C9.76356 6.79693 6.84271 9.71778 5.77417 13.4358L7.97762 14.0679C8.82383 11.1144 11.1602 8.77763 14.1136 7.93142L13.4815 5.72888Z" fill="white"/>
              </svg>
          </button>
          <div className="autocomplete">
            { suggestion === '' ? '' : <span className="reset" onClick={resetBtn}></span> }
            <input
              onKeyDown={() => setHidding(false)}
              onChange={(e) => onTxtChange(e)} 
              type="text"
              placeholder="Type the area - ex: Depok"/>
          </div>
        </div>
          { !hidding && <ul className="autocompleteList">
              {
                filterList.map((item, i) => {
                  return <li onClick={() => getValue(item.area)} key={i}><span>{item.area}</span></li>
                })
              }
            </ul> 
          }
      </div>
    </div>
  )
}


export default Autocomplete;