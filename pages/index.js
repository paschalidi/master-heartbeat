import App from '../components/App';
import Header from '../components/Header';
import IndexView from '../components/IndexView';
import withData from '../lib/withData';


export default withData(() => (
  <App>
    <Header/>
    <IndexView />
  </App>
));
