import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3048.0421457758275!2d44.5132086!3d40.1858755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abce217b8839d%3A0x80bc65ebce1f70f!2z0J7Qv9C10YDQvdGL0Lkg0YLQtdCw0YLRgA!5e0!3m2!1sru!2s!4v1546721959048"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
        title="For Get There"
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
