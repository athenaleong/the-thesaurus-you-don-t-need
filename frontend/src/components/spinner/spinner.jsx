import React from 'react';
import Loader from "react-loader-spinner";
import {LoaderDiv} from './style';
import {lines} from '../../asset/loadingLines';
function Spinner(props) {

  return (
    <LoaderDiv>
        <Loader type="ThreeDots" color="#FCCA2D" height="64" width="64" />
        <p>Getting your stuff ready

          
        </p>
    </LoaderDiv>
  )

}

export {Spinner}