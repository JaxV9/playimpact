
type TitleProps = {
    titleProps: string
}


export const Title = ({titleProps}: TitleProps) => {

    return(
        <>
            <h1 className="title">{titleProps}</h1>
        </>
    )
}