import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

function SearchQuestions({ setSearchText, searchText, filteredData }) {
    const [open, setOpen] = useState(true)

    const handleCrossClick = () => {
        setOpen(false);
        setSearchText("");
    };

    useEffect(() => {
        setOpen(true)
    }, [searchText])

    return (
        <div className="relative mb-16 md:w-2/3 mx-auto textFont">
            <div className="fixed top-4 w-full md:w-2/3 mx-auto">
                <div className="relative">
                    <div className='relative flex items-center justify-center w-[260px] mx-auto'>
                        <input onChange={(event) => setSearchText(event.target.value)} className='border py-3 px-6 border-green-500 rounded-lg  bg-white'
                            type="text" value={searchText} placeholder='search questions' />
                        <RxCross2 onClick={handleCrossClick} className="absolute right-5 top-4 text-lg cursor-pointer text-red-400" />
                    </div>
                    {
                        open && filteredData?.length > 0 && <div className="absolute top-16 min-w-screen min-h-screen inset-0 bg-black opacity-95 rounded text-black">
                            {
                                filteredData?.map((question, index) => (
                                    <a key={index+1}
                                        href={`#${question.question}`}
                                        className="py-3 px-2 my-2 rounded-md mx-4 mt-6 bg-green-500 block"
                                        onClick={() => setOpen(false)}>
                                        {question.id}.  {question.question}
                                    </a>))
                            }
                        </div>
                    }
                </div>
            </div>
        </div>

    )
}

export default SearchQuestions;