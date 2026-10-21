import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-10 px-4 py-10 md:gap-16 md:px-6 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">WellBite</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Smart recipe generation and diet planning for healthier living.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/recipes" className="text-gray-500 hover:text-primary dark:text-gray-400">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/recipe-generator" className="text-gray-500 hover:text-primary dark:text-gray-400">
                  Recipe Generator
                </Link>
              </li>
              <li>
                <Link href="/diet-plans" className="text-gray-500 hover:text-primary dark:text-gray-400">
                  Diet Plans
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-primary dark:text-gray-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-primary dark:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-primary dark:text-gray-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-500 hover:text-primary dark:text-gray-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-500 hover:text-primary dark:text-gray-400">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Newsletter</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Subscribe to our newsletter for recipes, tips, and updates.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" type="email" className="max-w-[220px]" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 WellBite. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-xs text-gray-500 hover:text-primary dark:text-gray-400">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-primary dark:text-gray-400">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-xs text-gray-500 hover:text-primary dark:text-gray-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

