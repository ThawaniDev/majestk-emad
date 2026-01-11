import Image from 'next/image';
import Link from 'next/link';
import { ITeamDT } from '@/types/team-d-t';

interface TeamItemProps {
  team: ITeamDT;
}

const TeamItemOne = ({ team }: TeamItemProps) => {
  return (
    <div className="it-team-item fix p-relative">
      <div className="it-team-thumb">
        <Image
          className="w-100 image-height-auto"
          src={team.image}
          alt={team.name}
          width={370}
          height={500}
        />
      </div>
      <div className="it-team-content text-center">
        <span>{team.designation}</span>
        <h6 className="it-team-content-title">
          <Link href={`/team-details/${team.id}`}>{team.name}</Link>
        </h6>
        <div className="it-team-content-social">
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
export default TeamItemOne;
