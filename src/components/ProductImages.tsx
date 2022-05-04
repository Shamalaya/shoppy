import React, { useState } from 'react'
import { ImagesType } from '../types/Products'

type AppProps = {
    images: ImagesType
}

function ProductImages({ images }: AppProps) {
    const [main, setMain] = useState(images[0])
    return (
        <div>
            <img src={main.url} alt="main" className="main" />
            <div className="gallery">
                {images.map((image, index) => {
                    return (
                        <button
                            type="button"
                            onClick={() => setMain(images[index])}
                            onKeyPress={() => setMain(images[index])}
                            key={image.id}
                        >
                            <img
                                src={image.url}
                                alt={image.filename}
                                className={`${
                                    image.url === main.url ? 'active' : null
                                }`}
                            />
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductImages
