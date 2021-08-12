import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { Link } from 'react-router-dom';
import old2 from './../../img/old2.38 1@2x.png';

const Languages = () => {
    const [selected, setSelected] = useState("");
  const onSelect = (code) => setSelected(code);
// eslint-disable-next-line
  const showSelectedLabel = ("Show Selected Label", true);
  const showSecondarySelectedLabel = (
// eslint-disable-next-line
    "Show Secondary Selected Label",
    true
  );
// eslint-disable-next-line 
  const showOptionLabel = ("Show Option Label", true);
// eslint-disable-next-line
  const showSecondaryOptionLabel = ("Show Secondary Option Label", true);
// eslint-disable-next-line
  const searchable = ("Searchable", false);
// eslint-disable-next-line
  const customLabels = ("Custom Labels", {
    CN: { primary: "中文"},
    CA: { primary: "English"},
    US: { primary: "English"},
    FR: { primary: "Français"},
    DE: { primary: "Deutsch"},
    RU: { primary: "Pусский"},
    
  });

  return (
    <div className="demo-wrapper"><Link to="/map">
    <img src={old2} className="ml-4 mt-3 mb-4 shadow-sm img-fluid" alt="Logo" width={150} height={50}  />
</Link>
      <ReactFlagsSelect
        selected={selected}
        onSelect={onSelect}
        showSelectedLabel={showSelectedLabel}
        showSecondarySelectedLabel={showSecondarySelectedLabel}
        showOptionLabel={showOptionLabel}
        showSecondaryOptionLabel={showSecondaryOptionLabel}
        customLabels={customLabels}
        countries={["CN","CA", "US", "FR","DE","RU"]}
        searchable={searchable}
        placeholder="Select Language"
      />
    </div>
  );
  }

export default Languages;