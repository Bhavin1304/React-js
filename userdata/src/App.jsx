
import './App.css';
import usersData from './assets/usersData';

function App() {
 return<>  
 {usersData.map((user)=> 

       <h2>
         <p>{user.id +"."}
         {user.name + "/"}
       {user.email}</p>
       {user.phone}
       
       </h2>
            
    )}
    
    
 
 </>
}

export default App;
