export const Card = ({ curMovie }) => {
    console.log("Card Component",curMovie);

    
    return (
        <>
        <div>
            <img src={curMovie.Poster} alt="" />
        </div>
        
        </>
    )
}