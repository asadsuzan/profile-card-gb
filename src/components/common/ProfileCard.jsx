import SbRichText from '../modules/SbRichText'

const ProfileCard = ({ isBackEnd = true, profile = {}, onNameChange, onCountryChange }) => {

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

            <p>User interface designer and <br /> front-end developer</p>
            <div className="buttons">
                <button className="primary">
                    Message
                </button>
                <button className="primary ghost">
                    Following
                </button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    <li>UI / UX</li>
                    <li>Front End Development</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node</li>
                </ul>
            </div>
        </div>

    </>
}

export default ProfileCard