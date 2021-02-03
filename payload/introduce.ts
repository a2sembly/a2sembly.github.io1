import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '보안분야에 많은 관심과 경험이 있습니다. 그 중에서도 Digital Forensic/Incident Response에 관해 새로운 경험 및 지식을 위해 언제나 노력하고 있습니다.',
    '군 복무 당시 CERT에 근무하며 다양한 경험을 하였고, 이를 통해 DFIR에 재미를 느껴 새로운 기술을 습득하고 다양한 프로젝트를 진행하는 것을 좋아합니다. 미약하지만 블로그를 운영하여 기술을 공유하고 스스로를 성장시키려하고 있습니다. 빠르게 발전하는 IT 환경속에서 공격자는 더욱 고도화되고 있습니다. 이에 뒤쳐지기 않기 위해 새로운 기술의 흐름을 파악하고 익히려고 노력하고 있습니다.',
    '더불어 대학생 자유학기제 봉사단을 통해 새롭게 배우고 익힌것들을 쉽게 풀어, 지식을 나누는 재미또한 느끼고 있습니다.',
  ],
  sign: 'SeungHyeongLee',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
