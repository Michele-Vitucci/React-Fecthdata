import FocusableInput from "./Ref";
import Colors, { colorData } from "./Rendering-lists/Lists";
import TodoList from "./Rendering-lists/Lists-and-state";
import Welcome from "./Styling-components/Welcome";
import Counter from "./Styling-components/Counter";
import Loginin from "./Styling-components/Login";
import Container from "./Component-compositionchildren/Container";
import { LanguageContext } from "./Context/Languagecontext";
import { useState } from "react";
import Hello from "./Context/Hello";
import GithubUsers from "./Data-Fetching-with-fetch-and-useEffect/Githubusers";



function App() {
  const [language, setLanguage] = useState("EN");

  function handlerSetLanguage(language) {
    setLanguage(language);
  }

  return (
    <div>
      <button onClick={() => handlerSetLanguage("IT")}>IT</button>
      <button onClick={() => handlerSetLanguage("EN")}>EN</button>
      
      
      <LanguageContext.Provider value={language}>
        <Container title="Welcome to the Container">
          <Hello />
          <Welcome />
          <Counter />
          <GithubUsers/>
          <Loginin />
          <FocusableInput />
          <Colors colors={colorData} />
          <TodoList />
        </Container>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
