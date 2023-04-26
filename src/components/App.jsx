import { FeedbackCard } from "./FeedbackCard/FeedbackCard";
import { GlobalStyle } from "./GlobalStyle";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#010101'
      }}
    >    
        
      <FeedbackCard />
      <GlobalStyle />
    </div>
  );
};
