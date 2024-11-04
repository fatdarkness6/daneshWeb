import { useEffect } from "react"

export default function PlausibleAnalytics() {

    useEffect(() => {
        const script = document.createElement("script");
    script.src = "https://plausible.io/js/script.js";
    script.defer = true;
    script.setAttribute("data-domain", "dnweb.netlify.app"); // دامنه خودتان را در اینجا قرار دهید
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script); // اسکریپت را هنگام خروج حذف می‌کند
    };
    } , [])

    return null
}