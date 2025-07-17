import { createRoot } from 'react-dom/client'

document.addEventListener('DOMContentLoaded', function () {

    const roots = document.querySelectorAll('.wp-block-create-block-sb-profile-card')

    roots.forEach((wpRoot) => {

        const root = createRoot(wpRoot);
        const attributes = JSON.parse(wpRoot.dataset.attrs)
        console.log(attributes);

        root.render(
            <>

                hello profile cards
            </>


        )


    })






})