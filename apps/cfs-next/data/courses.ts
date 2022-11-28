export enum Courses {
    FoodHandler="FoodHandler",
    Membership="Membership",
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
    [Courses.FoodHandler]: {
        longName: "Food Handler Online Course",
        price: "$99.95",
        memberPrice: "",
        prerequisites: "None",
        nationallyRecognized: true,
        // has multiple options selected so product id should be added on checkout
        checkout: "https://my.foodsafety.com.au/checkout/cart/add?product=",
    },
    [Courses.Membership]: {
        longName: "AIFS Membership",
        price: "$99.95",
        memberPrice: "",
        prerequisites: "None",
        nationallyRecognized: false,
        checkout: "/membership/checkout",
    }
};
