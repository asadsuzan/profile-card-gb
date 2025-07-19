const Style = ({ styles }) => {
    const { cardContainer, avatar, button, skill } = styles || {}
        ;
    return (
        <style
            dangerouslySetInnerHTML={{
                __html: `
                
            .card-container{
		            background-color: ${cardContainer.backgroundColor};
		            border-radius: ${cardContainer.borderRadius}px;
		            box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
		            color: ${cardContainer.color};
		            padding-top: ${cardContainer.paddingTop};
		            position: ${cardContainer.position};
		            width:${cardContainer.width};
                    text-align:${cardContainer.textAlign};
		            max-width: 100%;
                    overflow:hidden
		        
	
                }
             
            .card-container .round{
                border-width: ${avatar.border.width};
                border-style: ${avatar.border.style};
                border-color: ${avatar.border.color};
	            border-radius: ${avatar.borderRadius}%;
	            padding-top: ${avatar.padding.top}px;
	            padding-bottom: ${avatar.padding.bottom}px;
	            padding-left: ${avatar.padding.left}px;
	            padding-right: ${avatar.padding.right}px;
	            height: ${avatar.height};
	            width: ${avatar.width};
	            object-fit: ${avatar.objectFit};
            
            }
                

        button{
	            font-family: ${button.fontFamily};
	            font-weight: ${button.fontWeight};
	            padding-top: ${button.padding.top};
	            padding-bottom: ${button.padding.bottom};
	            padding-left: ${button.padding.left};
	            padding-right: ${button.padding.right};
                border-radius: ${button.borderRadius}%;
        }
            button.message {
	            background-color:${button.messageBtn.backgroundColor};
	            color:${button.messageBtn.color};
                border-width: ${button.messageBtn.border.width};
                border-style: ${button.messageBtn.border.style};
                border-color: ${button.messageBtn.border.color};
            }
            button.follow {
	            background-color:${button.followBtn.backgroundColor};
	            color:${button.followBtn.color};
                border-width: ${button.followBtn.border.width};
                border-style: ${button.followBtn.border.style};
                border-color: ${button.followBtn.border.color};
            }
                 
             .skills {
	            background-color: ${skill.container.backgroundColor};
	            text-align:${skill.container.textAlign};
	             padding-top: ${skill.container.padding.top};
	            padding-bottom: ${skill.container.padding.bottom};
	            padding-left: ${skill.container.padding.left};
	            padding-right: ${skill.container.padding.right};
	            margin-top:${skill.container.margin.top} ;
}




                `

            }}

        />

    )
}

export default Style;

