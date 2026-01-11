import Image from 'next/image';
import Link from 'next/link';
import { ITeamDT } from '@/types/team-d-t';

interface TeamItemProps {
  team: ITeamDT;
}

const TeamItemTwo = ({ team }: TeamItemProps) => {
  return (
    <div className="it-team-4-item text-center">
      <div className="it-team-4-thumb">
        <Image
          className="image-height-auto"
          src={team.image}
          alt={team.name}
          width={370}
          height={420}
        />
      </div>
      <div className="it-team-4-content">
        <div className="it-team-4-info">
          <span>{team.designation}</span>
          <h4 className="it-team-4-title">
            <Link href={`/team-details/${team.id}`}>{team.name}</Link>
          </h4>
        </div>
        <div className="it-team-4-social">
          {team.socials.map((social, i) => (
            <Link key={i} href={social.link}>
              <i className={social.platform}></i>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TeamItemTwo;
