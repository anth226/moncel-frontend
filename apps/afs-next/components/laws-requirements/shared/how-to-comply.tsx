import { IconCard } from 'components/core/templates';
import { Header3, Text } from 'components/core';
import styles from '../../../pages/laws-requirements/styles.module.scss';

interface HowToComplyProps {
  title?: string;
  subtitle?: string;
}

export const HowToComply = (props:HowToComplyProps) => {
    return <div className="col-span-3">
    <Header3 className="pb-4">{ props.title || "How to comply with food safety laws"}</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col">
        <div className={`grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8`}>
          <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_square_num1.svg"}
            title="Train your Food Safety Supervisor"
            >
              <Text>Most Australian hospitality businesses must have at least one properly trained Food Safety Supervisor.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_square_num2.svg"}
            title="Apply for your business licence"
            >
              <Text>See your local council to apply for your business licence to start your hospitalty business.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_square_num3.svg"}
            title="Train your Food Handlers"
            >
              <Text>Not just kitchen staff, but any employee who serves, moves, delivers or cleans food or food equipment.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_square_num4.svg"}
            title="Be food audit ready"
            >
              <Text>Keep your proof of nationally recognised food safety training nearby for food safety inspections.</Text>
            </IconCard>
        </div>
      </div>
    </div>
  </div>
  };

export default HowToComply;
