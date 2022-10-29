import { IconCard } from 'components/core/templates';
import { Header3, Text } from 'components/core';
import styles from '../../../pages/laws-requirements/styles.module.scss';

interface BeAwareProps {
  title?: string;
  subtitle?: string;
}

export const BeAware = (props:BeAwareProps) => {
    return <div className="col-span-3">
    <Header3 className="pb-4">{ props.title || "Be aware of Food Safety Laws"}</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col">
        <Text className="!mb-8">{ props.subtitle || "Food Safety is governed by two sets of legislation - state and federal. Both are enforced at a local council level by Health Inspectors."}</Text>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8">
          <IconCard
            imageSrc={"/icons/icon_stroke_green_checkmark_australia.svg"}
            title="Federal Legislation"
            >
              <Text>The federal legislation is governed by Food Standards Australia New Zealand (FSANZ).</Text>
              <Text>It states that anyone who works with food must be trained in certain aspects of food safety at a level appropriate to their role.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/icons/icon_stroke_green_checkmark_australia.svg"}
            title="State Legislation"
            >
              <Text>Each state has {`it's`} own Food Safety Act that needs to be adhered to.</Text>
              <Text>Legislation is strictest in NSW, QLD, VIC and ACT where {`it's`} mandatory to have a fully trained Food Safety Supervisor at every business location.</Text>
            </IconCard>
        </div>
      </div>
    </div>
  </div>
  };

export default BeAware;
