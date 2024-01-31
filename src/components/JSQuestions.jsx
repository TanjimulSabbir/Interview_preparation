import questions from "../assets/questions.json"

function JSQuestions() {
    return (
        <div className="w-[80%] md:w-2/3 ml-auto md:mr-10 ">
            <h1 className="text-black text-3xl text-center py-4 bg-sky-300 rounded-2xl mt-3">Javascript Most Important Interview Questions</h1>

            <div className="">
                {questions.Javascript.map(question => {
                    return (
                        <div id={question.id} key={question.id} className="my-10 bg-gray-300 rounded-2xl py-8 px-4">
                            <div className="text-xl md:text-3xl mb-4 nunito">
                                <h2>{question.id}. {question.question}</h2>
                            </div>
                            <div className="nunito">
                                <p>{question.answer}</p>
                            </div>
                            <small className="text-green-600 text-end text-xs flex items-end justify-end">Javascript</small>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default JSQuestions;