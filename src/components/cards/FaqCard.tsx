import { useAnswersState } from '@yext/answers-headless-react';
import { useContext } from 'react';
import { ResponsiveContext } from '../../App';
import { useComposedCssClasses } from '../../hooks/useComposedCssClasses';
import { CardProps } from '../../models/cardComponent';
 //import renderCardImg from '../utils/renderCardImg';
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
export function FaqCard(props: TrainerCardProps): JSX.Element {
  const { result } = props;
  const trainer = result.rawData as unknown as TrainerData;
  const trainerImg = trainer.primaryPhoto?.image?.url ?? '';
  //const smallestThumbnail = trainer.logo?.image?.thumbnails[trainer.logo?.image?.thumbnails.length - 1].url

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
      <div className="container ">
       <Accordion allowZeroExpanded>
   
       <AccordionItem  key={trainer.id}>
           <AccordionItemHeading>
               <AccordionItemButton>
                 <div className="align-content: center block max-lg p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
               <div className='text-red-600'>{renderName(trainer.name)}</div>
               </div>
               </AccordionItemButton>
           </AccordionItemHeading>
           <AccordionItemPanel>
   
           <div  className="block max-lg p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
             {renderName(trainer.answer)}
             <div className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 m-4">Read more</div>
             </div>
           </AccordionItemPanel>
       </AccordionItem>
   
   </Accordion>
   </div>
  );
}
