'use client';

import { getTeamDataOne } from '@/data/team-data';
import TeamItemOne from './team-item/team-item-one';
import { useLanguage } from '@/context/language-context';

const TeamArea = () => {
  const { t } = useLanguage();
  const teamDataOne = getTeamDataOne(t);
  return (
    <div className="it-team-area fix p-relative black-bg pt-120 pb-120">
      <div className="container">
        <div className="row">
          {teamDataOne.map((team, i) => (
            <div
              key={team.id}
              className="col-xl-4 col-lg-4 col-md-6 mb-30 it-fade-anim"
              data-fade-from="bottom"
              data-delay={0.3 + 0.2 * i}
            >
              <TeamItemOne team={team} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TeamArea;
