import PropTypes from 'prop-types'; 
export const FriendListItem =({img,nameAvatar,status})=>{
    return(
        <>
            <span className="status">{status}</span>
            <img className="avatar" src={img} alt={nameAvatar} width="48" />
            <p className="name">{nameAvatar}</p>
        </>
    )
}
FriendListItem.propTypes ={
    img: PropTypes.string.isRequired,
    nameAvatar:PropTypes.string.isRequired,
    status:PropTypes.bool.isRequired,
}