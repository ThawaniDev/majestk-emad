import { Metadata } from 'next';
import PortfolioDetailsMain from '@/views/portfolio-details/portfolio-details';
import { portfolioData } from '@/data/portfolio-data';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const portfolio = portfolioData.find(
    (portfolio) => String(portfolio.id) === params.id
  );
  return {
    title: portfolio
      ? `Ageo - ${portfolio.title}`
      : 'Ageo - Portfolio Not Found',
  };
}

export async function generateStaticParams() {
  return portfolioData.map((portfolio) => ({
    id: String(portfolio.id),
  }));
}

export default function PortfolioDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const portfolio = portfolioData.find(
    (portfolio) => String(portfolio.id) === params.id
  );
  return portfolio ? (
    <PortfolioDetailsMain portfolio={portfolio} />
  ) : (
    <div className="text-center pt-100">
      Portfolio not found with ID: {params.id}
    </div>
  );
}
