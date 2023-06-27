/* eslint-disable react/prop-types */
import { Carousel } from 'react-carousel-minimal';

function Auctiongallery({photos}) {
  console.log(photos);
  //.replace(/\[|\]/g, '')
  let dataImage = [];
  const images = photos?.replace(/"/g, '').split(',');
for (let i = 0; i < images.length; i++) {
  console.log(images[i].replace(/^'|'$/g, '').replace(/\[|\]/g, ''));
 dataImage.push({
  image:images[i].replace(/^'|'$/g, '').replace(/\[|\]/g, '')
 })
}
  
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" , marginTop:"20px"}}>
        <h2>Product</h2>
        <div style={{
          padding: "0 10px"
        }}>
          <Carousel
            data={dataImage}
            time={4000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Auctiongallery;
