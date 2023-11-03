import {
  RecipePreparationTitle,
  RecipePreparationDescription,
  RecipePreparationImage,
  RecipePreparationWrap,
} from './RecipePreparation.styled';

import drinkIdPageDesk1x from '../../assets/images/drinkIdPage/drink-id-page-desk@1x.jpg';
import drinkIdPageDesk2x from '../../assets/images/drinkIdPage/drink-id-page-desk@2x.jpg';
import drinkIdPageTabl1x from '../../assets/images/drinkIdPage/drink-id-page-tabl@1x.jpg';
import drinkIdPageTabl2x from '../../assets/images/drinkIdPage/drink-id-page-mob@2x.jpg';
import drinkIdPageMob1x from '../../assets/images/drinkIdPage/drink-id-page-mob@1x.jpg';
import drinkIdPageMob2x from '../../assets/images/drinkIdPage/drink-id-page-mob@2x.jpg';

const RecipePreparation = ({ instructions }) => {
  return (
    <>
      <RecipePreparationTitle>Recipe Preparation</RecipePreparationTitle>
      <RecipePreparationWrap>
        <RecipePreparationDescription>
          {instructions}
        </RecipePreparationDescription>

        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${drinkIdPageDesk1x} 1x, ${drinkIdPageDesk2x} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${drinkIdPageTabl1x} 1x, ${drinkIdPageTabl2x} 2x`}
          />
          <source
            media="(min-width: 375px)"
            srcSet={`${drinkIdPageMob1x} 1x, ${drinkIdPageMob2x} 2x`}
          />
          <RecipePreparationImage src={drinkIdPageMob1x} alt="drinks photo" />
        </picture>
      </RecipePreparationWrap>
    </>
  );
};
export default RecipePreparation;
