"use client"

import type React from "react"

import { useState } from "react"
import { ChevronRight, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RecipeCard } from "@/components/recipe-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RecipeGenerator() {
  const [ingredients, setIngredients] = useState<string[]>([])
  const [inputValue, setInputValue] = useState("")
  const [showResults, setShowResults] = useState(false)

  const handleAddIngredient = () => {
    if (inputValue.trim() && !ingredients.includes(inputValue.trim())) {
      setIngredients([...ingredients, inputValue.trim()])
      setInputValue("")
    }
  }

  const handleRemoveIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter((item) => item !== ingredient))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddIngredient()
    }
  }

  const handleGenerateRecipes = () => {
    setShowResults(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recipe Generator</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Enter ingredients you have on hand and we'll suggest delicious recipes you can make.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>What ingredients do you have?</CardTitle>
                <CardDescription>
                  Add ingredients one by one. The more ingredients you add, the more personalized your recipes will be.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <Input
                        placeholder="Enter an ingredient (e.g., chicken, broccoli, rice)"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                      />
                    </div>
                    <Button onClick={handleAddIngredient}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add
                    </Button>
                  </div>

                  {ingredients.length > 0 && (
                    <div>
                      <Label>Your ingredients:</Label>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {ingredients.map((ingredient) => (
                          <div key={ingredient} className="flex items-center rounded-full bg-muted px-3 py-1 text-sm">
                            {ingredient}
                            <Button
                              variant="ghost"
                              size="icon"
                              className="ml-1 h-4 w-4"
                              onClick={() => handleRemoveIngredient(ingredient)}
                            >
                              <X className="h-3 w-3" />
                              <span className="sr-only">Remove {ingredient}</span>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label>Dietary preferences (optional):</Label>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm">
                        Vegetarian
                      </Button>
                      <Button variant="outline" size="sm">
                        Vegan
                      </Button>
                      <Button variant="outline" size="sm">
                        Gluten-Free
                      </Button>
                      <Button variant="outline" size="sm">
                        Dairy-Free
                      </Button>
                      <Button variant="outline" size="sm">
                        Low-Carb
                      </Button>
                      <Button variant="outline" size="sm">
                        High-Protein
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  size="lg"
                  onClick={handleGenerateRecipes}
                  disabled={ingredients.length === 0}
                >
                  Generate Recipes
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {showResults && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tighter">Recipe Suggestions</h2>
                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">All Recipes</TabsTrigger>
                    <TabsTrigger value="quick">Quick & Easy</TabsTrigger>
                    <TabsTrigger value="healthy">Healthy</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="mt-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      <RecipeCard
                        title="Chicken Stir Fry"
                        description="A quick and healthy stir fry with vegetables"
                        calories={320}
                        prepTime={25}
                        dietType="High-Protein"
                        imagePath="/placeholder.svg?height=300&width=400"
                      />
                      <RecipeCard
                        title="Vegetable Pasta"
                        description="Pasta with seasonal vegetables and herbs"
                        calories={380}
                        prepTime={30}
                        dietType="Vegetarian"
                        imagePath="/placeholder.svg?height=300&width=400"
                      />
                      <RecipeCard
                        title="Rice Bowl"
                        description="Nutritious rice bowl with protein and vegetables"
                        calories={420}
                        prepTime={20}
                        dietType="Balanced"
                        imagePath="/placeholder.svg?height=300&width=400"
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="quick" className="mt-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      <RecipeCard
                        title="Quick Chicken Stir Fry"
                        description="A quick and healthy stir fry with vegetables"
                        calories={320}
                        prepTime={15}
                        dietType="High-Protein"
                        imagePath="/placeholder.svg?height=300&width=400"
                      />
                      <RecipeCard
                        title="5-Minute Rice Bowl"
                        description="Nutritious rice bowl with protein and vegetables"
                        calories={420}
                        prepTime={10}
                        dietType="Balanced"
                        imagePath="/placeholder.svg?height=300&width=400"
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="healthy" className="mt-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      <RecipeCard
                        title="Vegetable Pasta"
                        description="Pasta with seasonal vegetables and herbs"
                        calories={380}
                        prepTime={30}
                        dietType="Vegetarian"
                        imagePath="/placeholder.svg?height=300&width=400"
                      />
                      <RecipeCard
                        title="Healthy Rice Bowl"
                        description="Nutritious rice bowl with protein and vegetables"
                        calories={420}
                        prepTime={20}
                        dietType="Balanced"
                        imagePath="/placeholder.svg?height=300&width=400"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

