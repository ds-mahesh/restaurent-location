import ResultsCount from '../components/ResultsCount';
import AlternativeVerticals from '../components/AlternativeVerticals';
import AppliedFilters from '../components/AppliedFilters';
import DirectAnswer from '../components/DirectAnswer';
import VerticalResults from '../components/VerticalResults';
import SpellCheck from '../components/SpellCheck';
import LocationBias from '../components/LocationBias';
import usePageSetupEffect from '../hooks/usePageSetupEffect';
import { MenuCard } from '../components/cards/MenuCard';
import Footer from '../components/Footer';

export default function MenuPage({ verticalKey }: {
  verticalKey: string
}) {
  usePageSetupEffect(verticalKey);

  return (
    <><div>
      <DirectAnswer />
      <SpellCheck />
      <ResultsCount />
      <AppliedFilters
        hiddenFields={['builtin.entityType']} />
      <AlternativeVerticals
        currentVerticalLabel='Menu Item'
        verticalsConfig={[
          { label: 'Locations', verticalKey: 'locations' },
          { label: 'Switch', verticalKey: 'switch' },
          { label: 'Plans', verticalKey: 'plans' },
          { label: 'Menu Items', verticalKey: 'menu_items' },
          { label: 'Faqs', verticalKey: 'faqs' }
        ]} />
      <VerticalResults
        CardComponent={MenuCard} />
      <LocationBias />
      <Footer />
    </div></>
  )
}

