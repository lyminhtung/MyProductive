import type { CardProps } from "./Card.type";
import './Card.scss'
const Card: React.FC<CardProps> =({
    icon,
    title,
    description, 
    image,
    types,
    color,
    size
}) =>{
    return(
        <div style={{border: `1px solid ${color || undefined}`}} className={`card-container ${types ? `card-container-type-${types}`: ''}  ${types ? `card-container-type-${types}-${size ? `${size}`:''}`: ''}`}>
            <div className={`card-container-box ${types ? `card-container-type-${types}-box`: ''}`}>
                {icon && <span className={`card-container-icon ${types ? `card-container-type-${types}-icon`: ''}`}>{icon}</span>}
                <h2 style={{color: color || undefined}} className={`card-container-title ${types ? `card-container-type-${types}-title`: ''}`}>{title}</h2>
                {description && <p className={`card-container-description ${types ? `card-container-type-${types}-description`: ''}`}>{description}</p>}
                <div className={`card-container-image ${types ? `card-container-type-${types}-image`: ''}`}>{image}</div>
            </div>
        </div>
    )
}
export default Card 