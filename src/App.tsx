import React from 'react';
import './App.css';
import ErrorBoundry from './components/error-boundry';

const testData = [
  {name:'foo',age:13},
  {name:'foo',age:13},
  {name:'foo',age:13},
  {name:'foo',age:13},
]
const Test : React.FC = () => {
 throw new Error("Something went wrong");
};

function App() {
  return (
    <div className="App">
       <ErrorBoundry>
          {/* <Test/> */}
       </ErrorBoundry>
    </div>
  );
}

export default App;
