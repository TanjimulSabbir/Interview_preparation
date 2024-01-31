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
        <div className="relative mb-24 md:w-2/3 mx-auto">
            <div className="fixed top-4 w-full md:w-2/3 mx-auto">
                <div className="relative">
                    <div className='relative flex items-center justify-center'>
                        <input onChange={(event) => setSearchText(event.target.value)} className='border py-3 px-6 border-sky-200 rounded-lg w-full bg-white'
                            type="text" value={searchText} placeholder='search questions' />
                        <RxCross2 onClick={handleCrossClick} className="absolute right-4 top-4 text-lg cursor-pointer" />
                    </div>
                    {
                        open && filteredData?.length > 0 && <div className="absolute top-16 min-w-screen min-h-screen inset-0 bg-black opacity-95 rounded text-black">
                            {
                                filteredData?.map(question => (
                                    <a key={question.id}
                                        href={`#${question.id}`}
                                        className="py-3 px-2 my-2 rounded-md mx-4 mt-6 bg-green-500 block"
                                        onClick={() => setOpen(false)}>
                                        {question.question}
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