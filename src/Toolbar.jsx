export function Toolbar (data){
    const buttons = data.filters.map((button)=><button onClick={data.onSelectFilter}>{button}</button>)
    return(
        buttons
    )
}