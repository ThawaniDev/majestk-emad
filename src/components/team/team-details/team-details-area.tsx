'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import ProgressItem from '@/components/progress/progress-item';
import { ITeamDT } from '@/types/team-d-t';

import detailsImg from '@/assets/img/team/team-details-1.jpg';

interface TeamDetailsProps {
  team: ITeamDT;
}

const itemData = [
  { id: 1, companyName: 'New Majestic', position: 'Trade Specialist' },
  { id: 2, companyName: 'Google', position: 'Web Developer' },
  { id: 3, companyName: 'Apple', position: 'Web Developer' },
  { id: 4, companyName: 'Oracle', position: 'Web Developer' },
];

const TeamDetailsArea = ({ team }: TeamDetailsProps) => {
  const { t } = useLanguage();
  const {
    name = 'Unknown Member',
    designation = 'No Designation',
    department = 'Department Not Found',
    experience = '0',
    phone = '+91 70 785 078',
    email = 'info@newmajestic.com',
    image = detailsImg,
    socials = [],
    skills = [],
  } = team || {};

  return (
    <div className="it-team-details__area theme-bg pt-120">
      <div className="container">
        <div className="it-team-details__bg mb-50 black-bg">
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <div className="it-team-details__item p-relative text-end">
                <div className="it-team-details__thumb z-index">
                  <Image
                    className="image-height-auto"
                    src={image}
                    alt={name}
                    width={354}
                    height={349}
                  />
                </div>
                <div className="it-team-details__text d-none d-xl-block">
                  <h5 className="it-team-details__big-text">{t('team.companyName').toUpperCase()}</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="it-team-details__right-box">
                <div className="it-team-details__section-box">
                  <h5 className="it-team-details__title">{name}</h5>
                  <span>{designation}</span>
                </div>
                <div className="it-team-details__content">
                  <span>
                    <strong>{t('team.department')} </strong>
                    {department}
                  </span>
                  <span>
                    <strong>{t('team.experience')} </strong>
                    {experience} {t('team.years')}
                  </span>
                  <span>
                    <strong>{t('contact.email')} </strong>
                    <a href={`mailto:${email}`}>{email}</a>
                  </span>
                  <span>
                    <strong>{t('contact.phone')} </strong>
                    <a href={`tel:${phone}`}>{phone}</a>
                  </span>
                </div>
                <div className="it-team-details__social">
                  {socials.map((social, i) => (
                    <Link key={i} href={social.link}>
                      <i className={social.platform}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="it-team-details__text-box pb-30">
              <h4 className="postbox__details-title mb-15">
                {name}'s {t('team.biography')}
              </h4>
              <p className="pb-10">
                {t('team.biographyText')}
              </p>
              <p>
                {t('team.biographyText2')}
              </p>
            </div>
          </div>

          {[0, 1].map((_, i) => (
            <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-team-details__item-box details-cols-1">
                {itemData.slice(i * 2, i * 2 + 2).map((item) => (
                  <div key={item.id} className="it-team-details__item-2 pb-30">
                    <h5 className="it-team-details__title-sm">
                      {item.companyName}
                    </h5>
                    <span>{item.position}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="col-xl-6 col-lg-4 col-md-6 mb-30">
            <div className="it-team-details__progress-box details-cols-3">
              <div className="it-progress-bar-wrap inner-style">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={
                      skills.length - 1 !== index
                        ? 'it-progress-bar-item mb-10'
                        : 'it-progress-bar-item'
                    }
                  >
                    <label>{skill.title}</label>
                    <ProgressItem value={skill.value} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamDetailsArea;
