
type SecondTitleUITypeProps = {
    titleProps: string
}


export const SecondTitleUI = ({titleProps}:SecondTitleUITypeProps) => {

    return (
        <>
            <h1 className="title">{titleProps}</h1>

        </>
    )
}