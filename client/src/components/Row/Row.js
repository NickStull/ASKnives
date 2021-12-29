import { useState, useEffect } from "react";
import "./Row.css";
import { firestore, storage } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage"
import { Accordion } from "react-bootstrap/Accordion"
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

// const Images = ({imageList, isLargeRow}) => {
//   console.log(imageList)

//   if(imageList.length > 0){
//     imageList.map((item) => {
//       console.log("hit map")
  
//       return(
//         <img
//           key={item.id}
//           // onClick={() => handleClick(movie)}
//           className={`row__poster ${isLargeRow && "row__posterLarge"} `}
//           src={`gs://asknives-9fb8b.appspot.com/${item.id}/${item.main_img}`}
//           alt={item.name}
//         />
//       )
//     }
//     )
//   } else {
//     return null
//   }
// }

const Row = ({ title, category, type, isLargeRow }) => {

  const [ idList, setIDList ] = useState([]);
  const [ items, setItems ] = useState([]);
  const [ showDetails, setShowDetails ] = useState(false);
  const [ detailsID, setDetailsID ] = useState("");
  const [ detailsURLS, setDetailsURLS ] = useState([])
  const [ trailerUrl, setTrailerUrl ] = useState("");

  useEffect(() => {

    const fetchList = async () => {
      const categoryRef = doc(firestore, "categories", category)

      const idListSnap = await getDoc(categoryRef);

      if (idListSnap.exists()) {

        let data = idListSnap.data()
        setIDList(data.list)
        
      } else {
        console.log("No Data")
      }

    }
    
    fetchList();

  }, [category]);


  useEffect(() => {

    const fetchItems = async () => {
  
      idList.forEach(id => {
        const itemRef = doc(firestore, type, id)

        const itemSnap = getDoc(itemRef).then(res => {
          
          if(res.exists()) {
            let data = res.data()
            data.id = id

            if(data.main_img){
              getDownloadURL(ref(storage, `${id}/${data.main_img}`)).then((url) => {
                data.main_img_url = url
                setItems(oldItems => [...oldItems, data])
              })
            }else{
              setItems(oldItems => [...oldItems, data])
            }
          }
        })


      })
    }

    if(idList.length > 0){
      fetchItems()
    }

  }, [idList])


  const handleClick = (item) => {
      console.log(item.other_imgs)
      setDetailsURLS([])

      if(showDetails && detailsID === item.id){
        setShowDetails(false)
        setDetailsID("")
        setDetailsURLS([])
        console.log("close")
      } else {
        if (!showDetails){
          setShowDetails(true)
        }

        setDetailsID(item.id)
        console.log("open")
        setDetailsURLS([item.main_img_url])
        item.other_imgs.forEach(fileName => {
          getDownloadURL(ref(storage, `${item.id}/${fileName}`)).then((url) => {
            setDetailsURLS(oldURLS => [...oldURLS, url])
          })
        })

      }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* {console.log(list)} */}
        {items.map((item) => (
          <img
            key={item.id}
            onClick={() => handleClick(item)}
            className={`row__poster ${isLargeRow && "row__posterLarge"} `}
            src={`${item.main_img_url}`}
            alt={item.name}
          />
        ))}
      </div>
      {showDetails && (
        <div>
          {detailsURLS.map((image) => (
            <img
              key={image}
              src={image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Row;