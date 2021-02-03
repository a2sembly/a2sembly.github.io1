import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faBlogger } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '이 승 형',
    small: '(a2sembly)',
  },
  contact: [
    {
      title: 'me@a2sembly.xyz',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/a2sembly',
      link: 'https://github.com/a2sembly',
      icon: faGithub,
    },
    {
      link: 'https://www.facebook.com/seunghyeong.e/',
      icon: faFacebook,
    },
    {
      title: 'https://a2sembly.xyz',
      link: 'https://a2sembly.xyz',
      // icon: faRss,
      icon: faBlogger,
    },
  ],
  notice: {
    title: 'I AM : [호기심이 많은 아이]',
    icon: faBell,
  },
};

export default profile;
