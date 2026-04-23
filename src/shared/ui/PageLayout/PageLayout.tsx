import { Outlet } from 'react-router-dom';
import styles from './PageLayout.module.scss';

const PageLayout = () => {
  return (
    <div className={styles['page-layout']}>
      <Outlet />
    </div>
  );
};

export default PageLayout;
