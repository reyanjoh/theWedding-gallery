import './LoadingScreens.css'



export const LoadingImagesComponenet = () => {
  return (
    <>      
      <div className='LoadingImagesComponenet-head width62'>
        <div className='LoadingImagesComponenet-head-title flex flex-column flex-center'>
          <div className='LoadingImagesComponenet LoadingImagesComponenet-title'></div>
          <div className='LoadingImagesComponenet LoadingImagesComponenet-title last'></div>

          <div className='LoadingImagesComponenet LoadingImagesComponenet-author'></div>
        </div>

        <div className='LoadingImagesComponenet-head-description'>
          <div className='LoadingImagesComponenet LoadingImagesComponenet-description'></div>
          <div className='LoadingImagesComponenet LoadingImagesComponenet-description'></div>
          <div className='LoadingImagesComponenet LoadingImagesComponenet-description'></div>
          <div className='LoadingImagesComponenet LoadingImagesComponenet-description last'></div>
        </div>
      </div>
      {/* <div></div>
      <div></div> */}
      <div className='LoadingImagesComponenet-Img-section'>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
        <div className='LoadingImagesComponenet LoadingImagesComponenet-Img'></div>
      </div>
    
    </>
  )
}


export const GalleryCardSliderLoadingScreen = () => {
  return (
    <div className='GalleryCardSliderLoadingScreen flex flex-column flex-center'>
        <div className="LoadingImagesComponenet GalleryCardSliderLoadingScreen-studio-name">

        </div>
        <div className="LoadingImagesComponenet GalleryCardSliderLoadingScreen-img">

        </div>
    </div>
  )
}



export const GalleryCardLoadingScreen = () => {
  return (
    <div className='GalleryCardLoadingScreen'>
      <div className="gallery-card-img-frame">

        <span className="LoadingImagesComponenet gallery-card-img-date">
          <div className="date-loading day-loading"></div>
            <br/>
          <div className="date-loading month-loading"></div>
        </span>

        <div className='gallery-card-img-loading'></div>

      </div>

      <div className="gallery-card-info">
        <div className='LoadingImagesComponenet gallery-card-title-loading'></div>

        <div className='gallery-card-writer-loading flex flex-justify-center font-tiny'>
              <div className='LoadingImagesComponenet author-profile'></div>  <div className='LoadingImagesComponenet author-name-loading'> </div>
        </div>

        <div className="LoadingImagesComponenet gallery-card-p-loading" ></div>
        <div className="LoadingImagesComponenet gallery-card-p-loading" ></div>
        <div className="LoadingImagesComponenet gallery-card-p-loading last" ></div>
      </div>
    </div>
  )
}
