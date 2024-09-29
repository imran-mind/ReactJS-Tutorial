import React from 'react';

const WithClickTracking = (props) => {
    const handleClick = () => {
        console.log('Clicked Tracked :=> ', props.trackingInfo)
    }
    return (
        <div onClick={handleClick}>
            {props.children}
        </div>
    )
}

//original component
const Button = (props) => {
    return <button>{props.label}</button>
}

const RenderProps = () => {

    return (
        <div className="">
            <h1>HOC Example</h1>
            <WithClickTracking trackingInfo="Button 1">
                <Button label="click me" />
            </WithClickTracking>

            <WithClickTracking trackingInfo="Button 2">
                <Button label="click me again" />
            </WithClickTracking>
        </div>
    );
};

export default RenderProps;
