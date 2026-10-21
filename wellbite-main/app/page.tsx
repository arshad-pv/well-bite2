import Link from "next/link"
import { ArrowRight, ChevronRight, Utensils, Calendar, Apple, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { RecipeCard } from "@/components/recipe-card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />

        {/* Recipe Inspiration Section */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recipe Inspiration</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover delicious and healthy recipes tailored to your preferences and dietary needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <RecipeCard
              title="Mediterranean Quinoa Bowl"
              description="A protein-rich bowl with fresh vegetables and herbs"
              calories={420}
              prepTime={20}
              dietType="Vegetarian"
              imagePath="/placeholder.svg?height=300&width=400"
            />
            <RecipeCard
              title="Grilled Salmon with Avocado Salsa"
              description="Omega-3 rich salmon with fresh avocado salsa"
              calories={380}
              prepTime={25}
              dietType="Pescatarian"
              imagePath="/placeholder.svg?height=300&width=400"
            />
            <RecipeCard
              title="Chickpea Curry"
              description="Spicy and flavorful plant-based curry"
              calories={340}
              prepTime={30}
              dietType="Vegan"
              imagePath="/placeholder.svg?height=300&width=400"
            />
          </div>
          <div className="flex justify-center">
            <Button asChild>
              <Link href="/recipes">
                Browse All Recipes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Recipe Generator Teaser */}
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    What's in your fridge?
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Enter your available ingredients and let our smart algorithm generate delicious recipe ideas.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/recipe-generator">
                    <Button size="lg">
                      Try Recipe Generator
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle>Quick Recipe Search</CardTitle>
                    <CardDescription>Enter ingredients you have on hand</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-2">
                      <Input placeholder="e.g., chicken, broccoli, rice" />
                      <Button size="icon" variant="secondary">
                        <Search className="h-4 w-4" />
                        <span className="sr-only">Search</span>
                      </Button>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button variant="outline" size="sm">
                        Chicken
                      </Button>
                      <Button variant="outline" size="sm">
                        Vegetarian
                      </Button>
                      <Button variant="outline" size="sm">
                        Quick Meals
                      </Button>
                      <Button variant="outline" size="sm">
                        Low Carb
                      </Button>
                      <Button variant="outline" size="sm">
                        High Protein
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Diet Planning Section */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Personalized Diet Plans</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get customized meal plans based on your dietary preferences, goals, and lifestyle.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <Tabs defaultValue="weight-loss" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="weight-loss">Weight Loss</TabsTrigger>
                <TabsTrigger value="muscle-gain">Muscle Gain</TabsTrigger>
                <TabsTrigger value="balanced">Balanced</TabsTrigger>
              </TabsList>
              <TabsContent value="weight-loss" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Weight Loss Plan</CardTitle>
                    <CardDescription>Calorie-controlled meals with high protein and fiber</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg border p-3">
                        <div className="flex items-center gap-2">
                          <Utensils className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Balanced Macros</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">40% protein, 30% carbs, 30% healthy fats</p>
                      </div>
                      <div className="rounded-lg border p-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Weekly Meal Plans</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">7-day rotation with shopping lists</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/diet-plans/weight-loss">
                        View Sample Plan
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="muscle-gain" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Muscle Gain Plan</CardTitle>
                    <CardDescription>High protein meals with adequate carbs for energy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg border p-3">
                        <div className="flex items-center gap-2">
                          <Utensils className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Protein-Focused</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">45% protein, 35% carbs, 20% healthy fats</p>
                      </div>
                      <div className="rounded-lg border p-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Workout Nutrition</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Pre and post-workout meal recommendations</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/diet-plans/muscle-gain">
                        View Sample Plan
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="balanced" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Balanced Nutrition Plan</CardTitle>
                    <CardDescription>Well-rounded meals for overall health and wellness</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg border p-3">
                        <div className="flex items-center gap-2">
                          <Utensils className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Nutrient Dense</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">33% protein, 33% carbs, 33% healthy fats</p>
                      </div>
                      <div className="rounded-lg border p-3">
                        <div className="flex items-center gap-2">
                          <Apple className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Whole Foods</h3>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Focus on unprocessed, natural ingredients</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/diet-plans/balanced">
                        View Sample Plan
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

