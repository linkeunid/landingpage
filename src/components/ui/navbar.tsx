"use client";

import { navLinks } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

const Navbar = () => {
  return (
    <NavigationMenu className="container flex items-center justify-between max-w-full h-20 bg-white fixed shadow-md">
      <NavigationMenuList>
        <Link href={"/"}>
          <Image
            src={"/Linkeun_Rectangle.png"}
            alt="logo"
            width={180}
            height={80}
            className="cursor-pointer"
          />
        </Link>
      </NavigationMenuList>
      <NavigationMenuList className="flex gap-2">
        {navLinks.map((it, i) => {
          return (
            <NavigationMenuItem key={i}>
              <Link href={it.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-base hover:underline underline-offset-4",
                    it.href === usePathname() ? "underline" : ""
                  )}
                >
                  {it.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export { Navbar };
