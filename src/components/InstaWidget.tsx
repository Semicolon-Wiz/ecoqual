"use client";
import { useEffect, useState } from "react";

export default function InstaWidget() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const script = document.createElement("script");
        script.src = "https://apps.elfsight.com/p/platform.js";
        script.defer = true;
        document.body.appendChild(script);
    }, []);

    if (!mounted) return null;

    return (
        <div className="elfsight-app-e836d82d-0ae2-47e8-b6eb-7ac6b82dba5a" data-elfsight-app-lazy></div>
    );
}
