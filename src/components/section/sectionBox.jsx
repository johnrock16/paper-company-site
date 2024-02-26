import RenderCondition from "@/hocs/renderCondition";
import { BsTree } from "react-icons/bs";

export default function SectionBox ({title, description, col}) {
    return (
      <div className={`pa-section__box col-${col}`}>
        <div className="pa-section__boxWrapper">
          <BsTree className="icon"/>
          <span>{title}</span>
          <RenderCondition condition={description}>
            <p>{description}</p>
          </RenderCondition>
        </div>
      </div>
    );
}