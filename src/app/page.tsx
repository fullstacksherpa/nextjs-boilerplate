import CatCard from '@/components/cards/cat/CatCard';
import { mockCatCardProps } from '@/components/cards/cat/CatCard.mocks';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CatCard {...mockCatCardProps.base}/>
    </main>
  );
}
