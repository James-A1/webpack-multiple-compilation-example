import React from 'react';
import { render } from 'react-dom';
import Bcomponent from './bcomponent'
import CommonComponent from '../common/commonComponent'

render(
  <div>
    <Bcomponent/>
    <CommonComponent />
  </div>
    ,
  document.getElementById('root')
);
