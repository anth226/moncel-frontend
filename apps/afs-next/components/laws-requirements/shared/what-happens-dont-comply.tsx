import { Header3, Text } from 'components/core';
import { IconCard } from 'components/core/templates';
import styles from '../../../pages/laws-requirements/styles.module.scss';

interface WhatHappensDontComplyProps {
  version: string;
  p3?: string;
  p4?: string;
  p4_title?: string;
}

interface CardProps {
  p3?: string;
  p4?: string;
  p4_title?: string;
}

const V1 = (props:CardProps) => {
  return (<>
    <IconCard
      imageSrc={"/icons/icon_stroke_green_closed_sign.svg"}
      title="Suspended or cancelled licence"
    >
      <Text>For serious offences, food business licences may be suspended or cancelled. This effectively closes your food business and prevents further trading.</Text>
    </IconCard>
    <IconCard
      imageSrc={"/icons/icon_stroke_green_invoice.svg"}
      title="Significant fines"
    >
      <Text>Fines (penalty notices) may be issued for each offence committed. These often run into tens of thousands of dollars.</Text>
    </IconCard>
    <IconCard
      imageSrc={"/icons/icon_stroke_green_judge.svg"}
      title="Prosecution"
    >
      <Text>{props.p3}</Text>
    </IconCard>
    <IconCard
      imageSrc={"/icons/icon_stroke_green_megaphone.svg"}
      title={props.p4_title || "Added to a Name & Shame list"} 
    >
      <Text>{props.p4}</Text>
    </IconCard>
    <IconCard
      imageSrc={"/icons/icon_stroke_green_licence.svg"}
      title="Prohibition or seizure orders"
    >
      <Text>When public health is at risk, your business may be forbidden to handle food and you may have food seized from your premises and destroyed.</Text>
    </IconCard>
    <IconCard
      imageSrc={"/icons/icon_stroke_green_thumbsdown.svg"}
      title="Brand & reputation damage"
    >
      <Text>If a serious food safety incident occurs and is widely reported in the media, your business could struggle to recover its reputation.</Text>
    </IconCard>
  </>
  )
};

const V2 = () => {
  return (<>
    <IconCard
      imageSrc={"/icons/icon_stroke_green_closed_sign.svg"}
      title="Temporary closure"
    >
      <Text>For serious offences, food premises may be temporarily closed. This effectively closes your food business and prevents further trading.</Text>
    </IconCard>
    <IconCard
      imageSrc={"/icons/icon_stroke_green_invoice.svg"}
      title="Significant fines"
    >
      <Text>On-the-spot fines and penalties may be issued for each offence committed. These often run into tens of thousands of dollars.</Text>
    </IconCard>
    <IconCard
      imageSrc={"/icons/icon_stroke_green_judge.svg"}
      title="Prosecution"
    >
      <Text>For serious breaches of legislation, the Dept of Health & Human Services may start prosecution proceedings against your food business.</Text>
    </IconCard>
    <IconCard
      imageSrc={"/icons/icon_stroke_green_thumbsdown.svg"}
      title="Brand & reputation damage"
    >
      <Text>When serious food safety incidents occur and are widely reported in the media, your food business could struggle to recover its reputation.</Text>
    </IconCard>
  </>
  )
};

export const WhatHappensDontComply = (props: WhatHappensDontComplyProps) => {
  return <div className="col-span-3">
    <Header3 className="pb-4">What happens if I {`don't`} comply?</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col">
        <Text className="pb-4">If a food business fails to meet these food safety training requirements, the consequences are serious.</Text>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8">
          { props.version == "V1" ? <V1 p3={props.p3} p4={props.p4} p4_title={props.p4_title}/> : <V2 /> }
        </div>
      </div>
    </div>
  </div>
};

export default WhatHappensDontComply;
