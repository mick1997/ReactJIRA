import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProjectListScreen } from './screens/project-list';
import { TsReactTest } from 'screens/project-list/try-use-array';

function App() {
  return (
    <div className="App">
      <TsReactTest/>
      {/* <ProjectListScreen/> */}
    </div>
  );
}

export default App;
