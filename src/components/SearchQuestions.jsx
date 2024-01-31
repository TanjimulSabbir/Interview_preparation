import { RxCross2 } from "react-icons/rx";

function SearchQuestions({ setSearchText, searchText, filteredData }) {
    console.log(filteredData, "from app")

    return (
        <div className="relative mb-24 h-full w-2/3 mx-auto">
            <div className="fixed top-4 w-2/3 mx-auto">
                <div className="relative">
                    <div className='relative flex items-center'>
                        <input onChange={(event) => setSearchText(event.target.value)} className='border py-3 px-6 border-green-500 rounded-lg w-full'
                            type="text" value={searchText} placeholder='search questions' />
                        <RxCross2 className="absolute right-4 top-4 text-lg" />
                    </div>
                    {
                        filteredData?.length > 0 && <div className="absolute top-16 bg-black text-white rounded w-full opacity-65">
                            {
                                filteredData?.map(question => (<p key={question.id} className="py-3 px-2 my-2 rounded-md" ><a href={`#${question.id}`}>{question.question}</a></p>))
                            }
                        </div>
                    }
                </div>
            </div>
        </div>

    )
}

export default SearchQuestions;