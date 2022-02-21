import Notifications from './header/Notifications'
import SearchModal from './header/SearchModal'
import UserMenu from './header/UserMenu'

export default function Header() {
    return (
        <>
            <h1>this is header</h1>
            <UserMenu />
            <Notifications />
            <SearchModal/>
        </>
    )
}
