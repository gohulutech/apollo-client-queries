import React, { useState } from "react";
import { render } from "react-dom";

import { Dogs } from "./components/Dogs";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { DogPhoto } from "./components/DogPhoto";

const client = new ApolloClient({
  uri: "https://71z1g.sse.codesandbox.io/",
  cache: new InMemoryCache(),
});

function App() {
  const [selectedDog, setSelectedDog] = useState(null);

  function onDogSelected({ target }) {
    setSelectedDog(target.value);
  }

  return (
    <ApolloProvider client={client}>
      <div>
        <h2>
          Building Query components <span role="img">🚀</span>
        </h2>
      </div>
      <Dogs onDogSelected={onDogSelected} />
      {selectedDog != null && <DogPhoto breed={selectedDog} />}
    </ApolloProvider>
  );
}

render(<App />, document.getElementById("root"));
