import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout/Layout';
import './styles/global.css';

export default function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Layout />
      </AnimatePresence>
    </Router>
  );
}
