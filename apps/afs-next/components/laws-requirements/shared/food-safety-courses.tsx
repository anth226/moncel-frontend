import { IconCard } from 'components/core/templates';
import { Header3, Text, Link } from 'components/core';
import styles from '../../../pages/laws-requirements/styles.module.scss';
import NextLink from 'next/link';

interface FoodSafetyCourseProps {
  title: string;
  subtitle: string;
  fh1?: string;
  fh2?: string;
  fss1?: string;
  fss2?: string;
}

export const FoodSafetyCourses = (props:FoodSafetyCourseProps) => {
    return <div className="col-span-3">
    <Header3 className="pb-4">{ props.title || ""}</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col">
        <Text className="!mb-8">{ props.subtitle || ""}</Text>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8">
          <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_fh.svg"}
            title="Food Handler Course"
            href="/courses/food-handler-course"
            >
              <Text>{ props.fh1 || "This course meets federal requirements that anyone who works with food needs food safety training."}</Text>
              <Text>{ props.fh2 || "It's important that you know how to handle food safely. This course covers all the basics and provides step-by-step instructions for working in a food environment."}</Text>
              <NextLink href="/courses/food-handler-course"><Link className="font-medium">Learn more about this course.</Link></NextLink>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_FSS.svg"}
            title="Food Safety Supervisor Course"
            href="/courses/food-handler-course"
            >
              <Text>{ props.fss1 || "The Food Safety Supervisor Course meets specific state legislation including for NSW, QLD, VIC and ACT."}</Text>
              <Text>{ props.fss2 || "Every food business in these states needs at least one nationally recognised Food Safety Supervisor on staff, so your FSS qualification will always be in demand."}</Text>
              <NextLink href="/courses/food-safety-supervisor"><Link className="font-medium">Learn more about this course.</Link></NextLink>
            </IconCard>
        </div>
      </div>
    </div>
  </div>
  };

export default FoodSafetyCourses;
