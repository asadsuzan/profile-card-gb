import { createRoot } from 'react-dom/client'
import ProfileCard from '../components/common/ProfileCard';
import Style from '../components/common/Style';

document.addEventListener('DOMContentLoaded', function () {

    const roots = document.querySelectorAll('.wp-block-create-block-sb-profile-card')

    roots.forEach((wpRoot) => {

        const root = createRoot(wpRoot);
        const { profile, options, styles } = JSON.parse(wpRoot.dataset.attrs)


        root.render(
            <div>
                <Style styles={styles} />

                <ProfileCard isBackEnd={false} profile={profile} options={options} />
            </div>


        )


    })






})