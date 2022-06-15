import React from 'react';

import '../../../Style.css'





import {Input,Space } from 'antd';









function PatientSymptomsSearch() {


 
const { Search } = Input;
const onSearch = (value) => console.log(value);    





    return (
        <>
         
  
          <div style={{margintop:"33px"}}>
          <Space direction="vertical">
                <Search
                    placeholder="Search patients name"
                    onSearch={onSearch}
                    className="search-input" />
            </Space>
            </div>

         
     
         
        </>

    )
}
export default PatientSymptomsSearch;