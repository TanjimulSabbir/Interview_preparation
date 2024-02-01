import './App.css';
import JSQuestions from './components/JSQuestions';
import ReactJSQuestions from './components/ReactJSQuestions';
import SearchQuestions from './components/SearchQuestions';
import { useEffect, useState } from 'react';
import debounce from './components/debounce';
import questions from "./assets/questions.json";

function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {

    const handleSearchInput = (data) => {

      const javascriptQuestions = questions.Javascript.filter(question => question.question?.toLowerCase().includes(data.toLowerCase()));

      const reactJSQuestions = questions.ReactJS.filter(question => question.question?.toLowerCase().includes(data.toLowerCase()));

      // console.log([...javascriptQuestions, ...reactJSQuestions], "array concating")

      setFilteredData([...javascriptQuestions, ...reactJSQuestions]);

    }

    if (searchText !== "") {
      // const debouncedSearch = debounce(handleSearchInput, 500);
      // debouncedSearch(searchText);
      handleSearchInput(searchText)
    } else {
      setFilteredData([])
    }
  }, [searchText]);

  return (
    <>
      <SearchQuestions filteredData={filteredData} searchText={searchText} setSearchText={setSearchText} />
      <JSQuestions searchText={searchText} />
      <ReactJSQuestions searchText={searchText} />
    </>
  );
}

export default App;
