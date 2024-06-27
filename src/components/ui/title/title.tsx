
type TitleTypeProps = {
    titleProps: string
}


export const Title = ({titleProps}: TitleTypeProps) => {

    return(
        <>
            <h1 className="title">{titleProps}</h1>
        </>
    )
}