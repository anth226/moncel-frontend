import { ListItem, } from 'components/core/templates';
import NextLink from 'next/link';
import { Header3, Text, Link } from 'components/core';
import styles from '../../../pages/laws-requirements/styles.module.scss';

const FSS1 = () => {
  return (<div>
    <Text className="font-semibold">Food Safety Supervisor Requirements</Text>
    <Text>In NSW, VIC, QLD and ACT, {`it's`} a mandatory requirement that transport and distribution businesses have at least one Food Safety Supervisor on their staff at all times.</Text>
    <Text>This means at least one person must have:</Text>
    <ul className="checklist pb-4">
      <ListItem>undergone nationally recognised training</ListItem>
      <ListItem>obtained the required units of competency to be recognised as a Food Safety Supervisor</ListItem>
    </ul>
    <Text className="font-semibold">Additional NSW requirements</Text>  
    <Text>If you are in NSW:</Text>        
    <ul className="pb-4">
      <ListItem>training must be delivered by a NSW Food Authority approved provider - such as AIFS</ListItem>
      <ListItem>you will receive your regular Statement of Attainment when you complete your Food Safety Supervisor training with AIFS</ListItem>
      <ListItem>you will also receive a certificate issued by the NSW Food Authority</ListItem>
    </ul>
    <Text>If {`you're`} applying for a new food business licence, {`you'll`} be asked for the certificate number from this document.</Text>
    <NextLink href="/courses/food-safety-supervisor"><Link className="font-semibold underline">Click here to learn more about this course.</Link></NextLink>
  </div>  
)};

const FSS2 = () => {
  return (<div>
    <Text className="font-semibold">Food Safety Supervisor Requirements</Text>
    <Text>In VIC, QLD and ACT, {`it's`} a mandatory requirement that health and community organisations have at least one Food Safety Supervisor on their staff at all times.</Text>
    <Text>This means at least one person must have:</Text>
    <ul className="checklist pb-4">
      <ListItem>undergone nationally recognised training</ListItem>
      <ListItem>obtained the required units of competency to be recognised as a Food Safety Supervisor</ListItem>
    </ul>
    <Text className="font-semibold">NSW requirements are a little more complex</Text>  
    <Text>In NSW, only retail and hospitality units of competency are recognised by the NSW Food Authority.</Text>
    <Text>However, many organisations that identify as being {`'health and community'`} are required to have a Food Safety Supervisor.</Text>        
    <Text>To understand the specific requirements for your business, you should always clarify with the NSW Food Authority.</Text>
    <Text>If you are in NSW when you complete your Food Safety Supervisor training with AIFS, you will receive:</Text>
    <ul className="pb-4">
      <ListItem>your regular Statement of Attainment (for the retail or hospitality units)</ListItem>
      <ListItem>a certificate issued by the NSW Food Authority</ListItem>
    </ul>
    <Text>If {`you're`} applying for a new food business licence, {`you'll`} be asked for the certificate number from this document.</Text>
    <NextLink href="/courses/food-safety-supervisor"><Link className="font-semibold underline">Click here to learn more about this course.</Link></NextLink>
  </div>  
)};

interface TrainingRequirementsProps {
  title: string;
  version: string;
}

export const TrainingRequirements = (props:TrainingRequirementsProps) => {
    return <div className="col-span-3">
    <Header3 className="pb-4">{ props.title }</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8">
          { props.version == "FSS1" ? <FSS1 /> : <FSS2 /> }
          <div>
            <Text className="font-semibold">Food Handler Requirements</Text>
            <Text>Federal legislation (governed by FSANZ) states that all Food Handlers must be trained in food safety.</Text>
            <Text>Many people are surprised to learn that Food Handlers {`aren't`} just those employees who work in the kitchen.</Text>
            <Text>A Food Handler can also be someone who:</Text>
            <ul className="pb-4">
              <ListItem>serves food to customers</ListItem>
              <ListItem>moves food into storage</ListItem>
              <ListItem>delivers food</ListItem>
              <ListItem>cleans equipment and utensils</ListItem>
            </ul>
            <Text>Simply put, anyone that comes into contact with food or food equipment in a food business is a {`'Food Handler'`}.</Text>
            <Text>All Food Handlers require the necessary food safety training to perform this role.</Text>
            <Text>The Food Handler Course offered by AIFS has been designed to meet this requirement.</Text>
            <NextLink href="/courses/food-handler-course"><Link className="font-semibold underline">Click here to learn more about this course.</Link></NextLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  };

export default TrainingRequirements;
