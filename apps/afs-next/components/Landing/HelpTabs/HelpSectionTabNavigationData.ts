interface HelpSectionTabNavigationMenuData {
    title: string;
    links: Array<{ text: string, href: string }>;
    tabname: string;
}
const data: {[key: string]: HelpSectionTabNavigationMenuData} = {
    "Food Safety Courses": {
        "tabname": "food-safety-courses",
        "title": "Learn more about Food Safety Courses",
        "links": [
            { text: "Food Safety Supervisor", href: "/courses/food-safety-supervisor" },
            { text: "Food Handler Course", href: "/courses/food-handler-course"},
            { text: "NSW Recertification", href: "/courses/nsw-recertification"},
            { text: "Food Safety Manager", href: "/courses/food-safety-manager"},
            { text: "Introduction to Food Safety", href: "/courses/introduction-to-food-safety-course"},
        ],
    },
    "Laws & Requirements by Role": {
        tabname: "laws-and-requirements-by-role",
        title: "By Role",
        links: [
            { text: "For Job Seekers", href: "/laws-requirements/role/for-job-seekers"},
            { text: "For Employees", href: "/laws-requirements/role/for-employees"},
            { text: "For New Businesses", href: "/laws-requirements/role/for-new-businesses"},
            { text: "For Established Businesses", href: "/laws-requirements/role/for-established-businesses"},
            { text: "For Training Managers", href: "/laws-requirements/role/for-training-managers"},
        ]
    },
    "Laws & Requirements by Industry Sector": {
        tabname: "laws-and-requirements-by-role",
        title: "By Industry Sector",
        links: [
            { text: "Hospitality Sector", href: "/laws-requirements/food-sectors/hospitality-sector"},
            { text: "Food Retail Sector", href: "/laws-requirements/food-sectors/retail"},
            { text: "Health & Community Sector", href: "/laws-requirements/food-sectors/health-community"},
            { text: "Food Processing Sector", href: "/laws-requirements/food-sectors/food-processing"},
            { text: "Transport & Distribution Sector", href: "/laws-requirements/food-sectors/transport-distribution"},
        ]
    },
    "Laws & Requirements by Industry Location": {
        tabname: "laws-and-requirements-by-role",
        title: "By Industry Location",
        links: [
            { text: "New South Wales", href: "/laws-requirements/location/new-south-wales"},
            { text: "Victoria", href: "/laws-requirements/location/victoria"},
            { text: "Queensland", href: "/laws-requirements/location/queensland"},
            { text: "Australian Capital Territory", href: "/laws-requirements/location/act"},
            { text: "SA / NT / WA / TAS", href: "/laws-requirements/location/sa-nt-wa-tas"},
        ]
    },
    "AIFS Membership": {
        tabname: "aifs-membership",
        title: "Learn more about AIFS Membership",
        links: [
            { text: "Membership Program", href: "/membership/membership-program" },
            { text: "Food Safety Decal", href: "/membership/food-safety-decal" },
        ]
    }
};

export default data;