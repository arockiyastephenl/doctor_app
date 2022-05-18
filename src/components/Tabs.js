import React from 'react';

import { Tabs } from 'antd';
// import IconSave from "../assets/icon/IconSave.svg";
// import IconNextArrow from "../assets/icon/IconNextArrow.svg";
// import IconAddRound from "../assets/logo/IconAddRound.png";
import EducationTab from './EducationTab';
import ProfessionTab from './ProfessionTab';
import HomeTab from './HomeTab';
import AddressTab from './AddressTab';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
// eslint-disable-next-line
export default () => (// eslint-disable-next-line
  <div className='tab-align'>
    <div className='tab-bg' >
      <Tabs type="card" >

        <TabPane onClick={callback} tab="Home" key="1"  >
          <HomeTab />
        </TabPane>

        <TabPane tab="Education" key="2">
          <EducationTab />
        </TabPane>

        <TabPane tab="Profession" key="3">
          <ProfessionTab />
        </TabPane>
        <TabPane tab="Address" key="4">
          <AddressTab />
        </TabPane>


      </Tabs>
    </div>
  </div>

);
