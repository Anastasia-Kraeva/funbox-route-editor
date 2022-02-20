import App from './App';
import {cleanup, render} from '@testing-library/react';

describe('App component:', () => {
  const view = render(<App/>)

  afterEach(cleanup)

  /*describe('.ymaps-2-1-79-map:', () => {
    test('should be rendered', async () => {});
  })*/
})