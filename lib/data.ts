export const portfolioWorks = [
    {
        id: "warnjai",
        imagePath: "/warnjai-logo.png",
        imageAlt: "Warnjai Work",
        header: "Warnjai",
        description: "Warnjai is the application project that i have designed with my team to compete in the Startup Thailand league 2024, It's the Application about helping people",
        linkHref: "https://www.figma.com/design/j7rTAmb4T843j6oEAGjkgJ/SEX-and-PMS-App-BETA?node-id=0-1&p=f",
        linkLabel: "See a Figma Prototype"
    },
    {
        id: "breakfast",
        imagePath: "/breakfast-pv.png", 
        imageAlt: "Breakfast Work",
        header: "BreakFast",
        description: "A project to help small restaurants digitize manual operations. Built the frontend of a mobile app using React Native and Expo, supporting order management, inventory tracking, and meal-prep workflows. Backend services were developed using Golang.",
        linkHref: "https://github.com/BreakFast-SA-Project",
        linkLabel: "View on GitHub"
    },
    {
        id: "nisit-deden",
        imagePath: "/nisit-deden-pv.png",
        imageAlt: "Nisit Deden Work",
        header: "Nisit Deden",
        description: "Nisit Deden (Honor Student) is a full-stack web application built with Laravel, SvelteKit, PostgreSQL, and Docker to replace paper-based university award submissions with a streamlined digital workflow. Featuring role-based access control, the platform allows students to submit and track portfolios while providing administrators with a secure dashboard for efficient evaluation and management. This containerized solution eliminates manual bottlenecks, significantly improving the transparency and accessibility of the university’s recognition process.",
        linkHref: "https://github.com/project-lamine-yamal",
        linkLabel: "View on GitHub"
    }

];


export type ContactIcon = "gmail" | "linkedin" | "github" | "phone";

export type ContactItem = {
    id: string;
    label: string;
    value: string;
    href: string;
    icon : ContactIcon;
    external?: boolean;
}