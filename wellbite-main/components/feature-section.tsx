import { Clock, Leaf, Utensils, ShoppingBag } from "lucide-react"

export function FeatureSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Smart Solutions for Healthy Eating
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              WellBite combines smart technology with nutritional expertise to make healthy eating simple and enjoyable.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <Utensils className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Recipe Generator</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Create meals based on ingredients you already have at home.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Diet Planning</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Get personalized meal plans based on your dietary needs and goals.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Shopping Lists</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Automatically generate shopping lists from your selected recipes.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Time Saving</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Quick recipes and meal prep guides to save you time in the kitchen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

