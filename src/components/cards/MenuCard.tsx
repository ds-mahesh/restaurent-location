import { useAnswersState } from '@yext/answers-headless-react';
import { useContext } from 'react';
import { ResponsiveContext } from '../../App';
import { useComposedCssClasses } from '../../hooks/useComposedCssClasses';
import { CardProps } from '../../models/cardComponent';
// import renderCardImg from '../../utils/renderCardImg';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

//prettier-ignore
export interface TrainerCardConfig {
  showOrdinal?: boolean
}

//prettier-ignore
export interface TrainerCardProps extends CardProps {
  configuration: TrainerCardConfig
}

//prettier-ignore
export interface SimpleImage {
  url: string,
  width: number,
  height: number
}

//prettier-ignore
export interface Image extends SimpleImage {
  sourceUrl: string,
  thumbnails: SimpleImage[]
}

//prettier-ignore
interface PrimaryPhoto {
  image?: Image
}

//prettier-ignore
export interface TrainerData {
  id: any | null | undefined;
  answer: string | undefined;
  name?: string,
  description?: string,
  // c_image?:any ;
  c_restaurantPhoto: any | null | undefined;
  c_inspirationalQuote?: string,
  primaryPhoto?: PrimaryPhoto
}

//prettier-ignore
export interface TrainerCardCssClasses {
  container?: string,
  descriptionContainer?: string,
  name?: string,
  // TODO: why can't I use the tailwind pixels here
  trainerPhoto?: string,
  ctaButton?: string,
  ctaButtonText?: string
}

//prettier-ignore
const builtInCssClasses: TrainerCardCssClasses = {
  container: 'flex flex-col p-4 shadow-sm my-2 align-items-center',
  descriptionContainer: 'w-full text-sm font-heading ',
  name: 'text-xl font-medium font-body font-bold',
  ctaButton: 'flex border rounded-md mt-4 px-4 bg-black justify-center hover:bg-orange-900',
  ctaButtonText: 'font-heading text-black font-bold text-base px-3 py-3 sm:py-0',
};

// TODO: format hours, hours to middle, fake CTAs on the right, hours to show current status and then can be expanded, limit to 3 results for now, margin between map
export function MenuCard(props: TrainerCardProps): JSX.Element {
  const { result } = props;
  const trainer = result.rawData as unknown as TrainerData;
  const trainerImg = trainer.primaryPhoto?.image?.url ?? '';
  //const smallestThumbnail = trainer.image?.thumbnails[trainer.image?.thumbnails.length - 1].url

  const screenSize = useContext(ResponsiveContext);

  const cssClasses = useComposedCssClasses(builtInCssClasses);

  function renderName(name?: string) {
    return <div className={cssClasses.name}>{name}</div>;
  }

  function renderQuote(quote?: string) {
    return <div className={cssClasses.descriptionContainer}>{quote}</div>;
  }

  const isVertical = useAnswersState((s) => s.meta.searchType) === 'vertical';
  
  return (
    
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 flex justify-between">

<Accordion allowZeroExpanded>

<AccordionItem  key={trainer.id}>
    <AccordionItemHeading>
        <AccordionItemButton>
     <div className="bg-yellow-300 border-double border-4 border-indigo-600 ">
     <img src={trainer?.c_restaurantPhoto?.url} className="card-img-top w-full h-50" alt="..."/>    
        <div className="px-6 py-4 ">
            <div className="font-bold text-xl mb-2 ">{renderName(trainer.name)}</div>
            <div className="text-gray-700 text-base">{renderName(trainer.description)}</div>
        </div>
     <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Order-Now</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Price</span>
  </div>
</div>
        </AccordionItemButton>       
    </AccordionItemHeading>   
</AccordionItem>

</Accordion>
</div>
  );
}
