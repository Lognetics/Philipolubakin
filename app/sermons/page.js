import PageHero from '../../components/PageHero';
import SermonsExplorer from './SermonsExplorer';

export const metadata = {
  title: 'Sermons & Messages',
  description:
    'Watch and listen to Spirit-filled messages by Pastor Philip Olubakin - teachings on faith, the Holy Spirit, prayer, healing, the Kingdom and the supernatural life.',
};

export default function SermonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Messages"
        title="Sermon Library"
        subtitle="Sound teaching to build your faith and stir your fire. Filter by series, search by scripture or topic, and grow in the supernatural life."
      />
      <SermonsExplorer />
    </>
  );
}
