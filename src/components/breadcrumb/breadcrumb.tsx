'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/language-context';

interface BreadcrumbProps {
  title: string;
  subtitle?: string;
}

const Breadcrumb = ({ title, subtitle }: BreadcrumbProps) => {
  const { t } = useLanguage();

  return (
    <div
      className="it-breadcrumb-area it-breadcrumb-bg"
      style={{
        backgroundImage: `url('/assets/new_images_from_internet/do_something_great.jpg')`,
      }}
    >
      <div className="container">
        <div className="row align-items-end">
          <div className="col-md-6 col-sm-6">
            <div className="it-breadcrumb-content z-index-3">
              <div className="it-breadcrumb-title-box">
                <span className="it-breadcrumb-subtitle it-split-text it-split-in-right">
                  {t('breadcrumb.companyName')}
                </span>
                <h3 className="it-breadcrumb-title it-split-text it-split-in-right">
                  {title.replace(/<br\s*\/?>/gi, ' ') || t('breadcrumb.titleNotFound')}
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="it-breadcrumb-list-wrap text-start text-sm-end">
              <div className="it-breadcrumb-list z-index-3">
                <span>
                  <Link href="/">{t('breadcrumb.home')}</Link>
                </span>{' '}
                <span className="dvdr">/</span>{' '}
                <span>
                  <b>{subtitle || title || t('breadcrumb.noSubtitle')}</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Breadcrumb;
