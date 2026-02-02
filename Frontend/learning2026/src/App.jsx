/* eslint-disable no-unused-vars */
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
//import './App.css'
import { FooterComponent } from './component/FooterComponent';
import ContentComponent from './component/ContentComponent';
import { HeaderComponent } from './component/HeaderComponent';
import { HeaderComponent1 } from './component/HeaderComponent1';
import { MapDemo1 } from './component/MapDemo1';
import { MapDemo2 } from './component/MapDemo2';
import { MapDemo3 } from './component/MapDemo3';
import { MapDemo4 } from './component/MapDemo4';
import { MapDemo5 } from './component/MapDemo5';

function App() {
  return (
          <div>
            <HeaderComponent1></HeaderComponent1>
            <MapDemo5></MapDemo5>
            <FooterComponent></FooterComponent>
          </div>

  )
}

export default App
