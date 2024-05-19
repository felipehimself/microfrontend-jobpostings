import { usePageStyles } from '@/styles';

export const Openings = () => {
  const styles = usePageStyles();

  return (
    <div className={styles.div}>
      <p className={styles.text}>
        This is the Openings page within the microfrontend Job Postings
      </p>
    </div>
  );
};
