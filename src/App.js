import React, { Suspense } from 'react';
import 'antd/dist/antd.css';

const Container = React.lazy(() => import('./container'));

const App = () => {
  return (
    <Suspense fallback="Loading...">
      <Container />
    </Suspense>
  );
};

export default App;
