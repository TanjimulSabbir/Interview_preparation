function SearchQuestions({ setSearchText,searchText }) {
    

    // if (searchText !== "") {
    //     console.log(searchText)
    //     // debounce(handleInputData(searchText), 400)
    // }

    return (
        <div className='flex items-center justify-end mt-3'>
            <input  onChange={(event) => setSearchText(event.target.value)} className='border py-3 px-6 border-green-500 rounded-lg'
            type="text" value={searchText} placeholder='search questions' />
        </div>
    )
}

export default SearchQuestions;