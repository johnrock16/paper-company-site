import RenderCondition from "@/hocs/renderCondition";
import Image from "next/image";

export default function SectionContent ({type, headTitle, modifier="", className = '', image, title, description, button}) {
    return (
        <div className={`pa-section__${type}${modifier && ` pa-section__${type}--${modifier}`}${className && ` ${className}`}`}>
            <div className="pa-section__imageContainer">
                <RenderCondition condition={image}>
                    <Image className='img-fluid' src={image?.src} alt={image?.alt} width={image?.width} height={image?.height} {...image}/>
                </RenderCondition>
            </div>
            <div className='pa-section__textContent'>
                {
                    (headTitle === 'h2')
                    ? <h2>{title}</h2>
                    : <h3>{title}</h3>
                }
                <p>{description}</p>
                <RenderCondition condition={button}>
                    <button className='button button--primary' {...button}>{button?.text}</button>
                </RenderCondition>
            </div>
        </div>
    );
}
