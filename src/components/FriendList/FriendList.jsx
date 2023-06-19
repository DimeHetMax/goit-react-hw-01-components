import PropTypes from 'prop-types'; 
import {FriendListItem} from './FriendListItem'
import css from './FriendList.module.css';

export const FriendList = ({friendsArray}) =>{
    return(
        <ul className={css.friendList}>
            {friendsArray.map(friend=>(
            <li className={css.item} key={friend.id}>
                <FriendListItem  
                    img = {friend.avatar}
                    nameAvatar = {friend.name}
                    status ={friend.isOnline}
                />
            </li>
            ))}
        </ul>
    )
}
FriendList.protoType ={
    friends: PropTypes.arrayOf(PropTypes.object),
}