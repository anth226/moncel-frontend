import { IntroBox } from 'components/core/templates';
import { Header3, Text } from 'components/core';
import styles from '../../pages/courses/styles.module.scss';
import { SectionContainer } from 'components/core/SectionContainer';

export const Community = () => {
    return <SectionContainer className="col-span-3" id="helping-the-community">
        <div className="w-full flex flex-col items-center pb-8 text-center">
            <Header3>Helping the Community</Header3>
            <Text className={styles["subtitle"]}>Your enrolment will help feed someone in need</Text>
        </div>
        <IntroBox
            imageSrc="/courses/ozharvest.jpg"
            alt="courses-community-ozharvest-section-graphic">
            <Text>1 in 10 Australians rely on food aid each year, yet in Australia we throw out $10bn of food annually. Together we can help to tackle this issue.</Text>
            <Text className="font-semibold">Your enrolment = 2 meals to those in need</Text>
            <Text>{`We've partnered with OzHarvest to help deliver meals to people facing hunger issues in the Australian community.`}</Text>
            <Text>{`When you sign up for the official AIFS Food Safety Supervisor course, we'll provide OzHarvest with the resources to donate 2 meals to those in need.`}</Text>
            <Text className="text-sm italic">Photo Credit: OzHarvest</Text>
        </IntroBox>
    </SectionContainer>;

};

export default Community;
