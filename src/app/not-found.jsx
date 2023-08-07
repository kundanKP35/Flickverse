import styles from '@/app/styles/common.module.css'
import Link from "next/link";
import { FaExclamationCircle } from 'react-icons/fa';


const NotFound = () => {
  return (
      <section className={styles.page_not_found_container}>
      <FaExclamationCircle className={styles.icon}/>
        <p className={styles.page_not_found_message}>Oops! Page not found.</p>
        <Link href="/">
          <button className={styles.button}>
            Go to Home Page
          </button>
        </Link>
    </section>
  );
}

export default NotFound;