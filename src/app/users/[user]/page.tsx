import { UserData } from "@/app/types"
import static_data from '../../../../public/user_test_data.json'

function get_user_data(user_id: string): UserData {
    console.log(static_data)
    return static_data[0];
}

export default async function User({
    params
}: {
    params: { user: string }
}) {
    const { user } = await params
    console.log(user)

    // Get user data
    const {id, username, to_consume, history_list} = get_user_data(user)


    const onListened = () => {
        return 
    }

    return (
        <>
            <div>
                user: {user}
            </div>

            {/*If not authed */}
            <form>
                <h1>Recommend something to {username} </h1>
                <label>Enter your name:
                    <input type="text" />
                </label>
                {/* Eventually this will search for spotify songs */}
                <label>Media type:
                    <select>
                        <option value="song">Song</option>
                        <option value="movie">Movie</option>
                        <option value="book">Book</option>
                        <option value="show">Show</option>
                        <option value="video">Video</option>
                    </select>
                </label>
                <label>Title:
                    <input type="text" />
                </label>
                <label>Link:
                    <input type="url" />
                </label>
                <input type="submit" />
            </form>
            
        </>
    )
}