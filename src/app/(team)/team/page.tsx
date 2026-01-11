import TeamMain from '@/views/team/team';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ageo - Team Page',
};

const TeamPage = () => {
  return <TeamMain />;
};
export default TeamPage;
