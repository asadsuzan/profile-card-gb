const Style = ({ styles }) => {
    const { cardContainer, avatar } = styles || {}
    console.log(avatar);
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
                
                `

            }}

        />

    )
}

export default Style;

