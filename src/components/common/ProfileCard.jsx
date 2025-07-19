import { useState } from 'react'
import SbRichText from '../modules/SbRichText'

const ProfileCard = ({ options, isBackEnd = true, profile = {}, onNameChange, onCountryChange, onTitleChange, onFollowChange }) => {

    const [isFollowing, setIsFollowing] = useState(false)

    const handleFollow = () => {
        if (isBackEnd) {
            return onFollowChange
        } else {
            setIsFollowing((state) => !state)
        }
    }
    const { badgeTxt, imgUrl, name, country, title, messageBtn, followBtn, skills } = profile
    return <>
        <div className="card-container">
            {
                options?.isShowBadge && <span className="pro">PRO</span>
            }
            <img className="round" height={"100%"} width={"100%"} src={profile?.imgUrl || "https://randomuser.me/api/portraits/women/79.jpg"} alt="user" />
            {
                isBackEnd ? <SbRichText content={name} tagName='h3' onContentChange={onNameChange} /> : <h3 dangerouslySetInnerHTML={{ __html: name }}></h3>
            }
            {
                isBackEnd ? <SbRichText content={country} tagName='h6' onContentChange={onCountryChange} /> : <h6 dangerouslySetInnerHTML={{ __html: country }}></h6>
            }
            {
                isBackEnd ? <SbRichText content={profile?.title} tagName='p' onContentChange={onTitleChange} /> : <p dangerouslySetInnerHTML={{ __html: title }}></p>
            }

            <div className="buttons">
                {
                    options?.isShowMessageBtn && <a href={messageBtn?.url || "#"} target='_blank'>
                        <button className="primary">
                            {messageBtn.txt || ""}
                        </button>
                    </a>
                }


                {
                    options?.isShowFollowBtn && <button className="primary ghost" onClick={handleFollow}>
                        {
                            isFollowing ? "Following" : "Follow"
                        }
                    </button>
                }
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
        </div >

    </>
}

export default ProfileCard