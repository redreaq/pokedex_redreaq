import { useRef } from "react"

const FormSearch = ({setLocationSelected}) => {

    const inputSearch = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        setLocationSelected(inputSearch.current.value.trim())

    }
    
  return (
    <form onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text" />
        <button>Search</button>
    </form>
  )
}

export default FormSearch
