import { CameraIcon, MailIcon, PhoneIcon, type LucideIcon } from "lucide-react";

interface ContactSectionContent {
  heading: string;
  description: string;
  contacts: {
    icon: LucideIcon;
    label: string;
    value: string;
  }[];
  formWhatsapp: string;
}

export const ContactSectionContent: ContactSectionContent = {
  heading: "Get In Touch",
  description:
    "Whether you have a specific project in mind or just want to explore possibilities, we're here to talk.",
  contacts: [
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "+62 895-1203-1897",
    },
    {
      icon: MailIcon,
      label: "Email",
      value: "nateamscreative@gmail.com",
    },
    {
      icon: CameraIcon,
      label: "Instagram",
      value: "@nateamscreative",
    },
  ],
  formWhatsapp: "6289512031897",
};
