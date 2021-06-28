import React from "react";
import axios from "axios";
import "../../../assets/Css/PlayCss/PlayVideo/Videopage.css";
import { CircularProgress } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import Ad from "./AdSlider";

function App() {
  let [responseData, setResponseData] = React.useState([]);
  let [isNext, isNextFunc] = React.useState(false);
  let [pageCount, setCount] = React.useState(1);
  const fetchData = () => {
    axios
      .get(`https://picsum.photos/v2/list?page={page-number}&limit=10%60`)
      .then((response) => {
        setResponseData([...responseData, ...response.data]);
        isNextFunc(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function fetchMoreData() {
    setCount(pageCount + 1);
    fetchData();
  }let width = window.innerWidth;
  if(width > 768)
  {
  return (
    <div >
      <div style={{fontWeight:"bold",marginBottom:"2%"}}> AUTOPLAY
      
        <span style={{zoom:"15%",marginLeft:"5%",paddingTop:"5%",marginBottom:"-5%"}}>
          <input type="checkbox"/>
          </span>
      </div>
        <div style={{}}>
          <Ad/>
        </div>
      <div class="text-center">
          {fetchData()}
      </div>
      <InfiniteScroll
        dataLength={responseData.length}
        next={fetchMoreData}
        hasMore={isNext}
        loader={
          <div
            style={{ height: "80%", paddingLeft: "35%", overflow: "hidden" }}
          >
           <span style={{color:"white"}}><CircularProgress /> </span> 
          </div>
        }
      >
        <br></br>
        <div className="back">
          <table style={{justifyContent:"center"}}>
            <div align="center" style={{fontWeight:"bold"}}>RECOMMENDATIONS</div>
         <br></br>
          {responseData.map((data, index) => (
               <tbody>
              <tr style={{margin:"1%"}}>
                <td align="center" rowSpan={2}>
                  <img src={data.download_url} alt={"Loading..."} height="100em" />
                </td>
                
                <td style={{fontWeight:"bold"}}>{data.author}</td>
                </tr>
                <tr>
                <td style={{fontSize:"small"}}>{data.author}</td>
                </tr>
                <br></br>
                </tbody>
          ))}
          </table>
          </div>
      </InfiniteScroll>
    </div>
  );
 }
  if(width <= 768)
  {
    return (
      <div >
        <div style={{fontWeight:"bold",marginBottom:"2%"}}> AUTOPLAY
        
          <span style={{zoom:"15%",marginLeft:"5%",paddingTop:"5%",marginBottom:"-5%"}}>
            <input type="checkbox"/>
            </span>
        </div>
          <div style={{zoom:"95%"}}>
            <Ad/>
          </div>
        <div class="text-center">
            {fetchData()}
        </div>
        <InfiniteScroll
          dataLength={responseData.length}
          next={fetchMoreData}
          hasMore={isNext}
          loader={
            <div
              style={{ height: "80%", paddingLeft: "35%", overflow: "hidden" }}
            >
             <span style={{color:"white"}}><CircularProgress /> </span> 
            </div>
          }
        >
          <br></br>
          <div className="back">
            <table style={{justifyContent:"center"}}>
              <div align="center" style={{fontWeight:"bold"}}>RECOMMENDATIONS</div>
           <br></br>
            {responseData.map((data, index) => (
                 <tbody>
                <tr style={{margin:"1%"}}>
                  <td align="center" rowSpan={2}>
                    <img src={data.download_url} alt={"Loading..."} height="80em" />
                  </td>
                  
                  <td style={{fontWeight:"bold"}}>{data.author}</td>
                  </tr>
                  <tr>
                  <td style={{fontSize:"small"}}>{data.author}</td>
                  </tr>
                  <br></br>
                  </tbody>
            ))}
            </table>
            </div>
        </InfiniteScroll>
      </div>
    );
  }
}
export default App;
