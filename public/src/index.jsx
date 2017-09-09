import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export default Index;

ReactDOM.render(<Index />, document.getElementById('app'));

