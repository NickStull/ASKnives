import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel'
// import "./Row.css";
import { firestore, storage } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage"
import { Accordion } from "react-bootstrap/Accordion"
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { getMultiFactorResolver } from "@firebase/auth";

const Details = ({ showDetails, item }) => {

  const [ carouselItems, setCarouselItems ] = useState([])

  useEffect(() => {

  const getURLs = async () => {
    let fileNames = item.other_imgs
    // fileNames.push(item.main_img_url)
    item.other_imgs.forEach((file) => {
      getDownloadURL(ref(storage, `${item.id}/${file}`)).then((url) => {

        let newItem = (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={url}
              alt="image of selected item"
            />
          </Carousel.Item>
        )
        setCarouselItems(oldArr => [...oldArr, newItem])
      })
    })

    console.log(fileNames)
  }

    if(JSON.stringify(item) !== "{}"){
      getURLs()
    }

  }, [item, showDetails])
  
  // const handleClick = (item) => {
  //     console.log(item.other_imgs)
  //     setDetailsURLS([])

  //     if(showDetails && detailsID === item.id){
  //       setShowDetails(false)
  //       setDetailsID("")
  //       setDetailsURLS([])
  //       console.log("close")
  //     } else {
  //       if (!showDetails){
  //         setShowDetails(true)
  //       }

  //       setDetailsID(item.id)
  //       console.log("open")
  //       setDetailsURLS([item.main_img_url])
  //       item.other_imgs.forEach(fileName => {
  //         getDownloadURL(ref(storage, `${item.id}/${fileName}`)).then((url) => {
  //           setDetailsURLS(oldURLS => [...oldURLS, url])
  //         })
  //       })

  //     }
  // };

  if(!showDetails){
    return (<></>)
  }else{

    return (
      <Carousel>
        {carouselItems}
      </Carousel>
    );

  }

};

export default Details;