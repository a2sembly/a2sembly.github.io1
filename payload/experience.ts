import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: '대한민국 공군 CERT(ROKAF CERT)',
      position: '정보보호병',
      startedAt: '2017-08',
      endedAt: '2019-07',
      descriptions: [
        '보안관제 및 업무 자동화 Process 개발',
        '음성인식 AI 관련 프로젝트 참여(공군 해커톤)',
        '침해사고 대응 훈련 등',
      ],
      skillKeywords: ['C#', 'IDS/IPS', 'WAF', 'NAC', 'SIEM'],
    },
    {
      title: 'PlainBit',
      position: '연구원',
      startedAt: '2022-01',
      descriptions: ['침해사고 피해조사'],
    },
  ],
};

export default experience;
