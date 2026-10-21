"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                <span className="font-bold">WellBite</span>
              </Link>
              <Link
                href="/"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/" ? "text-foreground" : "text-foreground/60",
                )}
              >
                Home
              </Link>
              <Link
                href="/recipes"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/recipes") ? "text-foreground" : "text-foreground/60",
                )}
              >
                Recipes
              </Link>
              <Link
                href="/recipe-generator"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/recipe-generator") ? "text-foreground" : "text-foreground/60",
                )}
              >
                Recipe Generator
              </Link>
              <Link
                href="/diet-plans"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/diet-plans") ? "text-foreground" : "text-foreground/60",
                )}
              >
                Diet Plans
              </Link>
              <Link
                href="/about"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/about") ? "text-foreground" : "text-foreground/60",
                )}
              >
                About
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block">WellBite</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/" ? "text-foreground" : "text-foreground/60",
            )}
          >
            Home
          </Link>
          <Link
            href="/recipes"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname?.startsWith("/recipes") ? "text-foreground" : "text-foreground/60",
            )}
          >
            Recipes
          </Link>
          <Link
            href="/recipe-generator"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname?.startsWith("/recipe-generator") ? "text-foreground" : "text-foreground/60",
            )}
          >
            Recipe Generator
          </Link>
          <Link
            href="/diet-plans"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname?.startsWith("/diet-plans") ? "text-foreground" : "text-foreground/60",
            )}
          >
            Diet Plans
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname?.startsWith("/about") ? "text-foreground" : "text-foreground/60",
            )}
          >
            About
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:flex">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search recipes..."
                className="w-[200px] pl-8 md:w-[200px] lg:w-[300px]"
              />
            </div>
          </div>
          <Button variant="ghost" size="icon" className="mr-2">
            <Search className="h-5 w-5 md:hidden" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="mr-2">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button>Sign In</Button>
        </div>
      </div>
    </header>
  )
}

