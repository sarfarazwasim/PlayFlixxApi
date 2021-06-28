import React from "react"; 

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "../../../../../assets/Css/FlixxCss/FVSlider.css";

function FVSlider() {
  const [images, setImages] = React.useState(null);

  React.useEffect(() => {
    let shouldCancel = false;

    const call = async () => {
      const imageArray = [ 
        {
          url: "https://picsum.photos/id/1015/1000/600/",
          title : "Thieve the Bank1",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }, 
        {
          url: "https://picsum.photos/id/1016/1000/600/",
          title : "Thieve the Bank2",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }, 
        {
          url: "https://picsum.photos/id/1021/1000/600/",
          title : "Thieve the Bank3",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }, 
        {
          url: "https://picsum.photos/id/1022/1000/600/",
          title : "Thieve the Bank4",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }, 
        {
          url: "https://picsum.photos/id/1019/1000/600/",
          title : "Thieve the Bank5",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }, 
      ];
      if (!shouldCancel && imageArray && imageArray.length > 0) {
        setImages(
          imageArray.map((obj) => ({
            original: obj.url,
            thumbnail: obj.url, 
            thumbnailLabel: obj.title, 
            originalLaber: obj.title,
            description:  <div>
                <h1 className="description-header">{obj.title}</h1>
                <p className="descriptioln-text">{obj.description}</p>
            </div>,
          }))
        );
      }
    };
    call();
    return () => (shouldCancel = true);
  }, []);

  return images ? (
    <ImageGallery
      items={images}
      autoPlay={false}
      showFullscreenButton={false}
      disableThumbnailScrol={false}
      showPlayButton={true}
      showNav={false}
      thumbnailPosition="right" 
      onPlay={""}
    />
  ) : null;
}

export default FVSlider;
