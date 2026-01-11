'use client';

import { useGSAP } from '@gsap/react';
import { fadeAnimation, splitAnimation } from '@/utils/title-animation';
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import Wrapper from '@/layouts/wrapper';
import HeaderOne from '@/layouts/headers/header-1';
import Footer from '@/layouts/footers/footer';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import { ITeamDT } from '@/types/team-d-t';
import TeamDetailsArea from '@/components/team/team-details/team-details-area';
import ContactTwo from '@/components/contact/contact-two';
import { useLanguage } from '@/context/language-context';

interface TeamDetailsProps {
  team: ITeamDT;
}

const TeamDetailsMain = ({ team }: TeamDetailsProps) => {
  const { t } = useLanguage();
  // Enable smooth scrolling
  useScrollSmooth();

  // GSAP animations
  useGSAP(() => {
    const timer = setTimeout(() => {
      splitAnimation();
      fadeAnimation();
    }, LOADING_ANIMATION_TIMEOUT);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <HeaderOne
        headerClass="it-header-sticky it-header-transparent z-index-5"
        hasBorder
      />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title={team?.name} subtitle={t('team.detailsTitle')} />
            <TeamDetailsArea team={team} />
            <ContactTwo />
          </main>

          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};
export default TeamDetailsMain;
