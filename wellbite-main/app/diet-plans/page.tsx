import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function DietPlans() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Personalized Diet Plans</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get customized meal plans based on your dietary preferences, goals, and lifestyle.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Weight Loss</CardTitle>
                  <CardDescription>Calorie-controlled meals with high protein and fiber</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>Balanced macronutrients</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>Portion-controlled meals</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>High fiber recipes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>Weekly shopping lists</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>Meal prep guides</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/diet-plans/weight-loss">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col border-primary">
                <CardHeader>
                  <div className="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground w-fit">
                    Most Popular
                  </div>
                  <CardTitle className="mt-2">Balanced Nutrition</CardTitle>
                  <CardDescription>Well-rounded meals for overall health and wellness</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>Nutrient-dense recipes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>Whole food focus</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>Variety of cuisines</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>Weekly shopping lists</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>Meal prep guides</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/diet-plans/balanced">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Muscle Gain</CardTitle>
                  <CardDescription>High protein meals with adequate carbs for energy</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>High protein recipes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>Workout nutrition timing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>Calorie surplus guidance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>Weekly shopping lists</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>Meal prep guides</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/diet-plans/muscle-gain">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="rounded-lg border bg-muted/50 p-6">
              <h2 className="text-xl font-bold">How It Works</h2>
              <ol className="mt-4 space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Complete a brief questionnaire</h3>
                    <p className="text-sm text-gray-500">
                      Tell us about your dietary preferences, restrictions, goals, and lifestyle.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Receive your personalized plan</h3>
                    <p className="text-sm text-gray-500">
                      Our algorithm creates a customized meal plan based on your inputs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Shop and prep with ease</h3>
                    <p className="text-sm text-gray-500">
                      Use our generated shopping lists and meal prep guides to save time.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">Track progress and adjust</h3>
                    <p className="text-sm text-gray-500">Monitor your results and fine-tune your plan as needed.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

