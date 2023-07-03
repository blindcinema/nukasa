
import { BsArrowRightCircle } from "react-icons/bs";

export default function MoreButton(props) {
    return (
        <span className={ `${props.className}`} >
            <BsArrowRightCircle size={props.size || 42}  />
        </span>
    )
}