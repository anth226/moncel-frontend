import { Header3, Text, Blockquote } from 'components/core';
import { ListItem } from 'components/core/templates';
import styles from '../../../pages/laws-requirements/styles.module.scss';

interface FederalLocalLawsProps {
  governance: string;
  subtitle?: string;
  state?: string;
}

export const FederalLocalLaws = (props:FederalLocalLawsProps) => {
    return <div className="col-span-3">
    <Header3 className="pb-4">Federal & local laws and requirements</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8`}>
        <div>
          <Text className="font-semibold">Federal government requirements</Text>
          <Text>Food Standards Australia New Zealand (FSANZ) is responsible for regulating the Australia New Zealand Food Standards Code, the over-arching standard for food safety in Australia.</Text>
          <Text>The Code is split into four sections:</Text>
          <ol>
            <ListItem>Introduction and standards that apply to all food</ListItem>
            <ListItem>Food standards</ListItem>
            <ListItem>Food safety standards</ListItem>
            <ListItem>Primary production standards</ListItem>
          </ol>
          <Text className="font-semibold">Food Standards Code Governance</Text>
          <Text>{ props.governance }</Text>
          <Text className="font-semibold">Food safety training requirements</Text>
          <Text>Training is covered in Food Safety Practices and General Requirements Standard 3.2.2 which states that:</Text>
          <Blockquote>A food business must ensure that all persons undertaking or supervising food handling operations have the necessary skills in food safety and food hygiene matters.</Blockquote>
          <Text>This means that anyone who handles or prepares food, serves food, transports food or cleans food equipment and utensils must undergo food safety training if they {`don't`} already have the required skills.</Text>
          <Text>The easiest way to make sure {`you're`} meeting the federal requirements is by completing a food safety training course, such as the Food Handlers course provided by AIFS.</Text>
        </div>
        <div>
          <Text className="font-semibold">Local council requirements</Text>
            <Text>Local councils are usually responsible for food business registration, monitoring compliance, providing education and advice, and taking enforcement action when needed.</Text>
            <Text>Both state and federal requirements are enforced at a local level through Health Inspectors employed by local councils.</Text>
            <Text>Health Inspectors play an important role in monitoring food safety. They have the authority to:</Text>
            <ul className="checklist pb-4">
              <ListItem>Enter a food business property at any time</ListItem>
              <ListItem>Enter without permission</ListItem>
              <ListItem>Request evidence that the correct food safety training has been performed</ListItem>
              <ListItem>Go into any area of a food business</ListItem>
              <ListItem>Take samples</ListItem>
              <ListItem>Issue infringement notices (fines)</ListItem>
              <ListItem>Close the business immediately - if {`it's`} deemed to be a serious public health risk</ListItem>
            </ul>
            { props.state == "QLD" ? <span><Text className="font-semibold">Brisbane City Council</Text>
            <Text>In Queensland, Brisbane City Council is very active in the promotion of food safety.</Text>
            <Text>It operates the popular {`'Eat Safe'`} campaign which rates food businesses on their levels of food safety, with a star rating between 1 (the lowest score) and 5 (the highest).</Text>
            <Text>Each year, Brisbane City Council releases a {`'Name & Shame'`} list for food businesses that have breached food safety legislation within the past 12 months.</Text></span> : null }
          </div>
        </div>
    </div>
  </div>
};

export default FederalLocalLaws;
