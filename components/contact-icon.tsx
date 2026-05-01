import type { ContactIcon } from "@/lib/contact-items";

type ContactIconProps = {
  icon: ContactIcon;
};

export default function ContactIcon({ icon }: ContactIconProps) {
  switch (icon) {
    case "gmail":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M4 7l8 6 8-6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "phone":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5.5 4.5h3l1.5 4-2 1.7a14 14 0 0 0 5.3 5.3l1.7-2 4 1.5v3A2.5 2.5 0 0 1 16.5 20C9.6 20 4 14.4 4 7.5A2.5 2.5 0 0 1 5.5 4.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8 10v7M8 7.5v.01M12 17v-4a2 2 0 1 1 4 0v4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "github":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 3.5a8.5 8.5 0 0 0-2.7 16.57c.43.08.59-.19.59-.42v-1.56c-2.4.52-2.9-1.16-2.9-1.16-.4-1.02-.97-1.29-.97-1.29-.79-.55.06-.54.06-.54.88.06 1.34.9 1.34.9.78 1.34 2.05.95 2.55.72.08-.56.3-.95.55-1.16-1.92-.22-3.94-.96-3.94-4.27 0-.94.34-1.71.9-2.31-.09-.22-.39-1.12.08-2.33 0 0 .73-.23 2.4.88a8.3 8.3 0 0 1 4.36 0c1.67-1.11 2.4-.88 2.4-.88.47 1.21.17 2.11.08 2.33.56.6.9 1.37.9 2.31 0 3.32-2.02 4.04-3.95 4.26.31.27.59.81.59 1.64v2.43c0 .23.16.5.6.42A8.5 8.5 0 0 0 12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
