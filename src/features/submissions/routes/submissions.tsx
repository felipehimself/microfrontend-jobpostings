import { usePageStyles } from '@/styles';

export const Submissions = () => {
  const styles = usePageStyles();

  return (
    <div className={styles.div}>
      <p className={styles.text}>
        This is the Submissions page within the microfrontend Job Postings
      </p>
    </div>
  );
};
