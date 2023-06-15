
import { NewCollection, OtherCollections, Subscribe, WhoAreWe } from '../components/landing/sections/index';
import { LandingLayout } from '../components/layouts/index';

const DESCRIPTION = "Descubre Vostok: moda casual que desafía límites. Ropa para todas las edades. Rompe barreras con estilo y comodidad. ¡Sé audaz y diferente!";
const TITLE = "Vostok | Home";

export default function Home() {
  return (
    <>
    <LandingLayout title={TITLE} description={DESCRIPTION}>
      <main>
        <NewCollection/>
        <WhoAreWe/>
        <OtherCollections/>
        <Subscribe/>
      </main>
    </LandingLayout>
  </>
  );
}
