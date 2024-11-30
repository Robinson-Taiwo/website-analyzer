"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const WebsiteForm: React.FC = () => {
    const [url, setUrl] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isWorking, setIsWorking] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showResults, setShowResults] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);

    // Validate the URL format
    const validateUrlFormat = (url: string): boolean => {
        const urlPattern = new RegExp(
            /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?(\/.*)?$/
        );
        return urlPattern.test(url);
    };

    // Check if the URL is working
    const checkIfUrlWorks = async (url: string): Promise<boolean> => {
        try {
            const response = await fetch(url.startsWith("http") ? url : `https://${url}`, {
                method: "HEAD", // Use HEAD for quick validation
            });
            return response.ok;
        } catch (error) {
            return false;
        }
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Reset states
        setError("");
        setIsWorking(null);
        setIsLoading(false);
        setShowResults(false);
        setProgress(0);

        // Validate format
        if (!url) {
            setError("Please enter a URL.");
            return;
        }
        if (!validateUrlFormat(url)) {
            setError("Invalid URL format. Please enter a valid website link.");
            return;
        }

        // Start loading
        setIsLoading(true);

        // Check if the URL works
        const isValid = await checkIfUrlWorks(url.startsWith("http") ? url : `https://${url}`);
        setIsWorking(isValid);
        setIsLoading(false); // Stop loading once the check is complete

        if (isValid) {
            setTimeout(() => {
                setShowResults(true);
            }, 3000); // Wait for 3 seconds before showing results
        } else {
            setError("The URL is not reachable or does not work.");
        }
    };

    // Progress loader logic
    useEffect(() => {
        if (showResults) {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev < 100) {
                        return prev + 20; // Increment progress by 20%
                    } else {
                        clearInterval(interval);
                        return 100; // Ensure progress stops at 100%
                    }
                });
            }, 1000); // Increment progress every 500ms
        }
    }, [showResults]);

    return (
        <div className="flex w-full flex-col">
            <form
                onSubmit={handleSubmit}
                className="group mx-auto w-full flex max-w-3xl items-center gap-2 rounded-full bg-white p-2 shadow-2xl shadow-rose-100/50 ring-1 ring-rose-100 transition-shadow hover:shadow-rose-200/50 focus-within:ring-2 focus-within:ring-rose-200"
            >
                <input
                    type="text"
                    placeholder="Enter your website URL..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="flex-1 bg-transparent px-4 py-3 text-lg outline-none placeholder:text-muted-foreground/60"
                />
                <button
                    type="submit"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-600 text-white shadow-sm transition-colors hover:bg-rose-700"
                >
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Analyze Website</span>
                </button>
            </form>

            {isLoading && <p className="text-blue-500 text-sm mt-2">Checking the link...</p>}
            {!isLoading && error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {!isLoading && isWorking === true && !showResults && (
                <p className="text-green-500 text-sm mt-2">The link is working!</p>
            )}
            {!isLoading && showResults && (
                <div className="flex w-full lg:mt-10 justify-center flex-col ">
                    <p className="text-blue-500 text-xl mb-2">Generating results...</p>

                    <div className="flex justify-center w-full">

                        <Progress value={progress} className="w-[60%] items-center  " />
                    </div>
                </div>
            )}
            {!isLoading && isWorking === false && !showResults && (
                <p className="text-red-500 text-sm mt-2">The link is not working.</p>
            )}
        </div>
    );
};

export default WebsiteForm;
