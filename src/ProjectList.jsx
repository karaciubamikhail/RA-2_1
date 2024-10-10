export function ProjectList(filter){
    if(filter.selected === 'All'){
        return(filter.data.map((el)=>{return(<img src={el.img}/>)}))
    }
    return(
        filter.data.filter((element)=>{return element.category === filter.selected}).map((el)=>{return(<img src={el.img}/>)})
    )
}