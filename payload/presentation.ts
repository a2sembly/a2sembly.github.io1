import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: 'Analysis Steganography in Malware',
      subTitle: '스테가노그래피를 활용한 악성코드 분석',
      at: '2019-10',
      descriptions: [
        {
          content: '스테가노그래피에 대한 소개 및 Data Hiding 기법 소개',
        },
        {
          content: '악성코드 분석 및 대책방안 제시',
        },
        {
          content: 'Slideshare:',
          postHref: 'https://www.slideshare.net/ssuser870eb5/2019-dsec-stegoppt',
        },
      ],
    },
  ],
};

export default presentation;
