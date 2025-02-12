import React from 'react'
import { picture } from '../assets'
import { page1 } from '../assets'
import { page2 } from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: page2, title: 'No 1 Pacar paling gemesin', description: "Walau kadang suka bikin kesel tapi ngga bisa bikin aku marah tapi bikin gemes rasamya kek pengen jahilin terus terusan."},   
    { Image: page1, title: 'Tuan putri aku yang paling cantik', description: "Aku juga kadang bingung ko bisa ya orang kek aku daper pacar secantik kamu bersyukur banget sih punya kamu udah cantik pengertian baik."},

  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Galeri Bidadariku
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Previous page
          </button>

        </div>
      </div>
    </div>


  )
}

export default Picture