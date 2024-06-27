'use client';

type CarrouselPropsType = {
    picturesProps: string[];
}

export const Carrousel = ({picturesProps}: CarrouselPropsType) => {

    return(
        <>
            <div className="carrouselContainer">
                {picturesProps.length > 0 ?
                    picturesProps.map((picture: string, index: number) => (
                        <div key={index} className="pictureCarrousel" style={{backgroundImage: "url(/assets/"+picture}}></div>
                    ))
                : null}
            </div>
        </>
    )
}