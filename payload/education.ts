import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '경일대학교',
      subTitle: '사이버보안학 재학(2022년 2월 졸업예정)',
      startedAt: '2016-03',
      // endedAt: '2010-02',
    },
    {
      title: '능인고등학교',
      subTitle: '졸업(대구광역시 수성구)',
      startedAt: '2014-03',
      endedAt: '2016-02',
    },
  ],
};

export default education;
