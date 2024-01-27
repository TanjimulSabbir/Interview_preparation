import questions from "../assets/questions.json"
function ReactJSQuestions() {
    return (
        <div>
        {questions.ReactJS.map(question => {
            return (
                <div key={question.id} className="collapse bg-base-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        {question.question}
                    </div>
                    <div className="collapse-content">
                        <p>{question.answer}</p>
                    </div>
                </div>
            )
        })}
    </div>
    )
}

export default ReactJSQuestions;