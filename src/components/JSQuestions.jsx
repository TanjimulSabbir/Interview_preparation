import questions from "../assets/questions.json"
import ListView from "./ListView";

function JSQuestions() {
    return (
        <div className="w-[80%] md:w-2/3 mx-auto textFont">
            <h1 className="text-black text-lg md:text-3xl text-center py-4 *:rounded-2xl mt-3">Javascript Most Important Interview Questions</h1>

            <div>
                {questions.Javascript.map(question => {
                    return (
                        <div id={question.question} key={question.id} className="my-3 bg-gray-300 rounded-2xl py-8 px-4">
                            <div className="text-xl md:text-3xl mb-4 HeadingFont">
                                <h2>{question.id}. {question.question}</h2>
                            </div>
                            <div>
                                <p className="mb-4">{question.answer}</p>
                                <ListView lists={question.lists} listLength={question?.lists?.length} />
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