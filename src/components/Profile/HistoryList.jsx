import HistoryItem from './HistoryItem'

function HistoryList({items}){

    return (
        <ul>
         { items.map((item, index)=>(
            <HistoryItem key={index} item={item} /> 
        ))}
        </ul>
     
    )
}

export default HistoryList