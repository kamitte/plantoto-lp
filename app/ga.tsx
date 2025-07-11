"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const GA_ID = "G-DX815WNMGH";

export default function GoogleAnalytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");
        if (typeof window.gtag === "function") {
            window.gtag("config", GA_ID, { page_path: url });
        }
    }, [pathname, searchParams]);

    return null;
}