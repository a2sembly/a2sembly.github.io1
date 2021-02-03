import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '랜섬웨어 감염으로 암호화된 파일 복구 방안 연구',
      startedAt: '2020-09',
      where: '차세대 보안리더 양성 프로그램(Best of the Best 9th)',
      descriptions: [
        {
          content:
            '랜섬웨어 감염 시, 디스크 종류에 따른 파일 저장 방식, 디스크 사용량에 따른 복구 가능성, 감염 시점 경과에 따른 복구 가능성에 대한 연구',
        },
        {
          content: '실험대상 랜섬웨어에 대한 파일 저장 방식 분석',
        },
        {
          content: 'SSD상에서 TRIM ON/OFF에 따른 복구 가능성 분석',
        },
      ],
    },
    {
      title: '불법 음란물 범죄 탐지 및 기록 보관 시스템',
      startedAt: '2019-04',
      endedAt: '2019-07',
      where: '경일대학교',
      descriptions: [
        {
          content:
            '기존 음란물 탐지 시스템에서 발전하며 음성 및 영상 내 추가 데이터 활용을 통한 음란물 탐지',
        },
        { content: '피해에 대해 분석하고 데이터를 시각화 할 수 있는 방안 연구' },
        { content: '데이터 수집 및 시제품 개발' },
      ],
    },
    {
      title: '스마트 자동차 네트워크 통신의 보안 취약점 분석 및 개선 연구',
      startedAt: '2016-04',
      endedAt: '2016-05',
      where: '대한전자공학회(Vol.2016 No.6)',
      descriptions: [
        { content: '차랑에 탑재된 데이터 쉐어링 및 네트워크 통신 부분의 보안 기법 연구' },
        { content: '피해에 대해 분석하고 이를 해결할 수 있는 방안에 대한 연구' },
        { content: '차량 통신에 관련된 부분 분석 및 해결 방안 제시' },
      ],
    },
    {
      title: '실시간 응답 메모리 포렌식 기법 분석 및 연구',
      startedAt: '2016-06',
      endedAt: '2016-11',
      where: '대한전자공학회(Vol.2016 No.11)',
      descriptions: [
        { content: '발성 메모리 데이터에 대한 분석기법에 관한 연구' },
        { content: '물리 메모리 수집 및 분석' },
      ],
    },
  ],
};

export default project;
