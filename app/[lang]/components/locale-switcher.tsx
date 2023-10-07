"use client";

import { Locale } from "@/i18n-config";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LocaleList: Array<{
  key: Locale;
  label: string;
}> = [
  {
    key: "zh-CN",
    label: "中文",
  },
  {
    key: "en",
    label: "English",
  },
];

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="switcher">
      {LocaleList.map(({ key, label }) => (
        <div className="item" key={key}>
          <Link href={redirectedPathName(key)}>{label}</Link>
        </div>
      ))}
    </div>
  );
}
