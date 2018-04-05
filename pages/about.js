import App from '../components/App';
import Header from '../components/Header';

import { Modal, Button, List, Icon } from 'semantic-ui-react';


export default () => (
  <App>
    
    <Header />
    <article>´
      <h1>Code Challenge: github repository finder</h1>
      <p>
        The goal of this challenge is to build a github repository finder app.
        
        For this challenge you asked me to use Create React App, for my speed though is better when I write those tests using <a
        href='https://github.com/zeit/next.js/'
        ref='noopener'
        target="_blank"
      >zeit/nextjs</a>.
        Its a community preferance and more of a structure taste. We can talk about that if you like and I can explain my argumentation :)
        I used the Github GraphQL API Endpoint with the Apollo Client.
        
        You can please find the repo <a
        href='https://github.com/paschalidi/master-heartbeat'
        ref='noopener'
        target="_blank"
      >here</a>.
        <br />
        Following the README.md will help you run the app locally.
        
        <h3>The steps you asked me to follow are describes here</h3>
        <p>
          ## Step 1
          
          Add a search field. The user uses this field to search for a repository.
          Depending on the query, the app suggests possible repositories (name).
          <br />
          <br />
          ## Step 2
          
          Upon confirmation, the repository should be added to a card view with following information:
          
          <br />* name
          <br />* owner with name and picture
          <br />* forkCount, watchers, stargazers
          <br />
          ## Step 3
          
          It would be great if the app has loading states.
          <br />
          <br />
          ## Step 4
          
          Add the possibility to delete a card.
          <br />
          <br />
          ## Step 5
          
          Save the repository selection so that the user can see the previous selection next time.
        </p>
      </p>
    </article>
  </App>
)
