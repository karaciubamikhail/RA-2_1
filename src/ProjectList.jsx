export function ProjectList(filter){
    let result = filter.data.filter((element)=>{return element.category === filter.selected})
    if(filter.selected === 'All'){
        return(filter.data.map((el)=>{return(<img src={el.img}/>)}))
    }
    return(
        result.map((el)=>{return(<img src={el.img}/>)})
    )
}