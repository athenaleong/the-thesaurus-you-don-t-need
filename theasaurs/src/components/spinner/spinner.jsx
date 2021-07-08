import React from 'react';
import Loader from "react-loader-spinner";

function Spinner(props) {

  return (
    <div>
        <Loader type="ThreeDots" color="#FCCA2D" height="64" width="64" />
    </div>
  )

}

export {Spinner}