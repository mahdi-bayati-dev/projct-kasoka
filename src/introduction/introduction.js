import { EmojiEvents, WorkHistory, Architecture, Psychology } from '@mui/icons-material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './introduction.css';

function Introduction() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  const iconStyle = { color: '#FFD700', fontSize: '3rem' };

  return (
    <div className="introduction_container" ref={ref}>
      <div className="introduction_img">
        <img src="./introduction_img/medium_photo_244855.webp" alt="company introduction" />
      </div>
      <div className="introduction_text">
        <div className="introduction_haber">
          <h3 className="introduction_h3">افتخارات و دستاوردهای برجسته ما</h3>
          <p className="introduction_p">
            با افتخار، بیش از یک دهه تجربه درخشان در ارائه خدمات برتر و نوآورانه در صنعت. تیم متخصص ما با تعهد به کیفیت و نوآوری، همواره در مسیر تعالی گام برداشته است.
          </p>
        </div>

        <div className="introduction_item">
          <div className="introducti_item_dev">
            <EmojiEvents sx={iconStyle} />
            <span className="count">{inView && <CountUp end={15} duration={2} />}+</span>
            <p>جوایز معتبر ملی و بین‌المللی در زمینه نوآوری و کیفیت خدمات، گواهی بر تعهد ما به برتری در صنعت</p>
          </div>

          <div className="introducti_item_dev">
            <WorkHistory sx={iconStyle} />
            <span className="count">{inView && <CountUp end={12} duration={2} />}</span>
            <p>سال تجربه مستمر در ارائه خدمات برتر، همراه با رشد و یادگیری مداوم و ایجاد ارزش افزوده برای مشتریان</p>
          </div>
        </div>

        <div className="introduction_item">
          <div className="introducti_item_dev">
            <Architecture sx={iconStyle} />
            <span className="count">{inView && <CountUp end={250} duration={2} />}+</span>
            <p>پروژه موفق تکمیل شده با بالاترین استانداردهای کیفی و رضایت مشتریان، نشان دهنده تخصص و تعهد تیم ما</p>
          </div>

          <div className="introducti_item_dev">
            <Psychology sx={iconStyle} />
            <span calssName="cont">{inView && <CountUp end={1000} duration={2} />}+</span>
            <p>مشتری راضی که به ما اعتماد کرده‌اند و گواه تعهد ما به ارائه بهترین خدمات و پشتیبانی مستمر هستند</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
