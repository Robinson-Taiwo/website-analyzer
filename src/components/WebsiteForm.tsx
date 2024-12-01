"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import ComparisonSection from "./ComparisonSection";
import DummyComparisonSection from "./Comparison-section";
import Features from "./Features";

const WebsiteToImage: React.FC = () => {
    const [url, setUrl] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isWorking, setIsWorking] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [showRedesign, setShowRedesign] = useState<boolean>(false);

    const validateUrlFormat = (url: string): boolean => {
        const urlPattern = new RegExp(
            /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?(\/.*)?$/
        );
        return urlPattern.test(url);
    };

    const checkIfUrlWorks = async (url: string): Promise<boolean> => {
        try {
            const response = await fetch(url.startsWith("http") ? url : `https://${url}`, {
                method: "HEAD",
            });
            return response.ok;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    const generateScreenshot = async (url: string): Promise<string | null> => {
        try {
            const encodedUrl = encodeURIComponent(url);
            const apiUrl = `https://api.screenshotone.com/take?access_key=r6e0e_rDCaPASA&url=${encodedUrl}&format=jpg&block_ads=true&timeout=60&response_type=by_format&full_page=true&image_quality=80`;

            const response = await fetch(apiUrl);
            if (!response.ok) {
                console.error("Failed to fetch the screenshot:", response.statusText);
                throw new Error("Failed to fetch the screenshot.");
            }

            const blob = await response.blob();
            return URL.createObjectURL(blob);
        } catch (error) {
            console.error("Error while generating screenshot:", error);
            return null;
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setIsWorking(null);
        setIsLoading(true);
        setProgress(0);
        setImageUrl(null);
        setShowRedesign(false);

        if (!url) {
            setError("Please enter a URL.");
            setIsLoading(false);
            return;
        }
        if (!validateUrlFormat(url)) {
            setError("Invalid URL format. Please enter a valid website link.");
            setIsLoading(false);
            return;
        }

        const isValid = await checkIfUrlWorks(url.startsWith("http") ? url : `https://${url}`);
        setIsWorking(isValid);

        if (isValid) {
            const screenshotUrl = await generateScreenshot(url);
            if (screenshotUrl) {
                setTimeout(() => {
                    setImageUrl(screenshotUrl);
                    setIsLoading(false);
                }, 1000); // Simulate delay for progress bar completion
            } else {
                setError("Failed to generate the screenshot.");
                setIsLoading(false);
            }
        } else {
            setError("The URL is not reachable or does not work.");
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isLoading) {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev < 100) {
                        return prev + 10; // Increment progress
                    } else {
                        clearInterval(interval);
                        return 100;
                    }
                });
            }, 500); // Update every 500ms
        }
    }, [isLoading]);

    useEffect(() => {
        if (imageUrl && progress === 100) {
            setTimeout(() => setShowRedesign(true), 1000); // Delay for "Generating redesign"
        }
    }, [imageUrl, progress]);

    return (
        <div className="flex flex-col items-center w-full">
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
                </button>
            </form>

            {isLoading && <p className="text-rose-600 text-base mt-4">Analyzing the link...</p>}
            {!isLoading && error && <p className="text-red-600 text-sm mt-4">{error}</p>}
            {isWorking && !imageUrl && (
                <div className="mt-4 w-full flex flex-col items-center">
                    <p className="text-green-600 mb-2">Taking screenshot...</p>
                    <Progress value={progress} className="w-[60%]" />
                </div>
            )}

            {imageUrl && !showRedesign && (
                <p className="text-green-600 text-lg mt-4">Generating redesign...</p>
            )}

            {showRedesign && imageUrl && (
                <div className="mt-6 w-full flex flex-col items-center">
                    <p className="text-green-600 text-lg mb-4">Screenshot generated!🎉</p>
                    <ComparisonSection beforeImage={imageUrl} />
                </div>
            )}

            {isLoading && isWorking && !imageUrl && (
                <div className="w-full flex flex-col items-center mt-8">
                    <Features />
                    <DummyComparisonSection />
                </div>
            )}
        </div>
    );
};

export default WebsiteToImage;
