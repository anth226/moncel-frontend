import { Header3, P, Text } from 'components/core';
import { IntroBox, ListItem } from 'components/core/templates';
import styles from '../../../pages/laws-requirements/styles.module.scss';

interface FoodSafetyLegProps {
  title?: string;
  pt2?: string;
  imageSrc: string;
  alt: string;
}

export const FoodSafetyLeg = (props:FoodSafetyLegProps) => {
    return <div className="col-span-3">
    <Header3 className="pb-4">{ props.title || "Food safety legislation and you"}</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <IntroBox imageSrc={props.imageSrc} alt={props.alt}>
      <Text>As a food business owner or manager, you need to be sure you comply with:</Text>
        <ul className="pb-4">
          <ListItem>Federal government food safety laws</ListItem>
          <ListItem>{ props.pt2 || "Your state/territory government food safety laws"}</ListItem>
          <ListItem>Local council legislation</ListItem>
        </ul>
        <Text>If you {`don't`} comply, you risk being fined, prosecuted, or even having your business closed down.</Text>
        <Text>Below, {`you'll`} find information on:</Text>
        <ul className="checklist">
          <ListItem>all government requirements</ListItem>
          <ListItem>how to comply</ListItem>
          <ListItem>what happens if you {`don't`} comply</ListItem>
          <ListItem>who needs to do a Food Safety Supervisor Course</ListItem>
          <ListItem>other compliance information</ListItem>
        </ul>
      </IntroBox>
    </div>
  </div>
};

export default FoodSafetyLeg;
