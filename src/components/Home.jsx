import { useState } from "react"

function SingleMenuComponent(props){
    console.log('props ->' , props)
    return (
        <p>{props.description}</p>
        )

}


    export default function Home(){
     const  [MenuItems, setmenuitems] = useState(['hotdog, burger'])
    //1.fetch data - done 
    //2.get array of objects -done
   //3. render each object 
   //3.1 create a state variable 
   //3.2 put inside state variable tthe array of objects
   //3.3. display each item in dom 
   //3.3.1 map over the array of objects
   //3.3.2 return each item so that it displays on the browser 

   
    //how do i render each object
    
    const handleBtnClic = () => {
        console.log ('menuItems) ->', MenuItems)
   
        console.log ('hey class from a function')
    


    fetch('https://codice-boca.web.app/menu')
    .then(res => (res.json()))//contacting the api 
    .then(data => setmenuitems(data))//get clean data from res 
    .catch(x => console.error(x))

}

    
    
    
    return (
    <div>
        <h2>I'm Home component</h2>
    <button onClick={() => {handleBtnClic()}}>get data</button>
        {MenuItems.map((singleItem)=> {
            console.log('log')
           // singleItem.price = 16.99
            return(
                <>
                <SingleMenuComponent title={singleItem.title}description={singleItem.description} />
                </>
            )
        })}
 </div>)
}