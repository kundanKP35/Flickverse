import styles from "@/app/styles/common.module.css";
const Loading = () => {
  return (
    <section className={styles.loader_section}>
      <div className={styles.loader}>
        <div></div>
        <div></div>
      </div>{" "}
    </section>
  );
};

export default Loading;
