import Carousel from '@/components/Carousel';
import { Aside, Content, Section } from '@/layouts/Section';
import { banner } from './data.mock';
import styles from './index.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <Section>
        <Content>
          <div data-spm="banner">
            <Carousel style={{ width: '660px', margin: '10px 0' }} data={banner} />
          </div>
        </Content>
        <Aside>
          <div
            style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            侧边栏
          </div>
        </Aside>
      </Section>
    </div>
  );
}
