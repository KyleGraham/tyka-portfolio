import React from 'react';
import {Image } from 'react-bootstrap';
import {getNames} from './photos';
import './index.css';
import Gallery from 'react-photo-gallery';
export default class ImageGalleryClass extends React.Component{
  constructor(){
    super();
    // this.photos = [
    //   {
    //     src: "https://tyka-portfolio.s3-us-west-2.amazonaws.com/product/bear1.jpg",
    //     height: 4,
    //     width: 3
    //   }
    // ];
    this.items = [];
    this.state = {
      photos: 
      [
        {
          src: "https://tyka-portfolio.s3-us-west-2.amazonaws.com/product/bear1.jpg",
          height: 4,
          width: 3
        }
      ]
    }
    // this.openLightbox = this.openLightbox.bind(this);
    // this.closeLightbox = this.closeLightbox.bind(this);
    
  }

  componentWillMount() {
    this.renderPhotos().then((data) => {
      this.setState({photos: data})
      this.forceUpdate();    
    })
  }

  async renderPhotos() {
    const data = await getNames();
    return data;
   // this.setState({photos: data})
    // getNames().then((data) => {
    //   this.setState({photos: data})
    // })
  }
 

  render() {
    const { photos } = this.state; 
    return (
      // <div >
      //   <Image className='photo' source="https://tyka-portfolio.s3-us-west-2.amazonaws.com/product/bear1.jpg"></Image>
      //   second breakfast
        <Gallery photos={photos}/>

    );
  }

          /* <PhotoGallery photos={photos}></PhotoGallery> */
        /* <Gallery photos={this.photos}/> */
      /* <ModalGateway>
            {this.state.viewerIsOpen ? (
            <Modal onClose={this.closeLightbox}>
                <Carousel
                currentIndex={this.state.currentImage}
                views={this.state.photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                }))}
                />
            </Modal>
            ) : null}
        </ModalGateway> */
      // </div>

  // openLightbox(event, index) {
  //   this.setState({currentImage:  index.index, viewerIsOpen: true})
  // }

  // closeLightbox(event) {
  //   this.setState({currentImage: 0, viewerIsOpen: false})
  // }
}
