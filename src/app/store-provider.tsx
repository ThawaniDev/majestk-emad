'use client';

import { Provider } from 'react-redux';
import store from '../redux/store';
import { LanguageProvider } from '@/context/language-context';

const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </Provider>
  );
};

export default StoreProvider;
