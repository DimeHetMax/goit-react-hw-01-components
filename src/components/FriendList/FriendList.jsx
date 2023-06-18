import PropTypes from 'prop-types'; 
import {FriendListItem} from './FriendListItem'

export const FriendList = ({friendsArray}) =>{
    return(
        <ul className="friend-list">
            {friendsArray.map(friend=>(
            <li className="item" key={friend.id}>
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
FriendList.prototype ={
    friends: PropTypes.arrayOf(PropTypes.object),
}