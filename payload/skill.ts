import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Programming',
  items: [
    {
      title: 'C#',
      level: 3,
    },
    {
      title: 'Python',
      level: 2,
    },
    {
      title: 'C/C++',
      level: 2,
    },
    {
      title: 'Java',
      level: 1,
    },
    {
      title: 'PHP',
      level: 1,
    },
    {
      title: 'Visual Basic',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Security',
  items: [
    {
      title: 'Revers Engineering',
      level: 2,
    },
    {
      title: 'Digital Forensic',
      level: 2,
    },
    {
      title: 'Web',
      level: 2,
    },
    {
      title: 'System',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Ubuntu',
    },
    {
      title: 'Vim',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Cryptography',
    },
    {
      title: 'Steganography',
    },
    {
      title: 'Git / Github',
    },
    {
      title: 'Other Tools',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, etc],
  tooltip: '1: 기초 수준\n2: 학부 수준\n3: 실무 활용 가능 수준',
};

export default skill;
