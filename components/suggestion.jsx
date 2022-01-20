import react from "react";

function suggestions ({menuItem}){
    return (
        <div classname= "">
        {
        menuItem.map((item) =>{
            return <div className="itemCard" key={item.id}>
                        <div className="item-container">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <button>{item.category}</button>
                            <hr></hr>
                        </div>
                    </div>
            })
        }
        </div>
    )
}
export default suggestions;