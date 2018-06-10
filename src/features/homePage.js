import React from "react";

const Homepage = ({history}) => {
  return <div>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted stackable header">
            <img className="ui image massive" src="/assets/people.png" alt="logo" />
            <div className="content">Meet-abit</div>
          </h1>
          <h2>Do whatever you want to do</h2>
          <div onClick={()=>{history.push('/events')}} className="ui huge white inverted button">
            Get Started
            <i className="fas fa-arrow-right" />
          </div>
        </div>
      </div>
    </div>;
};

export default Homepage;
