import React from 'react';


// pass component as an argument
// Render props

//HOC function
const withClickTracking = (WrappedComponent) => {

  return (props) => {
    const handleClick = () => {
      console.log('Clicked Tracked :=> ', props.trackingInfo)
    }
    return (
      <div onClick={handleClick}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

const Button = (props) => {
  return <button>{props.label}</button>
}

const ButtonWithClickTracking = withClickTracking(Button);

const App = () => {


  //HOC
  return (
    <div className="">
      <h1>HOC Example</h1>
      <ButtonWithClickTracking label="Click me" trackingInfo="Button One" />
      <ButtonWithClickTracking label="Click Me Too" trackingInfo="Button Two" />
    </div>
  );
};

export default App;
