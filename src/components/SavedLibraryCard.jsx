import { IoIosWallet } from "react-icons/io";

const SavedLibraryCard = (props) => {
    const {item} = props
    const {title,date} = item    

    return (
    <div className="saved">
        <IoIosWallet color="orange" size={50}/>
        <h1 className="saved-card-title">{title}</h1>
        <p className="card-date">{date}</p>
    </div>
    )
}

export default SavedLibraryCard