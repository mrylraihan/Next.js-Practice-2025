import Link from 'next/link'
    
    function Meals() {
      return (
        <div>
            <h1>Meals Page</h1>
            <ul>
                <li><Link href='/meals/meal-1'>Meal 1</Link></li>
                <li><Link href='meals/meal-2'>Meal 2</Link></li>
                <li><Link href='meals/meal-3'>Meal 3</Link></li>
                
            </ul>
        </div>
      )
    }
    
    export default Meals