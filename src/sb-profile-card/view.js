import { createRoot } from 'react-dom/client'
import ProfileCard from '../components/common/ProfileCard';

document.addEventListener('DOMContentLoaded', function () {

    const roots = document.querySelectorAll('.wp-block-create-block-sb-profile-card')

    roots.forEach((wpRoot) => {

        const root = createRoot(wpRoot);
        const { profile } = JSON.parse(wpRoot.dataset.attrs)


        root.render(
            <>

                <ProfileCard isBackEnd={false} profile={profile} />
            </>


        )


    })






})