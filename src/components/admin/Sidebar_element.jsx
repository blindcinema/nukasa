export function Sidebar_element(props) {
return (
    <div className="Sidebar__element text-[--nukasa_champagne] h-12 flex items-center hover:bg-[--nukasa_purple_highlight] rounded-lg whitespace-pre-wrap">
        {/*ADD AN ICON HERE MAYBE */}
        <div className="pr-4 pl-4">{props.icon}</div>
        <button className="Sidebar__element__text font-[Oswald] font-[400] text-sm text-left" onClick={props.onClick}>{props.children}</button>
    </div>
    )
}