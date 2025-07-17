import SbRichText from '../modules/SbRichText'

const ProfileCard = ({ isBackEnd = true, profile = {}, onNameChange, onCountryChange, onTitleChange, onFollowChange }) => {

    const { badgeTxt, imgUrl, name, country, title, messageBtn, followBtn, skills } = profile
    return <>
        <div className="card-container">
            <span className="pro">PRO</span>
            <img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
            {
                isBackEnd ? <SbRichText content={name} tagName='h3' onContentChange={onNameChange} /> : <h3>{name}</h3>
            }
            {
                isBackEnd ? <SbRichText content={country} tagName='h6' onContentChange={onCountryChange} /> : <h6>{country}</h6>
            }
            {
                isBackEnd ? <SbRichText content={profile?.title} tagName='p' onContentChange={onTitleChange} /> : <p>{title}</p>
            }

            <div className="buttons">
                <a href={messageBtn?.url || "#"} target='_blank'>
                    <button className="primary">
                        {messageBtn.txt || ""}
                    </button>
                </a>

                <button className="primary ghost" onClick={onFollowChange}>
                    {
                        followBtn.txt
                    }
                </button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {
                        skills?.length && skills.map((skill, idx) => {
                            return <li key={`sb-user-skill${idx}`}>{skill}</li>
                        })
                    }

                </ul>
            </div>
        </div>

    </>
}

export default ProfileCard