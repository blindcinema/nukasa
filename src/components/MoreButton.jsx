import Link from "next/link";

export default function MoreButton(props) {
    return (
        <div>
            <Link href={"#"} className={props.className}>{props.children}&gt; </Link>
        </div>
    )
}