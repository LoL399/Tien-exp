import moment from "moment";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "./card.css";
import Select from "react-dropdown-select";
import { ContentClass } from "./class";
var Dropdown = require("rc-dropdown");
/**
 * Hook
 *
 */
export function ContentFucntion(props) {
  const [value, increase] = useState("21-12-2012");

  const images = [];

  let expend = [
    {
      id: 0,
      name: 'Food',
      spend: []
    },
    {
      id: 2,
      name: 'Shopping',
      spend: []
    },
    {
      id: 2,
      name: 'Shopping',
      spend: []
    },
    {
      id: 2,
      name: 'Shopping',
      spend: []
    },
    {
      id: 2,
      name: 'Shopping',
      spend: []
    },
    
  ]

  // arrow function
  const parseDate = () => {
    return moment(new Date()).format("D/M/yyyy");

    // let date = new Date().getDate();
    // let month = new Date().getMonth();
    // let year = new Date().getFullYear();
    // return `${date}/${month}/${year}` ;
  
  };

  const check = () =>{
    let a = images?.length === 0 || images?.length ? images?.length : 12002390322;
    return a
  }

  return (
    <div>
      {/* function */}
      {/* <button onClick={() => increase(value + 1)}>Add</button> */}
      {/* if (images || 1) { images.map() } else { null } */}
      { expend.map((ex)=>{return <ContentClass></ContentClass>}) }
    </div>
  );
}

