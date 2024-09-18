"use client";
import React from "react";
import { Button } from "./movingborder";
import Link from "next/link";

export function MovingBorderDemo() {
    return (
        <div>
            <Link href="/getstarted">
                <Button

                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 w-100 border-neutral-200 dark:border-slate-800"


                >
                    <p
                        className="text-lg text-black dark:text-white">Get Started</p>
                </Button>
            </Link>
        </div>
    );
}
