import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { withAuthentication } from 'hoc'

const Profile = (props) => {
    const { username, email, password } = props;
    console.log(props)

    return (
        <div className="container">
            <h1>profile page</h1>
            <Link href="/">
                <a>Go to home page</a>
            </Link>
            <h1>WELCOME</h1>
            <h1>{username}</h1>
            <h2>{email}</h2>
        </div>
    );
}
export default withAuthentication(Profile);