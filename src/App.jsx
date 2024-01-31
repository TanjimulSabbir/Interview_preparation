import './App.css'
import JSQuestions from './components/JSQuestions'
import ReactJSQuestions from './components/ReactJSQuestions'
import SearchQuestions from './components/SearchQuestions';
import { useEffect, useState } from 'react';
import debounce from './components/debounce';
import questions from "./assets/questions.json"
function App() {
  const [searchText, setSearchText] = useState("");
  const [filtetedData, setFilteredData] = useState([]);

  useEffect(() => {
    const handleSearchInput = (data) => {
      const Javascript = questions.Javascript.filter(question => question.title.lowerCase().includes(data.lowerCase()));
      const ReactJS = questions.ReactJS.filter(question => question.title.lowerCase().includes(data.lowerCase()));
      setFilteredData([...Javascript, ...ReactJS])
    }


    const data = debounce(handleSearchInput, 500)
    if (searchText !== "") {
      data(searchText)
    }
  }, [searchText])

  return (
    <>
      <SearchQuestions filtetedData={filtetedData} searchText={searchText} setSearchText={setSearchText} />
      <JSQuestions searchText={searchText} />
      <ReactJSQuestions searchText={searchText} />
    </>
  )
}

export default App
