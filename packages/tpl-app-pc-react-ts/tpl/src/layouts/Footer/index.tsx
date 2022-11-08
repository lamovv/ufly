import styles from './index.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Demo 科技有限公司</span>

      <span className={styles.item}>
        ICP证：
        <a href="/" target="_blank" style={{ marginRight: '10px' }} rel="noreferrer">
          测A2-12345678
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          测ICP备12345678号-1
        </a>
      </span>
    </div>
  );
}

export default Footer;
