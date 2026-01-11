'use client';

import { getTeamDataTwo } from '@/data/team-data';
import TeamItemTwo from './team-item/team-item-two';
import { useLanguage } from '@/context/language-context';

const TeamTwo = () => {
  const { t } = useLanguage();
  const teamDataTwo = getTeamDataTwo(t);

  return (
    <div className="it-team-4-area fix theme-bg pt-120 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-team-4-section-box text-center mb-60">
              <h6 className="it-section-subtitle-1 it-split-text it-split-in-right">
                {t('team.subtitle')}
              </h6>
              <h4 className="it-section-title-1 it-split-text it-split-in-right">
                {t('team.sectionTitle')}
              </h4>
            </div>
          </div>
          {teamDataTwo.map((team, i) => (
            <div
              key={team.id}
              className="col-xl-4 col-lg-4 col-md-6 mb-30 it-fade-anim"
              data-fade-from="bottom"
              data-delay={0.3 + 0.2 * i}
            >
              <TeamItemTwo team={team} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TeamTwo;
