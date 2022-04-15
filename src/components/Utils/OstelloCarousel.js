import React from 'react'
import Carousel from 'react-elastic-carousel'
export default function OstelloCarousel({
  children,
  showArrows,
  showEmptySlots,
  itemPadding,
  itemPosition,
  itemsToShow,
  breakPoints,
  className,
  isControllerWhite = false,
}) {
  return (
    <div
      className={` my-5 ${
        isControllerWhite ? 'custom-white-carousel' : 'custom-carousel '
      }`}
    >
      <Carousel
        className=''
        showArrows={showArrows}
        showEmptySlots={showEmptySlots}
        itemPadding={itemPadding}
        itemPosition={itemPosition}
        itemsToShow={itemsToShow}
        breakPoints={breakPoints}
      >
        {children}
      </Carousel>
    </div>
  )
}
