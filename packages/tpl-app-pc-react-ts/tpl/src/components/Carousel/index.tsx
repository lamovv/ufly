import { Carousel } from 'antd';
import Link from '../Link';
import styles from './index.scss';

interface SwiperItem {
  src: string;
  name: string;
  id: string;
  url?: string;
}

interface Props {
  data: SwiperItem[];
  style?: any;
  className?: any;
  onClick?: (item: any) => void;
}

const Swiper = ({ data = [] }: Props) => {
  return (
    <Carousel className={styles.swiper} autoplay>
      {data?.map(item => (
        <Link key={item.id} url={item.url}>
          <div style={{ backgroundImage: `url(${item.src})` }} className={styles.item} />
        </Link>
      ))}
    </Carousel>
  );
};

export default Swiper;
