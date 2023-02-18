import './LoadingScreens.css'



export const LoadingImagesComponenet = () => {
  return (
    <div className='LoadingImagesComponenet-container'>      
      <div className='LoadingImagesComponenet-head'>
        <div className='LoadingImagesComponenet-head-title flex flex-column flex-center'>
          <div className='LoadingComponenet LoadingImagesComponenet-title'></div>
          <div className='LoadingComponenet LoadingImagesComponenet-title last'></div>

          <div className='LoadingComponenet LoadingImagesComponenet-author'></div>
        </div>

        <div className='LoadingImagesComponenet-head-description'>
          <div className='LoadingComponenet LoadingImagesComponenet-description'></div>
          <div className='LoadingComponenet LoadingImagesComponenet-description'></div>
          <div className='LoadingComponenet LoadingImagesComponenet-description'></div>
          <div className='LoadingComponenet LoadingImagesComponenet-description last'></div>
        </div>
      </div>
      {/* <div></div>
      <div></div> */}
      <div className='LoadingImagesComponenet-Img-section'>
        <div className='LoadingComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingComponenet LoadingImagesComponenet-Img'></div>
      </div>
    
    </div>
  )
}


export const GalleryCardSliderLoadingScreen = () => {
  return (
    <div className='GalleryCardSliderLoadingScreen flex flex-column flex-center'>
        <div className="LoadingComponenet GalleryCardSliderLoadingScreen-studio-name">

        </div>
        <div className="LoadingComponenet GalleryCardSliderLoadingScreen-img">

        </div>
    </div>
  )
}



export const GalleryCardLoadingScreen = () => {
  return (
    <div className='GalleryCardLoadingScreen'>
      <div className="gallery-card-img-frame">

        <span className="LoadingComponenet gallery-card-img-date">
          <div className="date-loading day-loading"></div>
            <br/>
          <div className="date-loading month-loading"></div>
        </span>

        <div className='gallery-card-img-loading'></div>

      </div>

      <div className="gallery-card-info">
        <div className='LoadingComponenet gallery-card-title-loading'></div>

        <div className='gallery-card-writer-loading flex flex-justify-center font-tiny'>
              <div className='LoadingComponenet author-profile'></div>  <div className='LoadingComponenet author-name-loading'> </div>
        </div>

        <div className="LoadingComponenet gallery-card-p-loading" ></div>
        <div className="LoadingComponenet gallery-card-p-loading" ></div>
        <div className="LoadingComponenet gallery-card-p-loading last" ></div>
      </div>
    </div>
  )
}
