import {useDispatch, useSelector} from "react-redux";

import { setFirstName, setLastName } from "features/user/userSlice";

const User = () => {
    const dispatch = useDispatch();
    const { firstName, lastName } = useSelector(({user}) => user);

    return (
        <div className="user">
            <form>
                <input
                    type='text'
                    id='text'
                    placeholder='Enter your first name'
                    name='firstName'
                    onChange={({target: {value}}) => dispatch(setFirstName(value))}
                />
                <input
                    type='text'
                    id='text'
                    placeholder='Enter your last name'
                    name='lastName'
                    onChange={({target: {value}}) => dispatch(setLastName(value))}
                />
            </form>
            <p>LastName` {firstName}</p>
            <p>FirstName` {lastName}</p>
        </div>
    )
};

export default User;