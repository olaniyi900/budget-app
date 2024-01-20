import { useState } from "react";

let categoriesList = [
    {   date: '2024-01-18',
        amount: 100,
        description: 'food',
        item: 'Fun',
        day: 'Thursday'
    },
    {   date: '2024-01-17',
        amount: 10,
        description: 'ticket',
        item: 'Health',
        day: 'Wednesday'
    },
    {   date: '2024-01-16',
        amount: 200,
        description: 'gym subcription',
        item: 'House',
        day: 'Tuesday'
    },
    {   date: '2024-01-15',
        amount: 45,
        description: 'food',
        item: 'Groceries',
        day: 'Monday'
    },
    {   date: '2024-01-14',
        amount: 35,
        description: 'play',
        item: 'investment', 
        day: 'Sunday'
    },

]


    let total = 0
    for (let index = 0; index < categoriesList.length; index++) {
       total+= categoriesList[index].amount
        
    }



function Categories() {

    const [categories, setCategories] = useState(categoriesList)
    return(
        <>
        <div className="row">
        {categories.map( cat => <div 
        className="card col m-3" 
        style={{width: '18rem'}}>
        <div class="card-body">
        <h5 class="card-title">{cat.item}</h5> 
        <p class="card-text">{cat.amount}</p>
        </div>
        </div>)}
        
        </div>
        <h4>Total Expenses: {total}</h4>
        </>
    )
    
}

export default Categories;