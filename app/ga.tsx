"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA_ID = "G-DX815WNMGH";

export default function GoogleAnalytics() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window.gtag === "function") {
            window.gtag("config", GA_ID, { page_path: pathname });
        }
    }, [pathname]);

    return null;
}