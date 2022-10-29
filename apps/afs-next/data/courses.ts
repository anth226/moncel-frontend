// export type Courses = "FoodSafetySupervisor" | "FoodHandler";
export enum Courses {
    FoodSafetySupervisor="FoodSafetySupervisor",
    FoodHandler="FoodHandler",
    FoodManager="FoodManager",
    NSWRecertification="NSWRecertification",
    IntroToFoodSafety="IntroToFoodSafety",
    HACCP="HACCP",
}

export type CourseType = {
    longName: string;
    price: string;
    memberPrice: string;
    prerequisites: string;
    nationallyRecognized: boolean;
    checkout: string;
}

export const courseData: Record<Courses, CourseType> = {
    [Courses.FoodSafetySupervisor]: {
        longName: "Food Safety Supervisor Online Course",
        price: "$199.95",
        memberPrice: "",
        prerequisites: "None",
        nationallyRecognized: true,
        checkout: "https://my.foodsafety.com.au/checkout/cart/add?product=13&amp;qty=1",
    },
    [Courses.FoodHandler]: {
        longName: "Food Handler Online Course",
        price: "$99.95",
        memberPrice: "",
        prerequisites: "None",
        nationallyRecognized: true,
        // has multiple options selected so product id should be added on checkout
        checkout: "https://my.foodsafety.com.au/checkout/cart/add?product=",
    },
    [Courses.FoodManager]: {
        longName: "Food Safety Manager Course",
        price: "$299.95",
        memberPrice: "",
        prerequisites: "None",
        nationallyRecognized: false,
        checkout: "https://my.foodsafety.com.au/checkout/cart/add?product=21&amp;qty=1",
    },
    [Courses.NSWRecertification]: {
        longName: "NSW Recertification",
        price: "$199.95 + $30 NSW Food Authority Fee",
        memberPrice: "",
        prerequisites: "A current or expired NSW Food Authority certificate",
        nationallyRecognized: true,
        checkout: "https://my.foodsafety.com.au/checkout/cart/add?product=19&amp;qty=1",
    },
    [Courses.IntroToFoodSafety]: {
        longName: "Intro to Food Safety Online Course",
        price: "$49.95",
        memberPrice: "",
        prerequisites: "None",
        nationallyRecognized: false,
        checkout: "https://my.foodsafety.com.au/checkout/cart/add?product=10&amp;qty=1",
    },
    [Courses.HACCP]: {
        longName: "HACCP Food Safety Plan Kit",
        price: "$99.95",
        memberPrice: "",
        prerequisites: "None",
        nationallyRecognized: false,
        checkout: "https://my.foodsafety.com.au/checkout/cart/add?product=25&qty=1",
    },
};

export default courseData;