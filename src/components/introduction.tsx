"use client"

import { Card, CardHeader } from "@heroui/react";
import Image from "next/image";

export default function Introduction() {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-10 bg-background">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <Image
            src="/profile.jpeg"
            alt="Khor Vanessa"
            width={100}
            height={100}
            className="rounded-full object-cover border-2 border-white shadow-md"
            priority
          />
        </div>
        {/* Name, Title, and Intro */}
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-text font-aboreto">Khor Vanessa</h1>
          <h2 className="text-lg sm:text-xl text-sage font-medium mt-1 font-aboreto">Software Engineer, UI/UX Designer, Web developer</h2>
          <div className="mt-6 space-y-4 text-text text-base sm:text-lg">
            <p>
              I'm a freelance UI/UX designer and web developer with a passion for candid photograph
            </p>
            <p>
              I design, code, and craft digital experiences that feel as good as they look.
            </p>
          </div>
          {/* Contact Info */}
          <ul className="mt-6 space-y-2 text-text">
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <a href="vanessakhor19@gmail.com" className="hover:underline">vanessakhor19@gmail.com</a>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
            <svg width="16px" height="16px" viewBox="0 0 24 24" id="meteor-icon-kit__regular-linkedin" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M5.37214 24H0.396429V7.97674H5.37214V24ZM2.88161 5.79102C1.29054 5.79102 0 4.47317 0 2.8821C2.37147e-08 1.29063 1.29014 0.000488281 2.88161 0.000488281C4.47307 0.000488281 5.76321 1.29063 5.76321 2.8821C5.76321 4.47317 4.47214 5.79102 2.88161 5.79102ZM23.9946 24H19.0296V16.2C19.0296 14.341 18.9921 11.9571 16.4427 11.9571C13.8557 11.9571 13.4593 13.9767 13.4593 16.066V24H8.48893V7.97674H13.2611V10.1625H13.3307C13.995 8.90352 15.6177 7.57495 18.0386 7.57495C23.0743 7.57495 24 10.891 24 15.1982V24H23.9946Z" fill="#758CA3"></path></g></svg>
              <a href="https://www.linkedin.com/in/vanesssakhor19/" target="_blank" rel="noopener noreferrer" className="hover:underline">@vanessakhor19</a>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
            <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
              <a href="https://capsulated.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">Creative Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
} 