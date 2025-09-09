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
    const {id, username, to_listen_list, listen_history_list} = get_user_data(user)

    return (
        <>
            <div>
                user: {user}
            </div>

            {/*If not authed */}
            <form>
                <h1>Recommend something</h1>
                <label>Enter your name:
                    <input type="text" />
                </label>
                {/* Eventually this will search for spotify songs */}
                <label>Song:
                    <input type="text" />
                </label>
                <input type="submit" />
            </form>
            <p>
                { username }
            </p>
        </>
    )
}