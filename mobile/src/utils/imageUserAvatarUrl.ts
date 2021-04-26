import imageUser from '../assets/user.png';

export default function imageUserAvatarUrl(avatar_url: string): any {
  return !avatar_url ? imageUser : { uri: avatar_url };
}
