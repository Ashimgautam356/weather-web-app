import './style/App.css';
import Input from './components/Input';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';

function App() {
  const handleVideoError = (e) => {
    console.error("Error loading video:", e.target.error.message);
  }
  const value = new QueryClient()
  return (
    <QueryClientProvider client={value}>
    <div className="App">

          <Input></Input>  
          
    </div>
    </QueryClientProvider>
  );
}

export default App;
