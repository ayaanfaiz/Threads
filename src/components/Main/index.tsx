import React from 'react';

class BlockingComponent extends React.Component {
  blockMainThread = () => {
    console.log('Start blocking main thread');

    // Intentionally create a long-running loop to simulate a blocking operation
    const startTime = Date.now();
    while (Date.now() - startTime < 5000) {
      // Blocking loop
    }

    console.log('Blocking main thread complete');
  };

  render() {
    return (
      <div>
        <button onClick={this.blockMainThread}>Block Main Thread</button>
        <p>Click the button to simulate a blocking operation (not recommended in real applications).</p>
      </div>
    );
  }
}

export default BlockingComponent;