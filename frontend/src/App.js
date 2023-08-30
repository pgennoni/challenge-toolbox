import 'bootstrap/dist/css/bootstrap.min.css';

import DataTable from './components/table/Table';
import Layout from './components/layout/Layout';

function App() {

  return (
    <Layout>
     <main className='container'>
        <DataTable />  
      </main>
    </Layout>
  )
}

export default App;
