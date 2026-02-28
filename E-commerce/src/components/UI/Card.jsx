export const Card = ({ curMovie }) => {
    console.log("Card Component", curMovie);


    return (
        <>
            <li>
                <div>
                    <img src={curMovie.Poster} alt="" />
                </div>

            </li>
        </>
    )
}