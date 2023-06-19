import PropTypes from 'prop-types'; 
import css from './FriendListItem.module.css';
export const FriendListItem =({img,nameAvatar,status})=>{
    return(
        <>
            <span className={status ?css.status : `${css.status} ${css.notOnline}`}></span>
            <img className={css.avatar} src={img} alt={nameAvatar} width="48" />
            <p className={css.name}>{nameAvatar}</p>
        </>
    )
}
FriendListItem.propTypes ={
    img: PropTypes.string.isRequired,
    nameAvatar:PropTypes.string.isRequired,
    status:PropTypes.bool.isRequired,
}