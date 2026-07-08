import { useEffect } from 'react';
import { pushToDataLayer } from '../utils/gtm';

export const usePageTracking = (pagePath: string) => {
  useEffect(() => {
    pushToDataLayer({
      event: 'virtual_page_view',
      page_path: `/${pagePath}`,
    });
  }, [pagePath]);
};
