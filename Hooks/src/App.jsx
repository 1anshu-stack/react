import { useReducer } from "react"

const initialState = {
  data: [],
  loading: false,
  error: null
}

function reducer(state, action) {
  console.log(state, action);

  switch(action.type){
    case 'FETCH_DATA_START':
      return {...state, loading: true}

    case 'FETCH_DATA_SUCCESSFULLY':
      return {loading: false, error: null, data: action.payload} 

    case 'DELETE_DATA':
        return {
          ...state,
          data: state.data.filter((item) => (
            item.id !== action.payload
          ))
        } 

        case 'ADD_DATA':
          return {
            ...state,
            data: [...state.data, action.payload]
          } 
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({type: "FETCH_DATA_START"})
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      dispatch({
        type:'FETCH_DATA_SUCCESSFULLY',
        payload: data,
      });
      console.log(data);
    }catch(error){
      dispatch({type: 'FETCH_DATA_UNSUCCESSFULL',
        payload: error.message
      });
    }
  }

  const addData = (newData) => {
    dispatch({type: 'ADD_DATA',
      payload: newData
    })
  }

  const removeItem = (id) => {
    dispatch({type: 'DELETE_DATA',
      payload: id
    })
  }

  return (
    <>
       <button onClick={fetchData}>Fetch Button</button>
       {state.loading && <p>Loading...</p>}
       {state.error && <p>Error:{state.error}</p>}
       <ul>
        {state.data.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={()=>removeItem(item.id)}>Remove</button>
          </li>
        ))}
       </ul> 
       <form onSubmit={(e)=>(
        e.preventDefault(),
        addData({
          id:Date.now(),
          title:e.target.title.value
        })
       )}>
           <input type="text" name="title" placeholder="Add Your Item" />
           <button type="submit">ADD</button>
       </form>
    </>
  )
}

export default App
