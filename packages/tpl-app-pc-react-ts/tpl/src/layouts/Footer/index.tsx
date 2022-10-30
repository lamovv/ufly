import styles from './index.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>阿信</span>
      <span className={styles.item}>杭州网络科技有限公司</span>

      <span className={styles.item}>
        ICP证：
        <a href="https://beian.miit.gov.cn/" target="_blank" style={{ marginRight: '10px' }} rel="noreferrer">
          浙B2-20220188
        </a>
        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noreferrer">
          浙ICP备2021010883号-1
        </a>
      </span>
    </div>
  );
}

export default Footer;
