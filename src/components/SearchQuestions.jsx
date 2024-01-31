function SearchQuestions({ setSearchText, searchText, filteredData }) {
    console.log(filteredData, "from app")

    return (
        <div className="fixed min-h-screen">
            <div className='flex items-center ml-6'>
                <input onChange={(event) => setSearchText(event.target.value)} className='border py-3 px-6 border-green-500 rounded-lg w-full'
                    type="text" value={searchText} placeholder='search questions' />
            </div>
            {
                filteredData?.length > 0 && <div className="absolute top-16 left-2 bg-black text-white rounded">
                    {
                        filteredData?.map(question => (<p key={question.id} className="py-3 px-2 my-2 rounded-md" ><a href={`#${question.id}`}>{question.question}</a></p>))
                    }
                </div>
            }
        </div>
    )
}

export default SearchQuestions;